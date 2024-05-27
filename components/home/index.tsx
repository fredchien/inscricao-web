import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import styles from "./video.module.css";
import PlayIcon from "../../assets/play-icon.png";
// import LootieHome from "../../public/assets/lottie/lottie_home.json";

export default function Home() {
  return (
    <section className={styles.content} id="home">
      <div className={styles.box_title}>
        <h1>
          Desenvolva Novos
          <br />
          Talentos Digitais
        </h1>
        <button>
          <Image src={PlayIcon} alt="Play Icon" />
          <p>
            ASSISTA AO VÍDEO E<br /> ENTENDA COMO PARTICIPAR
          </p>
        </button>
        <a href="#formulario">Inscreva-se</a>
      </div>
      <div className={styles.box_end}>
        {/* <div style={{ maxWidth: "500px" }}>
          <Lottie animationData={LootieHome} />
        </div> */}
      </div>
      <figure className={styles.triangule_right_bottom}></figure>
      <figure className={styles.triangule_left_bottom}></figure>
    </section>
  );
}
