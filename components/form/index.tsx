import { useState, useEffect } from "react";
import TitleGradient from "../title-gradient";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";
import { formService } from "./service";

import ImgIncorrect from "../../assets/incorrect-icon.png"
import Emojiicon from "../../assets/emoji.png"
import Image from "next/image";


export default function Form() {
  const [season, setSeason] = useState(0);
  const [campos, setCampos] = useState(false)
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idade, setIdade] = useState(null);
  const [genero, setGenero] = useState('');
  const [possuiComputador, setPossuiComputador] = useState('');
  const [tipoComputador, setTipoComputador] = useState('');
  const [possuiDeficiencia, setPossuiDeficiencia] = useState('');
  const [tipoDeficiencia, setTipoDeficiencia] = useState('');
  const [possuiInternet, setPossuiInternet] = useState('');
  const [velocidadeInternet, setVelocidadeInternet] = useState('');
  const [quantidadePessoas, setQuantidadePessoas] = useState('');
  const [moradorComunidade, setMoradorComunidade] = useState('');
  const [rendaFamiliar, setRendaFamiliar] = useState('');
  const [anoMatriculado, setAnoMatriculado] = useState('');
  const [curso, setCurse] = useState('');
  const [errosForm, setErrosForm] = useState <any>({
    age: "", have_computer: "", have_internet: "",  income_range: ""
  });
  const {register, handleSubmit, watch, setValue, formState: {errors} } = useForm({
    defaultValues: {
      fullname: null,
      cpf: null,
      email: null,
      birth_date: null,
      sexuality: null,
      student_address: {
        community: null,
        address: {
          city: null,
          state: null,
        }
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
        income_range: null
      }
    }});

  const [states, setStates] = useState<string[]>([]);
  const [citys, setCitys] = useState<string[]>([]);


  const birthDate = watch("birth_date");
  const haveComputer = watch("student_tecnology.have_computer");
  const havePDW = watch("student_socioeconomic_data.live_with_pwd");
  const haveInternet = watch("student_tecnology.have_internet");
  const State = watch("student_address.address.state");



  useEffect(() => {
      if (birthDate) {
          const hoje = new Date();
          const nascimento = new Date(birthDate);
          let novaIdade = hoje.getFullYear() - nascimento.getFullYear();
          const mesAtual = hoje.getMonth();
          const mesNascimento = nascimento.getMonth();

          if (mesNascimento > mesAtual || (mesNascimento === mesAtual && hoje.getDate() < nascimento.getDate())) {
              novaIdade--;
          }

          setIdade(novaIdade);
      }
  }, [birthDate]);

  const fatchState = async () => {
    const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(res => res.json());
    const states = response.map(state => state.sigla);
    setStates(states);
  }

  useEffect(() => {
    fatchState()
  }, []);

  const fatchCity = async () => {
    if(State) {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${State}/municipios`).then(res => res.json());
    const citys = response.map(city => city.nome);
    setCitys(citys);
    } 
  }
  useEffect(() => {
    fatchCity()
  }, [State])


  const onSubmit = async(data) => {
    if(data.student_tecnology.have_computer === "false" )
      delete data.student_tecnology.computer_type;

    if(data.student_tecnology.have_internet === "false" )
      delete data.student_tecnology.internet_type;
    if(season === 0) {

      try {
        const response = await formService.gerVerifyCPF(data.cpf)
        if(!response.data.can_create) {
          return setSeason(8)
        }
      } catch(err) {
        console.log(err)
      }
    }
    if (season < 5) {
      return setSeason(season + 1);
       }
    if(season === 5) {
      try {
        const dataForm = {
          ...data, 
          age:idade,
          student_tecnology:{
            ...data.student_tecnology,
            have_computer : data.student_tecnology.have_computer === "true" ? true : false,
            have_internet : data.student_tecnology.have_internet === "true" ? true : false,
          },
          student_socioeconomic_data:{
            ...data.student_socioeconomic_data,
            live_with_pwd : data.student_socioeconomic_data.live_with_pwd === "true" ? true : false,
          }
        }
        

        const response = await formService.postDates(dataForm)
          if(response.status === 200) {
            setSeason(9)
            } else {
              response.message.non_field_errors.map((item) => {
                if(item.age) {
                  setErrosForm((prevState: any) => {
                   return {...prevState, age: item.age};
                  })
                }
                if(item.have_computer) {
                  setErrosForm((prevState: any) => {
                   return {...prevState, have_computer: item.have_computer};
                  })
                }
                if(item.have_internet) {
                  setErrosForm((prevState: any) => {
                   return {...prevState, have_internet: item.have_internet};
                  })
                }
                if(item.income_range) {
                  setErrosForm((prevState: any) => {
                   return {...prevState, income_range: item.income_range};
                  })
                }
              })
              setSeason(7);
            }
            } catch(err) {
              console.log(err)
              return setSeason(7)
              }
      }
  };

  const watchOptions = watch(["student_tecnology.have_computer", "student_tecnology.have_internet", 'student_socioeconomic_data.live_with_pwd']); // Assista aos valores dos campos "option"

  useEffect(() => {
    const resetDetails = (option, detail, value) => {
      if (option == "false") {
        setValue(detail, value);
      }
    };

    resetDetails(watchOptions[0], 'student_tecnology.computer_type', false);
    resetDetails(watchOptions[1], 'student_tecnology.internet_type', false);
    resetDetails(watchOptions[2], 'student_socioeconomic_data.cid', "");
  }, [watchOptions, setValue]);
  
  // non_field_errors

  return (
    <section className={styles.content} id="formulario">
      <form onSubmit={handleSubmit(onSubmit)}>

      {season === 0 ? (
        <>
          <TitleGradient Children="Inscreva-se no Vai na Web!" />
          <div className={styles.content_form}>
            <div className={styles.box_input}>
              <label>Qual é o seu nome?</label>
              <input type="text" placeholder="Digite o seu nome ou apelido" {...register("fullname")} required />
            </div>
            <div className={styles.box_input}>
              <label>Email</label>
              <input type="email" placeholder="Digite o seu melhor email" {...register("email")} required />
            </div>

            {/* <div className={styles.box_input}>
              <label>Repita o Email</label>
              <input type="email" placeholder="Digite novamente o email" required />
            </div> */}
            
            <div className={styles.box_input}>
              <label>CPF</label>
              <input type="number" placeholder="000.000.000-00" {...register("cpf", {pattern: {value: /^\d{14}$/, message: 'Precisa ter 11 numeros'}})} required />
              <p style={{color: "red", fontSize: "14px"}}>{errors?.cpf?.message as any}</p>
            </div>
            <div style={{display: "flex", gap: "1rem", marginTop: "2rem"}}>
              <button className={styles.button_submit}>Enviar</button>
              <button className={styles.button_remember} onClick={() => setSeason(6)}>Já foi nosso aluno?</button>
            </div>
            {
              campos === true && (
                <p style={{ color: "red", marginTop: "1rem" }}>Preencha todos os campos antes de enviar.</p>
              )
            }
            <p style={{ marginTop: "6rem" }}>Ao <b>Iniciar</b> a etapa de inscrição você declara que possui no mínimo 16 anos de idade e concorda em compartilhar informações pessoais para efetuar a sua inscrição de acordo com os padrões legais de compartilhamento de dados (LGPD; Lei n° 13.709/2018).</p>
          </div>
        </>
      ) : season === 1 ? (
        <>
          <div className={styles.box_titleForm}>
            <div className={styles.circleEtaps}>
              <span></span>
              <span></span>
              <p>1/5</p>
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
                <p style={{ fontSize: "1rem", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "0.7rem", marginTop: "2rem" }}>
                    A sua idade é: <span style={{ fontSize: "2rem", display: "flex", fontWeight: "700" }}>{idade !== null ? idade : '-'}</span>
                </p>
        </div>
            <div className={styles.box_buttons}>
              <button  className={styles.button_submit}>Enviar</button>
              <button className={styles.button_remember} onClick={() => setSeason(season - 1)}>Voltar</button>
            </div>
          </div>
        </>
      ) : season === 2 ? (
        <>
          <div className={styles.box_titleForm}>
            <div className={styles.circleEtaps}>
              <span></span>
              <span style={{ background: "#F3631E" }}></span>
              <p>2/5</p>
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
              <p>Qual é o seu gênero? (?)</p>
            </label>
            <div className={styles.boxOptions}>
              <input
                type="radio"
                id="homemCis"
                value="homemCis"
                {...register("sexuality")}
                required
              />
              <label htmlFor="homemCis">Homem Cis</label>
            </div>
            <div className={styles.boxOptions}>
              <input
                type="radio"
                id="mulherCis"
                value="mulherCis"
                {...register("sexuality")}
                required
              />
              <label htmlFor="mulherCis">Mulher Cis</label>
            </div>
            <div className={styles.boxOptions}>
              <input
                type="radio"
                id="naoBinario"
                value="naoBinario"
                {...register("sexuality")}
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
                {...register("sexuality")}
              />
              <label htmlFor="naoBinario">Homem Trans</label>
            </div>
            <div className={styles.boxOptions}>
              <input
              required
                type="radio"
                id="mulherTrans"
                value="mulherTrans"
                {...register("sexuality")}
              />
              <label htmlFor="naoBinario">Mulher Trans</label>
            </div>
          </div>
          <div className={styles.box_input}>
            <label>
              <p>Possui computador ou notebook?</p>
            </label>
            <span
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: '2rem',
              }}
            >
              <div className={styles.boxOptions} style={{ width: 'auto' }}>
                <input
                required
                  type="radio"
                  id="simNootbook"
                  name="possuiComputador"
                  value="true"
                {...register("student_tecnology.have_computer")}
                />
                <label htmlFor="simNootbook">Sim</label>
              </div>
              <div className={styles.boxOptions} style={{ width: 'auto' }}>
                <input
                required
                  type="radio"
                  id="naoNootbook"
                  name="possuiComputador"
                  value="false"
                {...register("student_tecnology.have_computer")}
                />
                <label htmlFor="naoNootbook">Não</label>
              </div>  
            </span>
          </div>
          {haveComputer as any == "true" && 
          <div className={styles.box_input}>
            <label>
              <p>Se sim, que tipo possui?</p>
            </label>
            <div className={styles.boxOptions}>
              <input
              required
                type="radio"
                id="typeProprio"
                name="tipoComputador"
                value="Próprio"
                {...register("student_tecnology.computer_type")}
              />
              <label htmlFor="typeProprio">Próprio</label>
            </div>
            <div className={styles.boxOptions}>
              <input
                type="radio"
                id="typeCompartilhado"
                name="tipoComputador"
                value="Compartilhado"
                {...register("student_tecnology.computer_type")}
                required
              />
              <label htmlFor="typeCompartilhado">Compartilhado</label>
            </div>
            <div className={styles.boxOptions}>
              <input
                type="radio"
                id="typeEmprestado"
                name="tipoComputador"
                value="Emprestado"
                {...register("student_tecnology.computer_type")}
                required
              />
              <label htmlFor="typeEmprestado">Emprestado</label>
            </div>
            <div className={styles.boxOptions}>
              <input
                type="radio"
                id="typeDoYrabalho"
                name="tipoComputador"
                value="Do Trabalho"
                {...register("student_tecnology.computer_type")}
              />
              <label htmlFor="typeDoYrabalho">Do trabalho</label>
            </div>
          </div>
          }
          <div className={styles.box_buttons}>
            <button className={styles.button_submit}>
              Enviar
            </button>
            <button className={styles.button_remember} onClick={() => setSeason(season - 1)}>
              Voltar
            </button>
          </div>
        </div>
        </>
      ): season === 3 ? (
        <>
        <div className={styles.box_titleForm}>
        <div className={styles.circleEtaps}>
            <span></span>
            <span style={{ background: "#F3631E" }}></span>
            <p>3/5</p>
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
          <p>Possui alguma deficiência?</p>
        </label>
        <span
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '2rem',
          }}
        >
          <div className={styles.boxOptions} style={{ width: 'auto' }}>
            <input
              value={true}
              type="radio"
              id="simDeficiencia"
              name="possuiDeficiencia"
              {...register("student_socioeconomic_data.live_with_pwd")}
              required
            />
            <label htmlFor="simDeficiencia">Sim</label>
          </div>
          <div className={styles.boxOptions} style={{ width: 'auto' }}>
            <input
              type="radio"
              id="naoDeficiencia"
              name="possuiDeficiencia"
              {...register("student_socioeconomic_data.live_with_pwd")}
              value={false}
              required
            />
            <label htmlFor="naoDeficiencia">Não</label>
          </div>
        </span>
      </div>
        {havePDW as any == "true" &&
        <div className={styles.box_input}>
          <label>Se sim, qual tipo de deficiência possui?</label>
          <input
            type="text"
            placeholder="Se for conveniente, informe o CID"
            {...register("student_socioeconomic_data.cid")}
            required
          />
        </div>
        }
      <div className={styles.box_input}>
        <label>
          <p>Possui acesso a internet?</p>
        </label>
        <span
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '2rem',
          }}
        >
          <div className={styles.boxOptions} style={{ width: 'auto' }}>
            <input
              type="radio"
              id="simIntenet"
              name="possuiInternet"
              value={true}
              {...register("student_tecnology.have_internet")}
              required
            />
            <label htmlFor="simIntenet">Sim</label>
          </div>
          <div className={styles.boxOptions} style={{ width: 'auto' }}>
            <input
              type="radio"
              id="naoInternet"
              name="possuiInternet"
              value={false}
              {...register("student_tecnology.have_internet")}
              required
            />
            <label htmlFor="naoInternet">Não</label>
          </div>
        </span>
      </div>
        {haveInternet as any == "true" &&
          <div className={styles.box_input}>
          <label>
            <p>Se sim, qual é a velocidade?</p>
          </label>
          <div className={styles.boxOptions}>
            <input
              type="radio"
              id="typeProprio"
              name="velocidadeInternet"
              value="3G/4G"
              {...register("student_tecnology.internet_type")}
              required
            />
            <label htmlFor="typeProprio">3G/4G</label>
          </div>
          <div className={styles.boxOptions}>
            <input
              type="radio"
              id="typeCompartilhado"
              name="velocidadeInternet"
              value="ate15MB"
              {...register("student_tecnology.internet_type")}
              required
            />
            <label htmlFor="typeCompartilhado">Até 15MB</label>
          </div>
          <div className={styles.boxOptions}>
            <input
              type="radio"
              id="typeEmprestado"
              name="velocidadeInternet"
              value="outro"
              {...register("student_tecnology.internet_type")}
              required
            />
            <label htmlFor="typeEmprestado">Outro</label>
          </div>
        </div>
        }
      <div className={styles.box_buttons}>
        <button className={styles.button_submit} >
          Enviar
        </button>
        <button className={styles.button_remember} onClick={() => setSeason(season - 1)}>
          Voltar
        </button>
      </div>
    </div>
        </>
      ) : season === 4 ? (
        <>
        <div className={styles.box_titleForm}>
        <div className={styles.circleEtaps}>
            <span></span>
            <span style={{ background: "#F3631E" }}></span>
            <p>4/5</p>
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
        <label>Somando você, quantas pessoas moram na mesma residência?</label>
        <input
          type="number"
          placeholder="Digite apenas números"
          {...register("student_socioeconomic_data.housemates")}
          required
        />
      </div>
      <div className={styles.box_input}>
        <label>
          <p style={{ textAlign: 'start' }}>
            Qual é a renda familiar considerando o seu salário e o de todos os moradores da mesma residência? (?)
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
          <label htmlFor="type1e2Salarios">De 1 e 2 salários mínimos</label>
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
          <label htmlFor="type2e3Salarios">De 2 e 3 salários mínimos</label>
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
          <label htmlFor="typeMais3Salarios">Mais de 3 salários mínimos</label>
        </div>
      </div>
      <div className={styles.box_buttons}>
        <button className={styles.button_submit}>
          Enviar
        </button>
        <button className={styles.button_remember} onClick={() => setSeason(season - 1)}>
          Voltar
        </button>
      </div>
    </div>
        </>
      ) : season === 5 ? (
        <>
          <div className={styles.box_titleForm}>
          <div className={styles.circleEtaps}>
              <span style={{ background: "#F3631E" }}></span>
              <span style={{ background: "#F3631E" }}></span>
              <p>5/5</p>
              <span style={{ background: "#F3631E" }}></span>
              <span style={{ background: "#F3631E" }}></span>
            </div>
            <div>
              <h3>Cadastrando o seu perfil</h3>
              <p>Dados Pessoais</p>
            </div>
          </div>
          <div style={{width: "100%"}}>
          <div className={styles.box_input}>
            <label htmlFor="typeCidade">Qual é o seu estado?</label>
            <select {...register("student_address.address.state")} required>
              {states?.map((item) => (
                 <option key={item}>
                  {item}
                 </option>
              ))}
            </select>
          </div>
          <div className={styles.box_input}>
            <label htmlFor="typeEstado">Qual é a sua cidade?</label>
            <select {...register("student_address.address.city")} disabled={State === undefined} required>
              {citys.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
            <div className={styles.box_input}>
              <label><p>É um morador de comunidade?</p></label>
              <span style={{display: "flex", width: "100%", alignItems: "flex-start", justifyContent: "flex-start", gap: "2rem"}}>
                <div className={styles.boxOptions} style={{width: "auto"}}>
                  <input
                    type="radio"
                    id="simComunidade"
                    value="Sim"
                {...register("student_address.community")}
                required
                  />
                  <label htmlFor="simComunidade"
                  >Sim</label>
                </div>
                <div className={styles.boxOptions} style={{width: "auto"}}>
                  <input
                    type="radio"
                    id="naoComunidade"
                    value="Não"
                    {...register("student_address.community")}
                    required
                  />
                  <label htmlFor="naoComunidade">Não</label>
                </div>  
              </span>
            </div>
          <div className={styles.box_buttons}>
            <button className={styles.button_submit} type="submit">Enviar</button>
            <button className={styles.button_remember} onClick={() => setSeason(season - 1)}>Voltar</button>
          </div>
          </div>
        </>
      ) : season === 6 ? (
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
              <h3>Cadastrando o seu perfil</h3>
              <p>Histórico do aluno</p>
            </div>
          </div>
          <div className={styles.content_form}>
          <div className={styles.box_input}>
        <label>
          <p style={{ textAlign: 'start' }}>
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
          />
          <label htmlFor="type1e2Salarios">Front-End</label>
        </div>
        <div className={styles.boxOptions}>
          <input
          required
            type="radio"
            id="curseFrontEnd"
            name="curso"
            value="Back-End"
          />
          <label htmlFor="type1e2Salarios">Back-End</label>
        </div>
      </div>
            <div className={styles.box_input}>
              <label>Em qual ano foi matriculado?</label>
              <input
              required 
              type="text" 
              placeholder="0000" 
              style={{width: "80px"}} 
              id="anoMatriculado"
              value={anoMatriculado}
              onChange={e => setAnoMatriculado(e.target.value)}
              min="4"
              max="4"
              />
            </div>
            <div className={styles.box_buttons}>
              <button onClick={() => setSeason(8)} className={styles.button_submit}>Enviar</button>
              <button className={styles.button_remember} onClick={() => setSeason(0)}>Voltar</button>
            </div>
          </div>
        </>
      ) : season === 7 ? (
        <>
        <div className={styles.content_error}>
        <h3>Nesse momento você não está  apto para inscrever-se devido a não atender aos seguintes requisitos mínimos:</h3>
        <div className={styles.boxList}>
          {errosForm.age !== "" && <span><Image src={ImgIncorrect} alt="" />{errosForm?.age}</span>}
          {errosForm.income_range !== "" && <span><Image src={ImgIncorrect} alt="" />{errosForm?.income_range}</span>}
          {errosForm.have_internet !== "" && <span><Image src={ImgIncorrect} alt="" />{errosForm?.have_internet}</span>}
          {errosForm.have_computer !== "" && <span><Image src={ImgIncorrect} alt="" />{errosForm?.have_computer}</span>}
        </div>
        <p><b>Fique tranquilo(a)!</b><br />
        Você poderá se candidatar novamente para um próximo curso. Fique atento(a) e siga o <b>@VainaWeb</b> nas redes sociais.
        </p>
        <Image src={Emojiicon} alt="" />
        </div>
        </>
      ) : season === 8 ? (
        <>
        <div className={styles.content_error}>
        <h3>Que legal! Identificamos que você já foi nosso(a) aluno(a).</h3>
        <p>
        Agradecemos seu interesse em participar da formação em front-end. No momento, estamos dando prioridade para inscrição de novos(as) alunos(as). Seus dados estão armazenados em nossa base de dados para comunicação de um próximo curso.
        </p>
        <Image src={Emojiicon} alt="" />
        </div>
        </>
      ) : season === 9 ? (
        <>
          <div className={styles.content_error}>
            <h3>Parabéns! <br />Inscrição realizada com sucesso.</h3>
            <p>Estamos orgulhosos por você escolher fazer parte do Vai na Web. Você está prestes a embarcar numa jornada incrível de aprendizagem contínua.</p>
            <p style={{marginTop: "3rem"}}><b>Fique atento ao seu Whatsapp e Email, você será notificado sobre as próximas fases até a aula inaugural.</b></p>
          </div>
        </>
      ) : null}
      </form>
    </section>
  );
}
