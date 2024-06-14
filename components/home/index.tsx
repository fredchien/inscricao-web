import React, { useState, useRef } from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import styles from "./video.module.css";
import PlayIcon from "../../assets/play-icon.png";
import LootieHome from "../../public/assets/lottie/lottie_home.json";
import { Modal } from "react-bootstrap";

export default function Home() {
  const [show, setShow] = useState(false);

  const videoRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setPlayVideo(true);
  };

  const showPlayVideo = () => {
    showVideo();
    startVideo();
  };

  const handleClose = () => setShow(false);
  const showVideo = () => setShow(true);

  return (
    <section className={styles.content} id="home">
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
      <Modal
        show={show}
        onHide={handleClose}
        className={`${styles.boxVideo} custom-modal`}
      >
        <video
          ref={videoRef}
          controls
          autoPlay={playVideo}
          style={{
            borderRadius: "12px",
            boxShadow: "0px 0 5px #fff",
            width: "90%",
            maxWidth: "1000px",
            marginTop: "5rem",
          }}
        >
          <source src="../assets/video/EscolaVainaWeb.mp4" type="video/mp4" />
        </video>
      </Modal>
      <div className={styles.box_title}>
        <h1>
          Formação Desenvolvedor(a)
          <br />
          Front-end + React + VUE
        </h1>
        <button onClick={showPlayVideo}>
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
