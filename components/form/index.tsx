import { useState, useEffect } from "react";
import TitleGradient from "../title-gradient";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";
import { formService } from "./service";

import SucessIcon from "../../assets/susess-emoji.png";
import Image from "next/image";
import GifLoad from "../../assets/gif-loader.gif";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [season, setSeason] = useState(0);
  const [campos, setCampos] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: null,
      email: null,
      phone: null,
      age: null,
      cpf: null,
      student_address: {
        address: {
          city: null,
          state: null
        },
      },
      student_empregability:{
        interest_area: null
      }
    },
  });

  const [states, setStates] = useState<string[]>([]);
  const [citys, setCitys] = useState<string[]>([]);
  const State = watch("student_address.address.state");

  const fatchState = async () => {
    const response = await fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    ).then((res) => res.json());
    const states = response.map((state) => state.sigla);
    setStates(states);
  };

  useEffect(() => {
    fatchState();
  }, []);

  const fatchCity = async () => {
    if (State) {
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${State}/municipios`
      ).then((res) => res.json());
      const citys = response.map((city) => city.nome);
      setCitys(citys);
    }
  };
  useEffect(() => {
    fatchCity();
  }, [State]);

  const onSubmit = async (data) => {
      try {
        setLoading(true);
        const dataForm = {
          ...data,
        };

        const response = await formService.postDates(dataForm);
        
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        setSeason(12);
        reset(data);
      }
  };

  function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");

    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{2})$/, "$1-$2");

    return cpf;
  }

  function handlePhoneInputStudent(event) {
    let input = event.target.value;
    input = input.replace(/\D/g, "");

    if (input.length <= 10) {
      input = input.replace(/^(\d{2})(\d)/g, "($1) $2");
      input = input.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      input = input.replace(/^(\d{2})(\d)/g, "($1) $2");
      input = input.replace(/(\d{5})(\d)/, "$1-$2");
    }

    event.target.value = input;
  }

  return (
    <section className={styles.content} id="form">
      <div className={styles.boxContent}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.contentInputs}>
            {season === 0 ? (
              // Campos: Nome, Email, CPF
              <>
                <TitleGradient Children="Pré-inscrição Vai na Web!" />
                <div className={styles.content_form}>
                  <div className={styles.box_input}>
                    <label>Qual é o seu nome?</label>
                    <input
                      type="text"
                      placeholder="Digite seu nome completo"
                      {...register("fullname")}
                      required
                    />
                  </div>
                  <div className={styles.box_input}>
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Digite o seu melhor email"
                      {...register("email")}
                      required
                    />
                  </div>
                  <div className={styles.box_input}>
                    <label>CPF</label>
                    <input
                      type="text"
                      maxLength={11}
                      placeholder="Digite seu CPF (somente números)"
                      {...register("cpf", {
                        validate: (match) => {
                          const cpfPass = getValues("cpf");
                          return (
                            cpfPass.length === 14 || "CPF inválido"
                          );
                        },
                      })}
                      onBlur={(e) => {
                        let value = formatCPF(e.target.value);
                        setValue("cpf", value);
                      }}
                      required
                    />
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {errors?.cpf?.message as any}
                    </p>
                  </div>
                  <div className={styles.box_input}>
                    <label>
                      Telefone de contato
                      <br /> (preferência para número que tenha conta no
                      WhatsApp)
                    </label>
                    <input
                      placeholder="(00) 00000-0000"
                      type="text"
                      id="phone"
                      name="phone"
                      maxLength={15}
                      {...register("phone")}
                      required
                      onChange={handlePhoneInputStudent}
                    />
                  </div>
                  <div className={styles.box_input}>
                    <label>Idade</label>
                    <input
                      type="text"
                      placeholder="Digite sua idade"
                      {...register("age")}
                      required
                    />
                  </div>
                  <div
                    className={styles.box_input}
                    style={{ marginBottom: "1rem" }}
                  >
                    <label htmlFor="typeCidade">Qual é o seu estado?</label>
                    <select
                      {...register("student_address.address.state")}
                      required
                    >
                      <option>Escolha</option>
                      {states?.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div
                    className={styles.box_input}
                    style={{ marginBottom: "1rem" }}
                  >
                    <label htmlFor="typeEstado">Qual é a sua cidade?</label>
                    <select
                      {...register("student_address.address.city")}
                      disabled={State === undefined}
                      required
                    >
                      {citys.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.box_input}>
                    <label>
                      Qual é sua área de interesse (Você pode escolher mais de uma)
                    </label>
                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        type="radio"
                        name="area"
                        value="Front-End"
                        {...register("student_empregability.interest_area")}
                        required
                      />
                      <label>Front-End</label>
                    </div>
                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        type="radio"
                        name="area"
                        value="Back-End"
                        {...register("student_empregability.interest_area")}
                        required
                      />
                      <label>Back-End</label>
                    </div>

                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        type="radio"
                        name="area"
                        value="Full Stack"
                        {...register("student_empregability.interest_area")}
                        required
                      />
                      <label>Full Stack</label>
                    </div>

                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        type="radio"
                        name="area"
                        value="AWS Cloud"
                        {...register("student_empregability.interest_area")}
                        required
                      />
                      <label>AWS Cloud</label>
                    </div>

                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        type="radio"
                        name="area"
                        value="Inteligência Artificial"
                        {...register("student_empregability.interest_area")}
                        required
                      />
                      <label>Inteligência Artificial</label>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button className={styles.button_submit} disabled={loading}>
                      {loading ? (
                        <Image
                          src={GifLoad}
                          style={{ width: "20px", height: "20px" }}
                          alt=""
                        />
                      ) : (
                        "Enviar"
                      )}
                    </button>
                  </div>
                  {campos === true && (
                    <p style={{ color: "red", marginTop: "1rem" }}>
                      Preencha todos os campos antes de enviar.
                    </p>
                  )}
                  <p className={styles.textInfo}>
                    Ao <b>Iniciar</b> esta etapa, você declara que possui no
                    mínimo 16 anos de idade e concorda em compartilhar
                    informações pessoais para efetuar a sua inscrição de acordo
                    com os padrões legais de compartilhamento de dados (LGPD;
                    Lei n° 13.709/2018).
                  </p>
                </div>
              </>
            ) : season === 12 ? (
              // Sucesso na inscrição
              <>
                <div className={styles.content_error}>
                  <h3>
                    Pré-Inscrição Realizada com Sucesso!
                  </h3>
                  <p>
                  Parabéns! Sua pré-inscrição para receber informações sobre as próximas turmas do Vai na Web foi concluída com sucesso.
                  </p>
                  <br />
                  <br />
                  <Image src={SucessIcon}  alt="emoji"/>
                </div>
              </>
            ) : null}
          </div>
        </form>
      </div>

    </section>
  );
}
