export interface ResultProps {
  message: String;
  data?: Array<any>;
  status: number;
}

export const DepositionsService = {
  getListDepositions: async function (): Promise<ResultProps | undefined> {
    const depositons = [
      {
        nome: "Lyslen Miranda",
        image: "/assets/img/lyslen-bg-depositions.png",
        morada: "24 anos / Valença - BA",
        texto:
          "Ao entrar no curso eu não sabia nada sobre desenvolvimento front-end e fiquei muito surpresa ao ver como aprendi rápido sobre diferentes assuntos. Isso se deve a metodologia de ensino aplicada neste projeto, que equilibra perfeitamente teoria e prática, além de passar desafios de projetos reais para aplicarmos os conhecimentos aprendidos. Cada dia que passa sinto que estou mais perto de alcançar meus objetivos.",
      },
      {
        nome: "Deise Sales",
        image: "/assets/img/deise-bg-depositions.png",
        morada: "29 anos / Santa Maria - DF",
        texto:
          "Eu acredito que ter encontrado o Vai na Web e cursar a formação em Java foi uma chance única. Queria muito focar meus estudos nesta linguagem e não sabia por onde começar, muito menos tinha condições de pagar por um curso. Finalizei minha formação e estou muito feliz e grata por tudo.",
      },
      {
        nome: "Livia Mabelle",
        image: "/assets/img/livia-bg-depositions.png",
        morada: "22 anos / Barbalha - CE",
        texto:
          "Recebi o contato de aprovação do Vai na Web em um dos momentos em que estava mais perdida na vida, diante de tantos “nãos”, em um emprego que não gostava, mentalmente esgotada e sem ânimo para finalizar a faculdade. Quando recebi a notícia, foi como um sinal de esperança, mas muito maior do que eu imaginava. Meu sentimento é de gratidão por tudo que pude aprender durante esses meses e por poder fazer parte disso. Agradeço por todo o apoio que recebi da equipe do Vai na Web.",
      },
    ];
    try {
      return {
        message: "Sucesso",
        data: depositons,
        status: 200,
      };
    } catch (error) {
      return {
        message: "Erro ao processar sua lista",
        data: [],
        status: 500,
      };
    }
  },
  getListDepositionsVideo: async function (): Promise<ResultProps | undefined> {
    const depositons = [
      {
        nome: "Tricia Lisboa",
        video: "../assets/video/Tricia.mp4",
        texto: "19 anos / Belém - PA",
      },
      {
        nome: "Gabriel Silva",
        video: "../assets/video/gabriel.mp4",
        texto: "24 anos / São Paulo - SP",
      },
      {
        nome: "Isael Dorneles Júnior",
        video: "../assets/video/Isael.mp4",
        texto: " 31 anos / Mateus Leme - MG",
      },
    ];
    try {
      return {
        message: "Sucesso",
        data: depositons,
        status: 200,
      };
    } catch (error) {
      return {
        message: "Erro ao processar sua lista",
        data: [],
        status: 500,
      };
    }
  },
};
