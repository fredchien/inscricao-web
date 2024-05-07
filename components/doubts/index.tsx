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
        "Fundamentos e sintaxe de HTML",
      ]
    },
    {
      title: "Será oferecido certificado?",
      studies: "Algoritmos",
    },
    {
      title: "Quais são os dias e horários do curso?",
      studies: "Biblioteca x Framework",
    },
    {
      title: "As aulas ficam gravadas?",
      studies: "Algoritmos",
    },
    {
      title: "Qual é o tempo de duração do curso?",
      studies: "Algoritmos",
    },
    {
      title: "Avaliações do curso",
      studies: "Algoritmos",
    },
  ];

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return(
    <section className={styles.content}>
      <TitleGradient Children="Dúvidas frequentes" />

      {data.map((item, index) => (
        <div key={index} className={styles.dropdown}>
          <button className={styles.dropdownToggle} onClick={() => handleDropdown(index)}>
            <p>{item.title} </p>
            <span className={openDropdown === index ? styles.rotateArrow : ''}><FontAwesomeIcon icon={faCaretDown} /></span>
          </button>
          {openDropdown === index && (
            <div className={styles.dropdownContent}>
             <p>{item.studies}</p>
            </div>
          )}
        </div>
      ))}
      <button className={styles.boxDoubts}>
        <Image src={IconWpp} className={styles.iconWpp} alt="" />
        <span>
          <h3>Possui mais dúvidas?</h3>
          <p>Fale com Astro, a assistente virtual da Escola Vai na Web.</p>
        </span>
      </button>
    </section>
  );
}
