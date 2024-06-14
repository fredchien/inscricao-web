import backgroundIAP from "../../../assets/background-iap.png";
import backgroundLDP from "../../../assets/background-ldp.png";
import backgroundDFE from "../../../assets/background-dfe.png";

export const data = [
  {
    title: "Introdução à Programação",
    image: backgroundIAP,
    studies: [
      "Fundamentos e sintaxe de HTML",
      "Fundamentos e sintaxe de CSS",
      "Semântica",
      "Acessibilidade",
      "Git e Github",
      "Responsividade",
    ],
  },
  {
    title: "Lógica de Programação",
    image: backgroundLDP,
    studies: [
      "Algoritmos",
      "Estruturas e tipos de dados",
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
