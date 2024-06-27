import { useState, useEffect } from "react";
import TitleGradient from "../title-gradient";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";
import { formService } from "./service";

import ImgIncorrect from "../../assets/incorrect-icon.png";
import SucessIcon from "../../assets/susess-emoji.png";
import PiskIcon from "../../assets/pisk-emoji.png";
import FogueteIcon from "../../assets/foguete-emoji.png";
import Image from "next/image";
import GifLoad from "../../assets/gif-loader.gif";
import InfoComponent from "../info-component";


import Faixa from "../../assets/faixa.png"
import Encerradas from "../../assets/EncerradasMobile.png";
import EncerradasDesk from "../../assets/EncerradasDesktop.png";


export default function Form() {
  const [loading, setLoading] = useState(false);
  const [season, setSeason] = useState(-1);
  const [campos, setCampos] = useState(false);
  const [haveDocuments, setHaveDocuments] = useState(null);
  const [aceitarCompartilhar, setAceitarCompartilhar] = useState(null);
  const [isDesable, setIsDesable] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [cpf, setCpf] = useState("");
  const [idade, setIdade] = useState(null);
  const [genero, setGenero] = useState("");
  const [possuiComputador, setPossuiComputador] = useState("");
  const [tipoComputador, setTipoComputador] = useState("");
  const [possuiDeficiencia, setPossuiDeficiencia] = useState("");
  const [tipoDeficiencia, setTipoDeficiencia] = useState("");
  const [possuiInternet, setPossuiInternet] = useState("");
  const [velocidadeInternet, setVelocidadeInternet] = useState("");
  const [quantidadePessoas, setQuantidadePessoas] = useState("");
  const [moradorComunidade, setMoradorComunidade] = useState("");
  const [rendaFamiliar, setRendaFamiliar] = useState("");
  const [anoMatriculado, setAnoMatriculado] = useState("");
  const [validadorCPF, setValidadorCPF] = useState(false);
  const [curso, setCurse] = useState("");
  const [textErr, setTextErr] = useState(false);
  const [mensageDeError, setMensageDeError] = useState(false);
  const [foiAluno, setFoiAluno] = useState<boolean>(null);
  const [errosForm, setErrosForm] = useState<any>({
    age: "",
    have_computer: "",
    have_internet: "",
    income_range: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: null,
      cpf: null,
      email: null,
      emailReapet: null,
      birth_date: null,
      sexuality: null,
      gender: null,
      skin_color: null,
      course_enrolled: null,
      year_enrolled: null,
      concordarDados: null,
      haveDocuments: null,
      phone: null,
      student_responsible: {
        fullname: null,
        relation: null,
        cpf: null,
        phone: null,
        email: null,
      },
      student_address: {
        community: null,
        address: {
          city: null,
          state: null,
        },
      },
      student_tecnology: {
        have_computer: false,
        computer_type: null,
        have_internet: false,
        internet_type: null,
      },
      student_socioeconomic_data: {
        live_with_pwd: false,
        cid: null,
        housemates: null,
        income_range: null,
        live_in_community: null,
      },
    },
  });

  const [states, setStates] = useState<string[]>([]);
  const [citys, setCitys] = useState<string[]>([]);

  const birthDate = watch("birth_date");
  const haveComputer = watch("student_tecnology.have_computer");
  const havePDW = watch("student_socioeconomic_data.live_with_pwd");
  const haveInternet = watch("student_tecnology.have_internet");
  const State = watch("student_address.address.state");
  const isCommunity = watch("student_socioeconomic_data.live_in_community");

  const concordarDadosValue = watch("haveDocuments");

  useEffect(() => {
    if (birthDate) {
      const hoje = new Date();
      const nascimento = new Date(birthDate);
      let novaIdade = hoje.getFullYear() - nascimento.getFullYear();
      const mesAtual = hoje.getMonth();
      const mesNascimento = nascimento.getMonth();

      if (
        mesNascimento > mesAtual ||
        (mesNascimento === mesAtual && hoje.getDate() < nascimento.getDate())
      ) {
        novaIdade--;
      }

      setIdade(novaIdade);
    }
  }, [birthDate]);

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

  function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");

    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{2})$/, "$1-$2");

    return cpf;
  }

  const onSubmit = async (data) => {
    if (season === 0) {
      try {
        setLoading(true);
        const response = await formService.gerVerifyCPF(data.cpf, data.email);
        if (response.data.can_create) {
          return setSeason(season + 1);
        } else {
          return setSeason(9);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    if (foiAluno === true) {
      if (season === 1) {
        const DataFormStudents = {
          fullname: getValues("fullname"),
          cpf: getValues("cpf"),
          email: getValues("email"),
          course_enrolled: getValues("course_enrolled"),
          year_enrolled: getValues("year_enrolled"),
        };
        let response;
        try {
          setLoading(true);
          response = await formService.postDates(DataFormStudents as any);
          if (response && response.status === 200) {
            return setSeason(14);
          } else {
            return setSeason(season + 1);
          }
        } catch (error) {
          console.error("Erro ao enviar os dados:", error);
        } finally {
          setLoading(false);
        }
      }
    } else if (season === 1) {
      return setSeason(season + 1);
    }

    if (season === 2) {
      if (idade > 18) {
        return setSeason(season + 2);
      }
      if (haveDocuments === null || aceitarCompartilhar === null) {
        setIsDesable(true);
      }
      if (idade < 18 && haveDocuments === "nao") {
        return setSeason(13);
      }
      if (
        idade < 18 &&
        haveDocuments === "sim" &&
        aceitarCompartilhar === null
      ) {
        setIsDesable(true);
      }
      if (
        idade < 18 &&
        haveDocuments === "sim" &&
        aceitarCompartilhar === "nao"
      ) {
        return setSeason(13);
      }
      if (
        idade < 18 &&
        haveDocuments === "sim" &&
        aceitarCompartilhar === "sim"
      ) {
        return setSeason(season + 1);
      }
    }

    if (season <= 7 && season > 2) {
      return setSeason(season + 1);
    }

    if (data.student_tecnology.have_computer === "false")
      delete data.student_tecnology.computer_type;

    if (data.student_tecnology.have_internet === "false")
      delete data.student_tecnology.internet_type;

    if (season === 8) {
      try {
        const dataForm = {
          ...data,
          age: idade,
          student_tecnology: {
            ...data.student_tecnology,
            have_computer:
              data.student_tecnology.have_computer === "true" ? true : false,
            have_internet:
              data.student_tecnology.have_internet === "true" ? true : false,
          },
          student_socioeconomic_data: {
            ...data.student_socioeconomic_data,
            live_with_pwd:
              data.student_socioeconomic_data.live_with_pwd === "true"
                ? true
                : false,
          },
        };

        const response = await formService.postDates(dataForm);
        setLoading(true);
        if (response.status === 200) {
          setSeason(12);
        } else {
          response.message.non_field_errors.map((item) => {
            if (item.age) {
              setErrosForm((prevState: any) => {
                return { ...prevState, age: item.age };
              });
            }
            if (item.have_computer) {
              setErrosForm((prevState: any) => {
                return { ...prevState, have_computer: item.have_computer };
              });
            }
            if (item.have_internet) {
              setErrosForm((prevState: any) => {
                return { ...prevState, have_internet: item.have_internet };
              });
            }
            if (item.income_range) {
              setErrosForm((prevState: any) => {
                return { ...prevState, income_range: item.income_range };
              });
            }
          });
          setSeason(10);
        }
      } catch (err) {
        console.log(err);
        return setSeason(10);
      } finally {
        setLoading(false);
      }
    }
  };

  const watchOptions = watch([
    "student_tecnology.have_computer",
    "student_tecnology.have_internet",
    "student_socioeconomic_data.live_with_pwd",
  ]);

  useEffect(() => {
    const resetDetails = (option, detail, value) => {
      if (option == "false") {
        setValue(detail, value);
      }
    };

    resetDetails(watchOptions[0], "student_tecnology.computer_type", false);
    resetDetails(watchOptions[1], "student_tecnology.internet_type", false);
    resetDetails(watchOptions[2], "student_socioeconomic_data.cid", "");
  }, [watchOptions, setValue]);

  const goBackPage = () => {
    if (idade < 18) {
      setSeason(season - 1);
    } else {
      setSeason(season - 2);
    }
  };

  const verificarIdade = () => {
    if (idade === null) {
      return null;
    }
    if (idade < 18) {
      return (
        <div>
          <p className={styles.textAge}>
            <b>Identificamos que você é menor de idade.</b>
            <br />
            <br />
            Por favor, solicite ao <b>seu responsável</b> para que tenha os
            próprios <b>documentos</b> em mãos para prosseguir com a inscrição.
            <br />
            <br />
            <p style={{ textAlign: "start" }}>Estou em posse dos documentos?</p>
            <br />
            <div className={styles.box_input}>
              <span
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "2rem",
                }}
              >
                <div className={styles.boxOptions} style={{ width: "auto" }}>
                  <input
                    {...register("haveDocuments", { required: true })}
                    type="radio"
                    id="simResponsavel"
                    onChange={() => setHaveDocuments("sim")}
                    value="sim"
                  />
                  <label htmlFor="simResponsavel">Sim</label>
                </div>
                <div className={styles.boxOptions} style={{ width: "auto" }}>
                  <input
                    {...register("haveDocuments", { required: true })}
                    type="radio"
                    id="naoResponsavel"
                    onChange={() => setHaveDocuments("nao")}
                    value="nao"
                  />
                  <label htmlFor="naoResponsavel">Não</label>
                </div>
              </span>
            </div>
            {haveDocuments === "sim" ? (
              <>
                <b style={{ marginTop: "2rem", display: "flex" }}>
                  Sr(a) Responsável,
                </b>
                <p style={{ textAlign: "start", marginTop: "0.7rem" }}>
                  Antes de prosseguir, você concorda em compartilhar informações
                  pessoais para efetuar a inscrição do aluno de acordo com os
                  padrões legais de compartilhamento de dados (LGPD; Lei n°
                  13.709/2018)?
                </p>
                <br />
                <div className={styles.box_input}>
                  <span
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "2rem",
                    }}
                  >
                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        {...register("concordarDados", { required: true })}
                        type="radio"
                        id="simResponsavel"
                        onChange={() => setAceitarCompartilhar("sim")}
                        value="sim"
                      />
                      <label htmlFor="simResponsavel">Sim</label>
                    </div>
                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        {...register("concordarDados", { required: true })}
                        type="radio"
                        id="naoResponsavel"
                        onChange={() => setAceitarCompartilhar("nao")}
                        value="nao"
                      />
                      <label htmlFor="naoResponsavel">Não</label>
                    </div>
                  </span>
                </div>
              </>
            ) : aceitarCompartilhar === "nao" ? (
              ""
            ) : (
              ""
            )}
          </p>
        </div>
      );
    }
  };

  const verificarEmail = () => {
    if (getValues("email") !== getValues("emailReapet")) {
      return false;
    } else return true;
  };

  function handlePhoneInput(event) {
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
    <section className={styles.content}>
      <Image src={Faixa} alt=""  className={styles.faixa_top}/>
      <Image src={Encerradas} alt=""  className={styles.img_encerr}/>
      <Image src={EncerradasDesk} alt=""  className={styles.img_encerr_desk}/>

      <div className={styles.boxContent}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.contentInputs}>
            {season === 0 ? (
              // Campos: Nome, Email, CPF
              <>
                <TitleGradient Children="Inscreva-se no Vai na Web!" />
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
                      onPaste={(e) => {
                        e.preventDefault();
                        return false;
                      }}
                      onCopy={(e) => {
                        e.preventDefault();
                        return false;
                      }}
                      required
                    />
                  </div>

                  <div
                    className={styles.box_input}
                    style={{ position: "relative" }}
                  >
                    <label>Repita o Email</label>
                    <input
                      type="email"
                      placeholder="Digite novamente o email"
                      {...register("emailReapet", {
                        validate: (match) => {
                          const emailPass = getValues("email");
                          return (
                            match === emailPass || "E-mails estão divergentes"
                          );
                        },
                      })}
                      onPaste={(e) => {
                        e.preventDefault();
                        return false;
                      }}
                      onCopy={(e) => {
                        e.preventDefault();
                        return false;
                      }}
                      required
                    />
                    {errors?.emailReapet?.message && (
                      <p
                        style={{
                          position: "absolute",
                          top: "-0.6rem",
                          left: "30%",
                          color: "red",
                          fontSize: "0.875rem",
                        }}
                      >
                        {String(errors.emailReapet.message)}
                      </p>
                    )}
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
                    <button
                      className={styles.button_remember}
                      onClick={() => setSeason(8)}
                      style={{ display: "none" }}
                    >
                      Já foi nosso aluno?
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
            ) : season === 1 ? (
              // Campos: Ja foi nosso aluno, Curso e Ano
              <>
                <div className={styles.box_titleForm}>
                  <div className={styles.circleEtaps}>
                    <span style={{ background: "#F3631E" }}></span>
                    <span style={{ background: "#F3631E" }}></span>
                    <p></p>
                    <span style={{ background: "#F3631E" }}></span>
                    <span style={{ background: "#F3631E" }}></span>
                  </div>
                  <div>
                    <h3>Cadastrando o seu perfil</h3>
                    <p>Histórico do aluno</p>
                  </div>
                </div>
                <div className={styles.content_form}>
                  <div className={styles.box_input}>
                    <label>
                      <p style={{ textAlign: "start" }}>Ja foi nosso aluno?</p>
                    </label>
                    <div className={styles.boxOptions}>
                      <input
                        required
                        name="sefoialuno"
                        type="radio"
                        id="jafoinossoaluno"
                        checked={foiAluno === true}
                        onChange={() => setFoiAluno(true)}
                      />
                      <label htmlFor="jafoinossoaluno">Sim</label>
                    </div>
                    <div className={styles.boxOptions}>
                      <input
                        required
                        name="sefoialuno"
                        type="radio"
                        id="naofoialuno"
                        checked={foiAluno === false}
                        onChange={() => setFoiAluno(false)}
                      />
                      <label htmlFor="naofoialuno">Não</label>
                    </div>
                  </div>
                  {foiAluno === true && (
                    <>
                      <div className={styles.box_input}>
                        <label>
                          <p style={{ textAlign: "start" }}>
                            Em qual curso foi matriculado?
                          </p>
                        </label>
                        <div className={styles.boxOptions}>
                          <input
                            required
                            type="radio"
                            id="curseFrontEnd"
                            name="curso"
                            value="Front-End"
                            {...register("course_enrolled")}
                          />
                          <label htmlFor="curseFrontEnd">Front-End</label>
                        </div>
                        <div className={styles.boxOptions}>
                          <input
                            required
                            type="radio"
                            id="curseBackEnd"
                            name="curso"
                            value="Back-End"
                            {...register("course_enrolled")}
                          />
                          <label htmlFor="curseBackEnd">Back-End</label>
                        </div>
                      </div>
                      <div className={styles.box_input}>
                        <label>Em qual ano foi matriculado?</label>
                        <input
                          required
                          type="text"
                          placeholder="0000"
                          style={{ width: "80px" }}
                          {...register("year_enrolled")}
                          min="4"
                          max="4"
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className={styles.box_buttons}>
                  <button
                    className={styles.button_remember}
                    onClick={() => setSeason(season - 1)}
                    type="button"
                  >
                    Voltar
                  </button>
                  <button className={styles.button_submit}>Próxima</button>
                </div>
              </>
            ) : season === 2 ? (
              // Campos: Data de nascimento e Idade
              <>
                <div className={styles.box_titleForm}>
                  <div className={styles.circleEtaps}>
                    <span></span>
                    <span></span>
                    <p></p>
                    <span></span>
                    <span></span>
                  </div>
                  <div>
                    <h3>Cadastrando o seu perfil</h3>
                    <p>Dados Pessoais</p>
                  </div>
                </div>
                <div className={styles.content_form}>
                  <div className={styles.box_input}>
                    <label>Qual é a sua data de nascimento?</label>
                    <input
                      required
                      type="date"
                      id="dataNascimento"
                      placeholder="Digite o seu nome (sem abreviações)"
                      {...register("birth_date")}
                      style={{ width: "auto" }}
                    />
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "0.7rem",
                        marginTop: "2rem",
                      }}
                    >
                      A sua idade é:{" "}
                      <span
                        style={{
                          fontSize: "2rem",
                          display: "flex",
                          fontWeight: "700",
                        }}
                      >
                        {idade !== null ? idade : "-"}
                      </span>
                    </p>
                    {verificarIdade()}
                    {mensageDeError && aceitarCompartilhar === "nao" && (
                      <p
                        style={{
                          color: "red",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        Deve aceitar os termos antes de prosseguir
                      </p>
                    )}
                  </div>
                </div>
                <div className={styles.box_buttons}>
                  <button
                    className={styles.button_remember}
                    onClick={() => setSeason(season - 1)}
                    type="button"
                  >
                    Voltar
                  </button>
                  <button className={styles.button_submit}>Próxima</button>
                </div>
              </>
            ) : season === 3 ? (
              // Campos: Resposavel menor de 18
              <>
                <div className={styles.box_titleForm}>
                  <div className={styles.circleEtaps}>
                    <span style={{ background: "#F3631E" }}></span>
                    <span style={{ background: "#F3631E" }}></span>
                    <p>1/1</p>
                    <span style={{ background: "#F3631E" }}></span>
                    <span style={{ background: "#F3631E" }}></span>
                  </div>
                  <div>
                    <h3>Cadastro do responsável</h3>
                    <p>Dados do responsável</p>
                  </div>
                </div>
                <div className={styles.content_form}>
                  <div className={styles.box_input}>
                    <label>Nome Completo do responsável</label>
                    <input
                      type="text"
                      placeholder="Digite o seu nome completo"
                      {...register("student_responsible.fullname")}
                      required
                    />
                  </div>

                  <div className={styles.box_input}>
                    <label>CPF</label>
                    <input
                      type="text"
                      maxLength={11}
                      placeholder="Digite seu CPF (somente números)"
                      onBlur={(e) => {
                        let value = formatCPF(e.target.value);
                        setValue("cpf", value);
                      }}
                      {...register("student_responsible.cpf")}
                      required
                    />
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {errors?.cpf?.message as any}
                    </p>
                  </div>

                  <div className={styles.box_input}>
                    <label>Telefone</label>
                    <input
                      placeholder="(00) 00000-0000"
                      {...register("student_responsible.phone")}
                      type="text"
                      id="phone"
                      name="phone"
                        maxLength={15}
                      required
                      onChange={handlePhoneInput}
                    />
                  </div>

                  <div className={styles.box_input}>
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Digite o seu melhor email"
                      {...register("student_responsible.email")}
                      required
                    />
                  </div>

                  <div className={styles.box_input}>
                    <label>Parentesco</label>
                    <input
                      type="text"
                      placeholder="Informe se é Pai, Mãe, Tio, Tia..."
                      {...register("student_responsible.relation")}
                      required
                    />
                  </div>
                </div>
                <div className={styles.box_buttons}>
                  <button
                    className={styles.button_remember}
                    onClick={() => setSeason(season - 1)}
                    type="button"
                  >
                    Voltar
                  </button>
                  <button className={styles.button_submit} disabled={isDesable}>
                    Próxima
                  </button>
                </div>
              </>
            ) : season === 4 ? (
              // Campos: Raça/Etnia, Numero de Telefone e Genero
              <>
                <div className={styles.box_titleForm}>
                  <div className={styles.circleEtaps}>
                    <span></span>
                    <span style={{ background: "#F3631E" }}></span>
                    <p></p>
                    <span></span>
                    <span></span>
                  </div>
                  <div>
                    <h3>Cadastrando o seu perfil</h3>
                    <p>Dados Pessoais</p>
                  </div>
                </div>
                <div className={styles.content_form}>
                  <div className={styles.box_input}>
                    <label>
                      <p>Com qual raça ou etnia você se identifica?</p>
                    </label>
                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        type="radio"
                        id="pretopardo"
                        name="racaouetnia"
                        value="pretopardo"
                        {...register("skin_color")}
                        required
                      />
                      <label htmlFor="pretopardo">Preto(a) ou pardo(a)</label>
                    </div>
                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        type="radio"
                        id="Branco(a)"
                        name="racaouetnia"
                        value="Branco(a)"
                        {...register("skin_color")}
                        required
                      />
                      <label htmlFor="Branco(a)">Branco(a)</label>
                    </div>

                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        type="radio"
                        id="Amarelo(a)"
                        name="racaouetnia"
                        value="Amarelo(a)"
                        {...register("skin_color")}
                        required
                      />
                      <label htmlFor="Amarelo(a)">Amarelo(a)</label>
                    </div>

                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        type="radio"
                        id="Indígena"
                        name="racaouetnia"
                        value="Indígena"
                        {...register("skin_color")}
                        required
                      />
                      <label htmlFor="Indígena">Indígena</label>
                    </div>
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
                    <label>
                      <p>
                        Qual é o seu gênero?{" "}
                        <InfoComponent Children={"Qual é o seu gênero?"} />
                      </p>
                    </label>
                    <div className={styles.boxOptions}>
                      <input
                        type="radio"
                        id="homemCis"
                        value="homemCis"
                        {...register("gender")}
                        required
                      />
                      <label htmlFor="homemCis">Homem Cis</label>
                    </div>
                    <div className={styles.boxOptions}>
                      <input
                        type="radio"
                        id="mulherCis"
                        value="mulherCis"
                        {...register("gender")}
                        required
                      />
                      <label htmlFor="mulherCis">Mulher Cis</label>
                    </div>
                    <div className={styles.boxOptions}>
                      <input
                        type="radio"
                        id="naoBinario"
                        value="naoBinario"
                        {...register("gender")}
                        required
                      />
                      <label htmlFor="naoBinario">Não binário</label>
                    </div>
                    <div className={styles.boxOptions}>
                      <input
                        required
                        type="radio"
                        id="homemTrans"
                        value="homemTrans"
                        {...register("gender")}
                      />
                      <label htmlFor="naoBinario">Homem Trans</label>
                    </div>
                    <div className={styles.boxOptions}>
                      <input
                        required
                        type="radio"
                        id="mulherTrans"
                        value="mulherTrans"
                        {...register("gender")}
                      />
                      <label htmlFor="naoBinario">Mulher Trans</label>
                    </div>
                  </div>
                </div>
                <div className={styles.box_buttons}>
                  <button
                    className={styles.button_remember}
                    onClick={goBackPage}
                    type="button"
                  >
                    Voltar
                  </button>
                  <button className={styles.button_submit}>Próxima</button>
                </div>
              </>
            ) : season === 5 ? (
              // Campos: Orientação sexual e Deficiencia
              <>
                <div className={styles.box_titleForm}>
                  <div className={styles.circleEtaps}>
                    <span></span>
                    <span style={{ background: "#F3631E" }}></span>
                    <p></p>
                    <span></span>
                    <span style={{ background: "#F3631E" }}></span>
                  </div>
                  <div>
                    <h3>Cadastrando o seu perfil</h3>
                    <p>Dados Pessoais</p>
                  </div>
                </div>
                <div className={styles.content_form}>
                  <div className={styles.box_input}>
                    <label>
                      <p>
                        Qual é a sua orientação sexual?{" "}
                        <InfoComponent
                          Children={"Qual é a sua orientação sexual?"}
                        />
                      </p>
                    </label>
                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        required
                        type="radio"
                        id="heterossexual"
                        name="orientacao_sexual"
                        value="heterossexual"
                        {...register("sexuality")}
                      />
                      <label htmlFor="heterossexual">Heterossexual</label>
                    </div>
                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        required
                        type="radio"
                        id="lesbica_ou_gay"
                        name="orientacao_sexual"
                        value="lesbica_ou_gay"
                        {...register("sexuality")}
                      />
                      <label htmlFor="lesbica_ou_gay">Lésbica/Gay</label>
                    </div>

                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        required
                        type="radio"
                        id="bissexual_pansexual"
                        name="orientacao_sexual"
                        value="bissexual_pansexual"
                        {...register("sexuality")}
                      />
                      <label htmlFor="bissexual_pansexual">
                        Bissexual/Pansexual
                      </label>
                    </div>

                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        required
                        type="radio"
                        id="assexual"
                        name="orientacao_sexual"
                        value="assexual"
                        {...register("sexuality")}
                      />
                      <label htmlFor="assexual">Assexual</label>
                    </div>

                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        required
                        type="radio"
                        id="prefiro_nao_dizer"
                        name="orientacao_sexual"
                        value="prefiro_nao_dizer"
                        {...register("sexuality")}
                      />
                      <label htmlFor="prefiro_nao_dizer">
                        Prefiro não dizer
                      </label>
                    </div>

                    <div
                      className={styles.boxOptions}
                      style={{ width: "auto" }}
                    >
                      <input
                        required
                        type="radio"
                        id="outro"
                        name="orientacao_sexual"
                        value="outro"
                        {...register("sexuality")}
                      />
                      <label htmlFor="outro">Outro</label>
                    </div>
                  </div>
                  <div className={styles.box_input}>
                    <label>
                      <p>Possui alguma deficiência?</p>
                    </label>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "2rem",
                      }}
                    >
                      <div
                        className={styles.boxOptions}
                        style={{ width: "auto" }}
                      >
                        <input
                          value={true as any}
                          type="radio"
                          id="simDeficiencia"
                          name="possuiDeficiencia"
                          {...register(
                            "student_socioeconomic_data.live_with_pwd"
                          )}
                          required
                        />
                        <label htmlFor="simDeficiencia">Sim</label>
                      </div>
                      <div
                        className={styles.boxOptions}
                        style={{ width: "auto" }}
                      >
                        <input
                          type="radio"
                          id="naoDeficiencia"
                          name="possuiDeficiencia"
                          {...register(
                            "student_socioeconomic_data.live_with_pwd"
                          )}
                          value={false as any}
                          required
                        />
                        <label htmlFor="naoDeficiencia">Não</label>
                      </div>
                    </span>
                  </div>
                  {(havePDW as any) == "true" && (
                    <div className={styles.box_input}>
                      <label>Se sim, qual tipo de deficiência possui?</label>
                      <input
                        type="text"
                        placeholder="Se for conveniente, informe o CID"
                        {...register("student_socioeconomic_data.cid")}
                        required
                      />
                    </div>
                  )}
                </div>
                <div className={styles.box_buttons}>
                  <button
                    className={styles.button_remember}
                    onClick={() => setSeason(season - 1)}
                    type="button"
                  >
                    Voltar
                  </button>
                  <button className={styles.button_submit}>Próxima</button>
                </div>
              </>
            ) : season === 6 ? (
              // Campos: Possui computador e Internet
              <>
                <div className={styles.box_titleForm}>
                  <div className={styles.circleEtaps}>
                    <span></span>
                    <span style={{ background: "#F3631E" }}></span>
                    <p></p>
                    <span style={{ background: "#F3631E" }}></span>
                    <span style={{ background: "#F3631E" }}></span>
                  </div>
                  <div>
                    <h3>Cadastrando o seu perfil</h3>
                    <p>Dados Pessoais</p>
                  </div>
                </div>
                <div className={styles.content_form}>
                  <div className={styles.box_input}>
                    <label>
                      <p>Possui computador ou notebook?</p>
                    </label>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "2rem",
                      }}
                    >
                      <div
                        className={styles.boxOptions}
                        style={{ width: "auto" }}
                      >
                        <input
                          type="radio"
                          id="simComputador"
                          name="possuiComputador"
                          value={true as any}
                          {...register("student_tecnology.have_computer")}
                          required
                        />
                        <label htmlFor="simComputador">Sim</label>
                      </div>
                      <div
                        className={styles.boxOptions}
                        style={{ width: "auto" }}
                      >
                        <input
                          type="radio"
                          id="naoComputador"
                          name="possuiComputador"
                          value={false as any}
                          {...register("student_tecnology.have_computer")}
                          required
                        />
                        <label htmlFor="naoComputador">Não</label>
                      </div>
                    </span>
                  </div>
                  {(haveComputer as any) == "true" && (
                    <div className={styles.box_input}>
                      <label>
                        <p>Se sim, que tipo possui?</p>
                      </label>
                      <div className={styles.boxOptions}>
                        <input
                          type="radio"
                          id="Próprio"
                          name="tipoComputador"
                          value="Próprio"
                          {...register("student_tecnology.computer_type")}
                          required
                        />
                        <label htmlFor="Próprio">Próprio</label>
                      </div>
                      <div className={styles.boxOptions}>
                        <input
                          type="radio"
                          id="Compartilhado"
                          name="tipoComputador"
                          value="Compartilhado"
                          {...register("student_tecnology.computer_type")}
                          required
                        />
                        <label htmlFor="Compartilhado">Compartilhado</label>
                      </div>
                      <div className={styles.boxOptions}>
                        <input
                          type="radio"
                          id="Emprestado"
                          name="tipoComputador"
                          value="Emprestado"
                          {...register("student_tecnology.computer_type")}
                          required
                        />
                        <label htmlFor="Emprestado">Emprestado</label>
                      </div>
                      <div className={styles.boxOptions}>
                        <input
                          type="radio"
                          id="Do trabalho"
                          name="tipoComputador"
                          value="Do trabalho"
                          {...register("student_tecnology.computer_type")}
                          required
                        />
                        <label htmlFor="Do trabalho">Do trabalhoo</label>
                      </div>
                    </div>
                  )}
                  <div className={styles.box_input}>
                    <label>
                      <p>Possui acesso a internet?</p>
                    </label>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "2rem",
                      }}
                    >
                      <div
                        className={styles.boxOptions}
                        style={{ width: "auto" }}
                      >
                        <input
                          type="radio"
                          id="simIntenet"
                          name="possuiInternet"
                          value={true as any}
                          {...register("student_tecnology.have_internet")}
                          required
                        />
                        <label htmlFor="simIntenet">Sim</label>
                      </div>
                      <div
                        className={styles.boxOptions}
                        style={{ width: "auto" }}
                      >
                        <input
                          type="radio"
                          id="naoInternet"
                          name="possuiInternet"
                          value={false as any}
                          {...register("student_tecnology.have_internet")}
                          required
                        />
                        <label htmlFor="naoInternet">Não</label>
                      </div>
                    </span>
                  </div>
                  {(haveInternet as any) == "true" && (
                    <div className={styles.box_input}>
                      <label>
                        <p>Se sim, qual é a velocidade?</p>
                      </label>
                      <div className={styles.boxOptions}>
                        <input
                          type="radio"
                          id="provedor"
                          name="velocidadeInternet"
                          value="provedor"
                          {...register("student_tecnology.internet_type")}
                          required
                        />
                        <label htmlFor="provedor">
                          Através de um provedor oficial (NET, Vivo, Claro,
                          Tim...)
                        </label>
                      </div>
                      <div className={styles.boxOptions}>
                        <input
                          type="radio"
                          id="rede_comunitaria"
                          name="velocidadeInternet"
                          value="rede_comunitaria"
                          {...register("student_tecnology.internet_type")}
                          required
                        />
                        <label htmlFor="rede_comunitaria">
                          Através de uma rede comunitária
                        </label>
                      </div>
                      <div className={styles.boxOptions}>
                        <input
                          type="radio"
                          id="apenas_celular"
                          name="velocidadeInternet"
                          value="apenas_celular"
                          {...register("student_tecnology.internet_type")}
                          required
                        />
                        <label htmlFor="apenas_celular">
                          Através do celular (3G, 4G ou 5G)
                        </label>
                      </div>
                      <div className={styles.boxOptions}>
                        <input
                          type="radio"
                          id="nao tenho acesso"
                          name="velocidadeInternet"
                          value="Não tenho acesso"
                          {...register("student_tecnology.internet_type")}
                          required
                        />
                        <label htmlFor="nao tenho acesso">
                          Não tenho acesso
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.box_buttons}>
                  <button
                    className={styles.button_remember}
                    onClick={() => setSeason(season - 1)}
                    type="button"
                  >
                    Voltar
                  </button>
                  <button className={styles.button_submit}>Próxima</button>
                </div>
              </>
            ) : season === 7 ? (
              // Campos: Quantas pessoas residen na sua casa e renda familiar
              <>
                <div className={styles.box_titleForm}>
                  <div className={styles.circleEtaps}>
                    <span style={{ background: "#F3631E" }}></span>
                    <span style={{ background: "#F3631E" }}></span>
                    <p></p>
                    <span style={{ background: "#F3631E" }}></span>
                    <span style={{ background: "#F3631E" }}></span>
                  </div>
                  <div>
                    <h3>Cadastrando o seu perfil</h3>
                    <p>Dados Pessoais</p>
                  </div>
                </div>
                <div className={styles.content_form}>
                  <div className={styles.box_input}>
                    <label>
                      Somando você, quantas pessoas moram na mesma residência?{" "}
                      <InfoComponent Children="Somando você, quantas pessoas moram na mesma residência?" />
                    </label>
                    <input
                      type="number"
                      placeholder="Digite apenas números"
                      {...register("student_socioeconomic_data.housemates")}
                      required
                    />
                  </div>
                  <div className={styles.box_input}>
                    <label>
                      <p style={{ textAlign: "start" }}>
                        Qual é a renda familiar considerando o seu salário e o
                        de todos os moradores da mesma residência? (?)
                      </p>
                    </label>
                    <div className={styles.boxOptions}>
                      <input
                        type="radio"
                        id="type1Salario"
                        name="rendaFamiliar"
                        value="Até 1"
                        {...register("student_socioeconomic_data.income_range")}
                        required
                      />
                      <label htmlFor="type1Salario">Até 1 salário mínimo</label>
                    </div>
                    <div className={styles.boxOptions}>
                      <input
                        type="radio"
                        id="type1e2Salarios"
                        name="rendaFamiliar"
                        value="De 1 a 2"
                        {...register("student_socioeconomic_data.income_range")}
                        required
                      />
                      <label htmlFor="type1e2Salarios">
                        De 1 e 2 salários mínimos
                      </label>
                    </div>
                    <div className={styles.boxOptions}>
                      <input
                        type="radio"
                        id="type2e3Salarios"
                        name="rendaFamiliar"
                        value="De 2 a 3"
                        {...register("student_socioeconomic_data.income_range")}
                        required
                      />
                      <label htmlFor="type2e3Salarios">
                        De 2 e 3 salários mínimos
                      </label>
                    </div>
                    <div className={styles.boxOptions}>
                      <input
                        type="radio"
                        id="typeMais3Salarios"
                        name="rendaFamiliar"
                        value="Mais de 3"
                        {...register("student_socioeconomic_data.income_range")}
                        required
                      />
                      <label htmlFor="typeMais3Salarios">
                        Mais de 3 salários mínimos
                      </label>
                    </div>
                  </div>
                </div>
                <div className={styles.box_buttons}>
                  <button
                    className={styles.button_remember}
                    onClick={() => setSeason(season - 1)}
                    type="button"
                  >
                    Voltar
                  </button>
                  <button className={styles.button_submit}>Próxima</button>
                </div>
              </>
            ) : season === 8 ? (
              // Campos: Morador de Comunidade
              <>
                <div className={styles.box_titleForm}>
                  <div className={styles.circleEtaps}>
                    <span style={{ background: "#F3631E" }}></span>
                    <span style={{ background: "#F3631E" }}></span>
                    <p></p>
                    <span style={{ background: "#F3631E" }}></span>
                    <span style={{ background: "#F3631E" }}></span>
                  </div>
                  <div>
                    <h3>Cadastrando o seu perfil</h3>
                    <p>Dados Pessoais</p>
                  </div>
                </div>
                <div className={styles.content_form}>
                  <div className={styles.box_input}>
                    <label>
                      <p>É um morador de comunidade?</p>
                    </label>
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "2rem",
                      }}
                    >
                      <div
                        className={styles.boxOptions}
                        style={{ width: "auto" }}
                      >
                        <input
                          type="radio"
                          id="simComunidade"
                          value={true as any}
                          {...register(
                            "student_socioeconomic_data.live_in_community"
                          )}
                          required
                        />
                        <label htmlFor="simComunidade">Sim</label>
                      </div>
                      <div
                        className={styles.boxOptions}
                        style={{ width: "auto" }}
                      >
                        <input
                          type="radio"
                          id="naoComunidade"
                          value={false as any}
                          {...register(
                            "student_socioeconomic_data.live_in_community"
                          )}
                          required
                        />
                        <label htmlFor="naoComunidade">Não</label>
                      </div>
                    </span>
                  </div>
                  {(isCommunity as any) == "true" && (
                    <div
                      className={styles.box_input}
                      style={{ marginBottom: "1rem" }}
                    >
                      <label>Qual comunidade?</label>
                      <input
                        type="text"
                        placeholder="Digite o nome da sua comunidade"
                        {...register("student_address.community")}
                        required
                      />
                    </div>
                  )}
                  <div
                    className={styles.box_input}
                    style={{ marginBottom: "1rem" }}
                  >
                    <label htmlFor="typeCidade">Qual é o seu estado?</label>
                    <select
                      {...register("student_address.address.state")}
                      required
                    >
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
                </div>
                <div className={styles.box_buttons}>
                  <button
                    className={styles.button_remember}
                    onClick={() => setSeason(season - 1)}
                    type="button"
                  >
                    Voltar
                  </button>
                  <button className={styles.button_submit} type="submit">
                    Próxima
                  </button>
                </div>
              </>
            ) : season === 9 ? (
              // CPF ou Email ja consta na base
              <>
                <div className={styles.box_titleForm}>
                  <div className={styles.circleEtaps}>
                    <span style={{ background: "#F3631E" }}></span>
                    <span style={{ background: "#F3631E" }}></span>
                    <p>1/1</p>
                    <span style={{ background: "#F3631E" }}></span>
                    <span style={{ background: "#F3631E" }}></span>
                  </div>
                </div>
                <div className={styles.content_form}>
                  <div className={styles.content_error}>
                    <h3>Identificamos que você já fez o cadastro</h3>
                    <p>
                      Seus dados já estão em nosso sistema. Por favor, verifique
                      a mensagem que foi enviada para o seu e-mail, incluindo a
                      caixa de spam.
                    </p>
                    <br />
                    <Image src={PiskIcon}  alt="emoji"/>
                  </div>
                </div>
              </>
            ) : season === 10 ? (
              // Não foi aprovado por nao cumprir os requisitos
              <>
                <div className={styles.content_error}>
                  <h3>
                  Nesse momento você não foi aprovado para esse curso devido a não atender aos requisitos mínimos:
                  </h3>
                  <div className={styles.boxList}>
                    {errosForm.age !== "" && (
                      <span>
                        <Image src={ImgIncorrect} alt="" />
                        {errosForm?.age}
                      </span>
                    )}
                    {errosForm.income_range !== "" && (
                      <span>
                        <Image src={ImgIncorrect} alt="" />
                        {errosForm?.income_range}
                      </span>
                    )}
                    {errosForm.have_internet !== "" && (
                      <span>
                        <Image src={ImgIncorrect} alt="" />
                        {errosForm?.have_internet}
                      </span>
                    )}
                    {errosForm.have_computer !== "" && (
                      <span>
                        <Image src={ImgIncorrect} alt="" />
                        {errosForm?.have_computer}
                      </span>
                    )}
                  </div>
                  <p>
                    <b>Fique tranquilo(a)!</b>
                    <br />
                    Você poderá se candidatar novamente para um próximo curso.
                    Fique atento(a) e siga o <b>@VainaWeb</b> nas redes sociais.
                  </p>
                  <Image src={PiskIcon}  alt="emoji"/>
                </div>
              </>
            ) : season === 11 ? (
              // Ja foi nosso aluno
              <>
                <div className={styles.content_error}>
                  <h3>
                    Que legal! Identificamos que você já foi nosso(a) aluno(a).
                  </h3>
                  <p>
                    Agradecemos seu interesse em participar da formação em
                    front-end. No momento, estamos dando prioridade para
                    inscrição de novos(as) alunos(as). Seus dados estão
                    armazenados em nossa base de dados para comunicação de um
                    próximo curso.
                  </p>
                  <span>🙂</span>
                </div>
              </>
            ) : season === 12 ? (
              // Sucesso na inscrição
              <>
                <div className={styles.content_error}>
                  <h3>
                    Parabéns! <br />
                    Inscrição realizada com sucesso.
                  </h3>
                  <p>
                    Estamos orgulhosos por você escolher fazer parte do Vai na
                    Web. Você está prestes a embarcar numa jornada incrível de
                    aprendizagem contínua.
                  </p>
                  <p style={{ marginTop: "3rem" }}>
                    <b>
                      Fique atento ao seu Email, você será notificado sobre as
                      próximas fases até a aula inaugural.
                    </b>
                  </p>
                  <br />
                  <br />
                  <Image src={SucessIcon}  alt="emoji"/>
                </div>
              </>
            ) : season === 13 ? (
              // Caso ele não tenha os documentos em mãos
              <>
                <div className={styles.content_error}>
                  <h3>IMPORTANTE !!!</h3>
                  <p>
                    <b>
                      Informamos que não recebemos os documentos necessários
                      para seguirmos com o processo. Por favor, peça ao
                      responsável que esteja em posse da documentação e finalize
                      sua inscrição neste site.
                    </b>
                  </p>
                  <Image src={PiskIcon}  alt="emoji"/>
                </div>
              </>
            ) : season === 14 ? (
              // Caso confirme que ja  foi aluno no formulario
              <>
                <div className={styles.content_error}>
                  <h3>
                    Que legal! Identificamos que você já foi nosso(a) aluno(a).
                  </h3>
                  <p>
                    Agradecemos seu interesse em participar da formação em
                    front-end. No momento, estamos dando prioridade para
                    inscrição de novos(as) alunos(as). Seus dados estão
                    armazenados em nossa base de dados para comunicações
                    futuras.
                  </p>
                  <br />
                  <br />
                  <Image src={PiskIcon}  alt="emoji"/>
                </div>
              </>
            ) : null}
          </div>
          {/* {season <= 8 && season !== 0 && (
            <div className={styles.box_buttons}>
              <button className={styles.button_remember} onClick={goBackPage}>
                Voltar
              </button>
              {season >= 3 && season <= 7 && (
                <button
                  disabled={loading}
                  className={styles.button_submit}
                
                  type="button"
                >
                  Próxima
                </button>
              )}

              {season === 2 && (
                <button
                  type="button"
                  disabled={isDesable()}
                  className={styles.button_submit}
                
                  style={{
                    opacity: isDesable ? "0.2" : "1.0",
                  }}
                >
                  Próxima
                </button>
              )}

              {season === 1 && (
                <button
                  className={styles.button_submit}
                  onClick={foiAluno ? onSubmitStudents : goNextPage}
                  disabled={loading}
                >
                  Proxíma
                </button>
              )}

              {season === 8 && (
                <button
                  className={styles.button_submit}
                  type="submit"
                  disabled={loading}
                >
                  Enviar
                </button>
              )}
            </div>
          )} */}
        </form>
      </div>
      <Image src={Faixa} alt=""  className={styles.faixa_botton}/>
    </section>
  );
}
