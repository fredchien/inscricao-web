import React from "react";
import styles from "./info-course.module.css";
import TitleGradient from "../title-gradient";


export default function InfoCourse() {
  return (
    <section className={styles.content}>
      <div className={styles.boxTitle}>
        <TitleGradient Children={"A chamada para a Formação Desenvolvedor(a) Front-end + React + VUE estão encerradas."} />
        <p>
        <b>Preencha o nosso formulário de interesse e seja o primeiro a receber informações sobre as novas turmas. Comece a construir um futuro promissor na área de tecnologia.</b>
        </p>
        <p>Junte-se ao Vai na Web e dê o primeiro passo rumo a uma carreira de sucesso. Estamos esperando por você!
        </p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <a href="#form">Realizar pré-inscrição</a>
        </div>
      </div>
    </section>
  );
}
