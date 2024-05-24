import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./depositions.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


import IconDepositions from "../../assets/icon-depositions.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  document.querySelectorAll('video').forEach(vid => vid.pause());
  return (
    <div
      className={className.arrowButton}
      style={{ ...style, width: "2rem", height: "2rem", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", right: "-2rem", top: "50%", cursor: "pointer", color: "#F6A528"}}
      
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} style={{color: "#F6A528", fontSize: "29px", fontWeight: "600"}} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  document.querySelectorAll('video').forEach(vid => vid.pause());
  return (
    <div
      className={className.arrowButton}
      style={{ ...style, width: "2rem", height: "2rem", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", left: "-2.2rem", top: "50%", cursor: "pointer"}}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} style={{color: "#F6A528", fontSize: "29px", fontWeight: "600"}} />
    </div>
  );
}

export default function Depositions() {
  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    draggable: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          draggable: true,
        }
      },
    ]
  };

  return (
    <div className={styles.boxSection}>
    <section className={styles.content}>
      <Image src={IconDepositions} alt="Depoimentos" />
      <h2>Depoimentos</h2>
      <Slider {...settings} className={styles.slider}>
        <div className={styles.slide}>
          <div className={styles.content}>
            <div className={styles.box_texts}>
              <p>Olá, meu nome é Lyslen Miranda e há alguns meses atrás decidi me inscrever para tentar entrar no curso da carreira de desenvolvedor 
                front-end na escola de tecnologia Vai na Web, e felizmente consegui uma vaga nesse curso maravilhoso. Ao entrar no curso eu não sabia 
                nada sobre desenvolvimento front-end e fiquei muito surpresa ao ver como aprendi rápido sobre os assuntos, e tudo isso devido a metodologia 
                de ensino aplicada neste projeto, que equilibra perfeitamente teoria e prática, além de passar desafios de projetos reais para aplicarmos os 
                conhecimentos aprendidos. A cada dia que passa sinto que estou mais perto dos meus objetivos e a Vai na Web está me ensinando não só o que eu 
                queria saber ao me inscrever no curso, mas muito mais, e isso me motiva a continuar estudar mais a cada dia</p>
              <figure style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "1rem", marginBottom: "0" }}>
                <div style={{ width: "5rem", height: "5rem", background: "#D9D9D9", borderRadius: "50%", paddingBottom: "0" }}></div>
                <p>Lyslen Miranda</p>
              </figure>
            </div>
          </div>
        </div>
        <div className={styles.slide}>
        <div className={styles.videoContainer}>
          <video controls style={{maxWidth: "100%"}} autoPlay={false}>
            <source src="../assets/video/gabriel.mp4" type="video/mp4" />
          </video>  
        </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.box_texts}>
            <p>Eu acredito que ter encontrado o vai na Web com curso de Java foi uma chance única pra mim, eu queria muito focar meu estudos com essa linguagem e não 
              tinha condições de pagar nenhum curso, e também não sabia por onde começar, fiquei muito feliz com o curso, e o quanto os instrutores e facilitadores 
              fazem a gente se sentir a vontade e não ter medo de perguntar e de participar, hoje me formo na turma T1 de back end em java muito feliz e grata por tudo.</p>
            <figure style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "1rem" }}>
              <div style={{ width: "5rem", height: "5rem", background: "#D9D9D9", borderRadius: "50%", paddingBottom: "0" }}></div>
              <p>Deise</p>
            </figure>
          </div>
        </div>
        <div className={styles.slide}>
        <div className={styles.videoContainer}>
          <video controls style={{maxWidth: "100%"}} autoPlay={false}>
            <source src="../assets/video/Isael.mp4" type="video/mp4" />
          </video>  
        </div>
        </div>
        <div className={styles.slide}>
          <div className={styles.box_texts}>
            <p>Eu estou muito satisfeita com o ensino da VNW. Uma única sugestão que eu dei em relação ao método de ensino é que deveriam construir um site do zero e nele ir 
              utilizando tudo o que foi sendo ensinado. I nclusive, eu mesma comecei a fazer isso e estou conseguindo ter um progresso muito melhor em relação ao meu aprendizado. 
              Eu, em particular, tenho um pouco de dificuldade às vezes em entender algumas coisas que meu instrutor ensina, mas acredito que isso seja mais da minha parte do que 
              da parte dele, pois isso acontece com uma boa parte das pessoas que eu assisto em cursos, por exemplo.
              <br />
              <br />
              Apesar dessas coisas, eu gosto da minha turma no geral e sinto um carinho muito grande por parte de toda a equipe com todos os alunos, um carinho individual 
              por todos nós. Quero muito agradecer a todos vocês da VNW por me ajudarem nessa jornada, e quando eu chegar onde eu quero, jamais me esquecerei de vocês. Obrigada 
              por tudo.</p>
            <figure style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "1rem" }}>
              <div style={{ width: "5rem", height: "5rem", background: "#D9D9D9", borderRadius: "50%", paddingBottom: "0" }}></div>
              <p>Beatriz Vieira</p>
            </figure>
          </div>
        </div>
        <div className={styles.slide}>
        <div className={styles.videoContainer}>
          <video controls style={{maxWidth: "100%"}} autoPlay={false}>
            <source src="../assets/video/Tricia.mp4" type="video/mp4" />
          </video>  
        </div>
        </div>
      </Slider>
    </section>
    </div>
  );
}
