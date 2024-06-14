import React, { useRef, useEffect } from "react";
import styles from "./info-course.module.css";
import lottie from "lottie-web";
import TitleGradient from "../title-gradient";
import MoreSchool from "../moreSchool";

export default function InfoCourse() {
  // const lottieOne = useRef(null);
  // const lottieTwo = useRef(null);

  // useEffect(() => {
  //     lottie.loadAnimation({
  //         container: lottieOne.current,
  //         renderer: 'svg',
  //         loop: true,
  //         autoplay: true,
  //         path: 'https://lottie.host/ed4c5091-baa8-4c52-8394-2262df703b70/Gfo25g3bm8.json',
  //     });

  //     lottie.loadAnimation({
  //         container: lottieTwo.current,
  //         renderer: 'svg',
  //         loop: true,
  //         autoplay: true,
  //         path: 'https://lottie.host/e109d19e-bf4a-4acf-bccc-e5506939e041/CU3ush8jam.json',
  //     });
  // }, []);

  return (
    <section className={styles.content}>
      <div className={styles.boxTitle}>
        <TitleGradient Children={"Boas vindas ao Vai na Web"} />
        <p>
          Um negócio de impacto social que atua na capacitação gratuita em  
          <span>tecnologia digital avançada</span> com o objetivo de preparar
          jovens talentos de favelas e periferias para a economia digital.
          <br />
          <br />
          Por meio dos nossos programas, promovemos a inclusão no mercado de
          trabalho, gerando renda e fomentando o empreendedorismo, com o
          objetivo de{" "}
          <span>
            facilitar a inserção em carreiras sustentáveis e com potencial de
            crescimento no setor de tecnologia
          </span>
          .
        </p>
      </div>
      <div className={styles.content_boxes}>
        <MoreSchool />
        <div className={styles.box_content}>
          <h2>Mas, o que é Front-end?</h2>
          <h3>
            O front-end é a parte visível e interativa de um site ou aplicativo,
            tornando a experiência do usuário agradável e funcional.
            <br />É uma parte crucial do desenvolvimento web.
          </h3>
          {/* <div ref={lottieOne} style={{ width: '100%', height: '300px' }} /> */}
          <p>
            Um(a) desenvolvedor(a) é responsável por criar a interface com a
            qual os usuários interagem diretamente em um site ou aplicativo.
            Isso inclui:
          </p>
          <ul>
            <li>Layout</li>
            <li>Design</li>
            <li>Cores</li>
            <li>Tipografia</li>
            <li>Menus</li>
            <li>Botões</li>
          </ul>
          <p>
            E qualquer outro elemento gráfico, que dê vida às aplicações web.
          </p>
          <a href="#pre-requisitos">Quero me inscrever</a>
        </div>
      </div>
    </section>
  );
}
