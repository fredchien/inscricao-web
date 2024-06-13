import React, { useState } from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import styles from "./video.module.css";
import PlayIcon from "../../assets/play-icon.png";
import LootieHome from "../../public/assets/lottie/lottie_home.json";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const handleClickOutside = () => {
    setShowVideo(false);
  };

  return (
    <section className={styles.content} id="home" onClick={handleClickOutside}>
      <div className={styles.videoBackground}>
        <video
          autoPlay
          loop
          muted
          style={{ borderRadius: "12px", boxShadow: "0px 0 5px #fff" }}
        >
          <source src="../assets/video/bgTeste.mp4" type="video/mp4" />
        </video>
      </div>
      {showVideo && (
        <div className={styles.boxVideo} onClick={handleClickOutside}>
          <video
            controls
            autoPlay={false}
            style={{ borderRadius: "12px", boxShadow: "0px 0 5px #fff" }}
          >
            <source
              src="../assets/video/VideoInstitucional.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
      <div className={styles.box_title}>
        <h1>
          Formação Desenvolvedor(a)
          <br />
          Front-end + React + VUE
        </h1>
        <button
          onClick={(event) => {
            event.stopPropagation();
            setShowVideo(true);
          }}
        >
          <Image src={PlayIcon} alt="Play Icon" />
          <p>
            ASSISTA AO VÍDEO E<br /> ENTENDA COMO PARTICIPAR
          </p>
        </button>
        <a href="#pre-requisitos">Inscreva-se</a>
      </div>
      <figure className={styles.triangule_right_bottom}></figure>
      <figure className={styles.triangule_left_bottom}></figure>
    </section>
  );
}
