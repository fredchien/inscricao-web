import styles from "./doubts.module.css";
import TitleGradient from "../title-gradient";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import IconWpp from "../../assets/icon-wpp.png";
import Image from "next/image";

export default function DoubtsComponents() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const data = [
    {
      title: "O curso é pago?",
      studies: ["Não, nosso curso é 100% gratuito."],
    },
    {
      title: "Por que a minha inscrição não foi aprovada?",
      studies: [
        "Porque estamos priorizando a inscrição de novos alunos ou você não cumpriu um ou mais dos requisitos  obrigatórios.",
      ],
    },
    {
      title: "Será oferecido certificado?",
      studies: [
        "Sim! Todos os nosso cursos emitem certificados para todos os alunos que demonstram dedicação e excelência técnica.",
      ],
    },
    {
      title: "Quais são os dias e horários do curso?",
      studies: [
        "Segundas, quartas, quintas e sextas",
        "Segunda, quarta e sexta - Aulas técnicas",
        "Quinta-feira - Aulas de Soft Skill",
        "Manhã: 09:00 às 10:30",
        "Noite: 18:00 às 19:30",
      ],
    },
    {
      title: "Qual é o tempo de duração do curso?",
      studies: ["O Curso tem duração de 6 meses."],
    },
    {
      title: "As aulas ficam gravadas?",
      studies: [
        "Não, nossas aulas são sempre ao vivo e nenhuma gravação é feita.",
      ],
    },
    {
      title: "Como são feitas as avaliações do curso?",
      studies: [
        "A avaliação do curso é um combo das atividades em sala de aula e desafios práticos que são enviados via Google Classroom. Presença e interações durante a aula também são levados em consideração.",
      ],
    },
  ];

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section className={styles.content} id="faq">
      <TitleGradient Children="Dúvidas frequentes" />
      <div className={styles.content_dropdowns}>
        {data.map((item, index) => (
          <div key={index} className={styles.dropdown}>
            <button
              className={styles.dropdownToggle}
              onClick={() => handleDropdown(index)}
            >
              <p>{item.title}</p>
              <span
                className={openDropdown === index ? styles.rotateArrow : ""}
              >
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {openDropdown === index && (
              <div
                className={styles.dropdownContent}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                {item.studies.map(
                  (
                    study,
                    studyIndex // Renomeie 'item' para 'study' neste map
                  ) => (
                    <p key={studyIndex}>{study}</p>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.boxDoubts}>
        <span className={styles.doubtsEmail}>
          <h3>Possui mais alguma dúvida?</h3>
          <p>
            Fale conosco através do Email
            <br />{" "}
            <a href="mailto:escola@vainaweb.com.br">
              <h3>escola@vainaweb.com.br</h3>
            </a>
          </p>
        </span>
        <span className={styles.doubtsWpp}>
          <Image src={IconWpp} alt="" />
          <span>
            <p>
              <b>Possui mais dúvidas?</b>
            </p>
            <p>
              Fale com <b>Astro</b>, a assistente virtual da Escola Vai na Web.
            </p>
          </span>
        </span>
      </div>
    </section>
  );
}
