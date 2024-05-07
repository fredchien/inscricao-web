import React, { useState } from 'react';
import styles from "./apprenticeship.module.css";
import TitleGradient from "../title-gradient";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Apprenticeship() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const data = [
    {
      title: "Introdução à Programação",
      studies: [
        "• Fundamentos e sintaxe de HTML",
        "• Fundamento e sintaxe de CSS",
        "• Semântica e acessibilidade",
        "• Git e Github",
        "• Responsividade",
      ]
    },
    {
      title: "Lógica de Programação",
      studies: [
        "• Algoritmos",
        "• Sintaxe",
        "• Tipo de dados",
        "• Estruturas de dados",
        "• JavaScript",
        "ﾠ• Variáveis",
        "ﾠ• Operadores",
        "ﾠ• Métodos",
        "ﾠ• Condições",
        "ﾠ• Condições",
        "ﾠ• Interatividade",
      ]
    },
    {
      title: "Desenvolvimento Front-end",
      studies: [
        "• Biblioteca x Framework",
        "ﾠ• React",
        "ﾠ• JSX",
        "ﾠ• Componentização",
        "ﾠ• Ciclo de Vida",
        "ﾠ• Styled-components",
        "ﾠ• Hooks",
        "ﾠ• Rotas",
        "ﾠ• Consumo de API",
        "ﾠ• Introdução à Vue.js",
      ]
    }
  ];

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section className={styles.content}>
      <TitleGradient Children="Você aprenderá nas aulas técnicas" />
      {data.map((item, index) => (
        <div key={index} className={styles.dropdown}>
          <button className={styles.dropdownToggle} onClick={() => handleDropdown(index)}>
            {item.title} <span className={openDropdown === index ? styles.rotateArrow : ''}><FontAwesomeIcon icon={faCaretDown} /></span>
          </button>
          {openDropdown === index && (
            <ul className={styles.dropdownContent}>
              {item.studies.map((study, studyIndex) => (
                <li key={studyIndex}>{study}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
