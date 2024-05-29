import React, { useState } from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import styles from "./video.module.css";
import PlayIcon from "../../assets/play-icon.png";
// import LootieHome from "../../public/assets/lottie/lottie_home.json";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const handleClickOutside = () => {
    setShowVideo(false);
  };

  const handleVideoClick = (event) => {
    event.stopPropagation();
  };

  return (
    <section className={styles.content} id="home" onClick={handleClickOutside}>
      {showVideo && (
        <div className={styles.boxVideo} onClick={handleVideoClick}>
          <video controls style={{ maxWidth: "1000px" }} autoPlay={false}>
            <source src="../assets/video/videoteste.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      <div className={styles.box_title}>
        <h1>
          Desenvolva Novos
          <br />
          Talentos Digitais
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
