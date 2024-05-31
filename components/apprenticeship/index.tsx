import React, { useState } from "react";
import styles from "./apprenticeship.module.css";
import TitleGradient from "../title-gradient";
import Image from "next/image";
import backgroundIAP from "../../assets/background-iap.png";
import backgroundLDP from "../../assets/background-ldp.png";
import backgroundDFE from "../../assets/background-dfe.png";

export default function Apprenticeship() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const data = [
    {
      title: "Introdução à Programação",
      image: backgroundIAP,
      studies: [
        "• Fundamentos e sintaxe de HTML",
        "• Fundamento e sintaxe de CSS",
        "• Semântica e acessibilidade",
        "• Git e Github",
        "• Responsividade",
      ],
    },
    {
      title: "Lógica de Programação",
      image: backgroundLDP,
      studies: [
        "• Algoritmos",
        "• Tipo de dados",
        "• Estruturas de dados",
        "• JavaScript",
        "ﾠ• Sintaxe",
        "ﾠ• Variáveis",
        "ﾠ• Operadores",
        "ﾠ• Métodos",
        "ﾠ• Condições",
        "ﾠ• Função",
        "ﾠ• Interatividade",
      ],
    },
    {
      title: "Desenvolvimento Front-end",
      image: backgroundDFE,
      studies: [
        " Biblioteca x Framework",
        "ﾠ• React",
        "ﾠ• JSX",
        "ﾠ• Componentização",
        "ﾠ• Ciclo de Vida",
        "ﾠ• Styled-components",
        "ﾠ• Hooks",
        "ﾠ• Rotas",
        "ﾠ• Consumo de API",
        "ﾠ• Introdução à Vue.js",
      ],
    },
  ];

  return (
    <section className={styles.content}>
      <TitleGradient Children="Você aprenderá nas aulas técnicas" />
      {data.map((item, index) => (
        <div key={index} className={styles.module}>
          <Image src={item.image} alt={item.title} className={styles.image} />
          <div>
            <h3>{item.title}</h3>
            <ul>
              {item.studies.map((study, index) => (
                <li key={index}>{study}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
