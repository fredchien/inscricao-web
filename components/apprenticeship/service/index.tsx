import backgroundIAP from "../../../assets/background-iap.png";
import backgroundLDP from "../../../assets/background-ldp.png";
import backgroundDFE from "../../../assets/background-dfe.png";

export const data = [
  {
    title: "Introdução à Programação",
    image: backgroundIAP,
    studies: [
      "Fundamentos e sintaxe de HTML",
      "Fundamento e sintaxe de CSS",
      "Semântica e acessibilidade",
      "Git e Github",
      "Responsividade",
    ],
  },
  {
    title: "Lógica de Programação",
    image: backgroundLDP,
    studies: [
      "Algoritmos",
      "Tipo de dados",
      "Estruturas de dados",
      "JavaScript",
      [
        "Sintaxe, Variáveis, Operadores",
        "Métodos, Condições, Função",
        "Interatividade",
      ],
    ],
  },
  {
    title: "Desenvolvimento Front-end",
    image: backgroundDFE,
    studies: [
      "Biblioteca x Framework",
      [
        "React, JSX",
        "Componentização, Ciclo de Vida",
        "Styled-components",
        "Hooks, Rotas, Consumo de API",
        "Introdução à Vue.js",
      ],
    ],
  },
];
