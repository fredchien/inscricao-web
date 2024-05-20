import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./depositions.module.css";

import IconDepositions from "../../assets/icon-depositions.png";
import PlayIcon from "../../assets/play-icon-two.png";
import Aluno from "../../assets/image-student.png"

// import video1 from "../../assets/videos/gabriel.mp4";
// import video2 from "../../assets/videos/gabriel.mp4";
// import video3 from "../../assets/videos/gabriel.mp4";

export default function Depositions() {

  return (
    <section className={styles.content}>
      <Image src={IconDepositions} alt="" />
      <h2>Depoimentos</h2>
      <div className={styles.content} style={{ width: "100%", margin: "0 auto" }}>
        <div style={{border: "solid 1px  #D9D9D9", borderRadius: "5px", padding: "2rem", fontSize: "12px"}}>
          <p>Ser um aluno Vai na Web foi uma experiência transformadora para mim. Durante o curso de back-end em Java, pude mergulhar em um universo de conhecimento rico e desafiador. As aulas ao vivo proporcionaram não apenas aprendizado prático, mas também uma conexão única com os professores e colegas de classe.</p>
          <p>A cada nova aula, eu sentia a minha compreensão e habilidades em Java se expandindo. Era incrível ver como os conceitos complexos se tornavam claros e aplicáveis através das explicações e exemplos dos professores. A interatividade das aulas ao vivo permitiu que eu tirasse dúvidas imediatamente e assimilasse o conteúdo de forma mais eficiente.</p>
          <p>A felicidade que senti ao concluir o curso foi indescritível. Saber que adquiri habilidades sólidas em back-end Java e que estou preparado para enfrentar desafios no mercado de trabalho é uma sensação gratificante. Agradeço imensamente à equipe Vai na Web por proporcionar essa jornada de aprendizado enriquecedora e por me preparar para um futuro promissor na área de desenvolvimento de software. Estou animado para colocar em prática tudo o que aprendi e continuar evoluindo como profissional. 😊✨</p>
          <figure style={{display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "1rem", marginBottom: "0  "}}>
            <div style={{width: "5rem", height: "5rem", background: "#D9D9D9", borderRadius: "50%", paddingBottom: "0"}}></div>
            <p>Thalia, aluna Back-end</p>
          </figure>
        </div>
        <div className={styles.box_aluno}>
        <figure style={{width: "150px", height: "150px", position: "relative"}}>
          <Image src={Aluno} alt="" style={{width: "100%", height: "100%", position: "static"}} />
          <Image src={PlayIcon} className={styles.play_icon} alt="" />
        </figure>
        <p>Felipe Xavier</p>

        </div>
        <div style={{border: "solid 1px  #D9D9D9", borderRadius: "5px", padding: "2rem", fontSize: "12px"}}>
          <p>Só tenho a agradecer a oportunidade de ter vivenciado essa experiência e ter tido contato com pessoas incríveis, e também  ter tido acesso à todo esse conhecimento que foi proporcionado de todas as áreas e conhecimentos que foram abordados.</p>
          <p>Admiro a capacidade de estarem sempre (claro dentro do possível) bem humorados, alto astral e motivados para assim nos motivar também.</p>
          <p>Minha gratidão é sincera por todas as oportunidades que tive de aprender, seja algo direto de vocês ou de parceiros e convidados. É uma vivência enriquecedora que somente o dia a dia pode nos proporcionar.</p>
          <p>Vocês são nota 1.000!!</p>
          <figure style={{display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "1rem"}}>
            <div style={{width: "5rem", height: "5rem", background: "#D9D9D9", borderRadius: "50%", paddingBottom: "0"}}></div>
            <p>Alexandre, aluno Back-end</p>
          </figure>
        </div>
      </div>
    </section>
  );
}
