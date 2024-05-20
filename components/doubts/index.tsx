import styles from "./doubts.module.css"
import TitleGradient from "../title-gradient"
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import IconWpp from "../../assets/icon-wpp.png"
import Image from "next/image";

export default function DoubtsComponents() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const data = [
    {
      title: "O curso é pago?",
      studies: [
        "Não, nosso curso é 100% gratuito.",
      ]
    },
    {
      title: "Será oferecido certificado?",
      studies: [
        "Segundas, quartas, quintas e sextas",
        "Segunda, quarta e sexta - Aulas técnicas",
        "Quinta-feira - Aulas de Soft Skill",
        "Manhã: 09:00 às 10:30",
        "Noite: 18:00 às 19:30",
      ],
    },
    {
      title: "Quais são os dias e horários do curso?",
      studies: ["Biblioteca x Framework",]
    },
    {
      title: "Qual é o tempo de duração do curso?",
      studies: ["O Curso tem duração de 6 meses.",]
    },
    {
      title: "As aulas ficam gravadas?",
      studies: ["Não, nossas aulas são sempre ao vivo e nenhuma gravação é feita",]
    },
    {
      title: "Avaliações do curso",
      studies: [
        "A avaliação do curso é um combo das atividades em sala de aula e desafios práticos que são enviados via google classroom. Presença e interações durante a aula também são levados em consideração.",
      ]
    },
    {
      title: "Por que minha inscrição não foi aprovada?",
      studies: [
        "Porque estamos priorizando a inscrição de novos alunos ou você não cumpriu um ou mais dos requisitos  obrigatórios. Sendo esses:",
        "ㅤ• Ter pelo entre 15 anos a 35 anos",
        "ㅤ• Ter renda de até 3 salários mínimos",
        "ㅤ• Possuir computador ou notebook ",
        "ㅤ• Possuir acesso a internet",
        "ㅤ• Possuir 2h por dias disponíveis para estudar",
      ],
    },
    {
      title: "Será oferecido certificado?",
      studies: [
        "Sim! Ao final do curso você receberá um certificado, indicando que você concluiu o programa e a quantidade de horas investidas para atingir isto.",
      ]
    },
    {
      title: "Será oferecido certificado?",
      studies: [
        "Sim! Ao final do curso você receberá um certificado, indicando que você concluiu o programa e a quantidade de horas investidas para atingir isto.",
         " ", 
         "Atenção:Para receber o certificado, o(a) aluno(a) deverá ter todos os desafios entregues e no mínimo 75% de presença ."  ]
    },

  ];

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return(
    <section className={styles.content} id="faq">
  <TitleGradient Children="Dúvidas frequentes" />
  <div className={styles.content_dropdowns}>
  {data.map((item, index) => (
    <div key={index} className={styles.dropdown}>
      <button className={styles.dropdownToggle} onClick={() => handleDropdown(index)}>
        <p>{item.title}</p>
        <span className={openDropdown === index ? styles.rotateArrow : ''}><FontAwesomeIcon icon={faCaretDown} /></span>
      </button>
      {openDropdown === index && (
        <div className={styles.dropdownContent} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }}>
          {item.studies.map((study, studyIndex) => ( // Renomeie 'item' para 'study' neste map
            <p key={studyIndex}>{study}</p>
          ))}
        </div>
      )}
    </div>
  ))}
  </div>
  <button className={styles.boxDoubts}>
    <Image src={IconWpp} className={styles.iconWpp} alt="" />
    <span>
      <h3>Possui mais dúvidas?</h3>
      <p>Fale com Astro, a assistente virtual da Escola Vai na Web.</p>
    </span>
  </button>
  <div className={styles.boxDoubts_desktop}>
    <h3>Possui mais alguma dúvida? Envie-nos uma mensagem.</h3>
    <form>
      <div className={styles.box_input}>
        <label>Nome</label>
        <input type="text" placeholder="Digite o seu nome completo" />
      </div>
      <div className={styles.box_input}>
        <label>Email</label>
        <input type="text" placeholder="Digite o seu melhor email"  />
      </div>
      <div className={styles.box_input}>
        <label>Recado</label>
        <textarea placeholder="Digite a sua mensagem" />
      </div>
      <button>Enviar</button>
    </form>
  </div>
</section>

  );
}
