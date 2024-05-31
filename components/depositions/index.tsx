import React from "react";
import Image from "next/image";
import styles from "./depositions.module.css";

import IconDepositions from "../../assets/icon-depositions.png";
import Photo from "../../assets/image-deposition.svg";

export default function Depositions() {
  const data = [
    {
      nome: "Lyslen Miranda, 24 anos",
      image: Photo,
      morada: "Valença, BA",
      texto:
        "Ao entrar no curso eu não sabia nada sobre desenvolvimento front-end e fiquei muito surpresa ao ver como aprendi rápido sobre diferentes assuntos. Isso se deve a metodologia de ensino aplicada neste projeto, que equilibra perfeitamente teoria e prática, além de passar desafios de projetos reais para aplicarmos os conhecimentos aprendidos. Cada dia que passa sinto que estou mais perto de alcançar meus objetivos.",
    },
    {
      nome: "Deise Sales, 29 anos",
      image: Photo,
      morada: "Santa Maria - DF",
      texto:
        "Eu acredito que ter encontrado o Vai na Web e cursar a formação em Java foi uma chance única. Queria muito focar meus estudos nesta linguagem e não sabia por onde começar, muito menos tinha condições de pagar por um curso. Finalizei minha formação e estou muito feliz e grata por tudo.",
    },
    {
      nome: "Livia Mabelle, 22 anos",
      image: Photo,
      morada: "Barbalha - CE",
      texto:
        "Recebi o contato de aprovação do Vai na Web em um dos momentos em que estava mais perdida na vida, diante de tantos “nãos”, em um emprego que não gostava, mentalmente esgotada e sem ânimo para finalizar a faculdade. Quando recebi a notícia, foi como um sinal de esperança, mas muito maior do que eu imaginava. Meu sentimento é de gratidão por tudo que pude aprender durante esses meses e por poder fazer parte disso. Agradeço por todo o apoio que recebi da equipe do Vai na Web.",
    },
  ];
  return (
    <div className={styles.boxSection}>
      <section className={styles.content}>
        <Image src={IconDepositions} alt="Depoimentos" />
        <h2>Depoimentos</h2>
        <div className={styles.boxCards}>
          {data.map((item) => {
            return (
              <div className={styles.cardDeposition}>
                <figure>
                  <Image src={item.image} alt="Foto" />
                </figure>
                <p className={styles.textName}>{item.nome}</p>
                <p style={{ marginBottom: "1rem" }}>{item.morada}</p>
                <p style={{ fontSize: "0.9rem", textAlign: "start" }}>
                  {item.texto}
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles.contentVideo}>
          <div className={styles.cardVideo}>
            <figure className={styles.boxVideo}>
              <video controls autoPlay={false}>
                <source src="../assets/video/Tricia.mp4" type="video/mp4" />
              </video>
            </figure>
            <span className={styles.BoxTextsVideo}>
              <p className={styles.textName}>Lorem ipsum, Lorem ipsum</p>
              <p>Lorem ipsum, Lorem ipsum, Lorem ipsum </p>
            </span>
          </div>
          <div className={styles.cardVideo}>
            <figure className={styles.boxVideo}>
              <video controls autoPlay={false}>
                <source src="../assets/video/Gabriel.mp4" type="video/mp4" />
              </video>
            </figure>
            <span className={styles.BoxTextsVideo}>
              <p className={styles.textName}>Lorem ipsum, Lorem ipsum</p>
              <p>Lorem ipsum, Lorem ipsum, Lorem ipsum </p>
            </span>
          </div>
          <div className={styles.cardVideo}>
            <figure className={styles.boxVideo}>
              <video controls autoPlay={false}>
                <source src="../assets/video/Oriana.mp4" type="video/mp4" />
              </video>
            </figure>
            <span className={styles.BoxTextsVideo}>
              <p className={styles.textName}>Lorem ipsum, Lorem ipsum</p>
              <p>Lorem ipsum, Lorem ipsum, Lorem ipsum </p>
            </span>
          </div>
          <div className={styles.cardVideo}>
            <figure className={styles.boxVideo}>
              <video controls style={{ maxWidth: "200px" }} autoPlay={false}>
                <source src="../assets/video/Isael.mp4" type="video/mp4" />
              </video>
            </figure>
            <span className={styles.BoxTextsVideo}>
              <p className={styles.textName}>Lorem ipsum, Lorem ipsum</p>
              <p>Lorem ipsum, Lorem ipsum, Lorem ipsum </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
