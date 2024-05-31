import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./depositions.module.css";

import IconDepositions from "../../assets/icon-depositions.png";
import TitleGradient from "../title-gradient";

import { DepositionsService } from "./service";

export interface IDepositions {
  nome: String;
  image: String;
  morada: String;
  texto: String;
}
export interface IDepositionsVideo {
  nome: String;
  video: String;
  texto: String;
}

export default function Depositions() {
  const [depositions, setDepositions] = useState<IDepositions[]>([]);
  const [depositionsVideo, setDepositionsVideo] = useState<IDepositionsVideo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchDepositions();
        await fetchDepositionsVideo();
      } catch (error) {
        console.error('Erro ao buscar:', error);
      }
    };
    fetchData();
  }, []);

  const fetchDepositions = async () => {
    try {
      const response = await DepositionsService.getListDepositions();
      setDepositions(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDepositionsVideo = async () => {
    try {
      const response = await DepositionsService.getListDepositionsVideo();
      setDepositionsVideo(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  
  function playPause(index: number) {
    var video = document.getElementById(`video${index}`) as HTMLVideoElement;
    var btn = document.getElementById(`play${index}`);

    if (video.paused) {
      video.play();
      btn.classList.add('d-none')
    } else {
      video.pause();
      btn.classList.remove('d-none')
    }
  }

  return (
    <div className={styles.boxSection}>
      <section className={styles.content}>
        <Image src={IconDepositions} alt="Depoimentos" />
        <TitleGradient Children={"Depoimentos"} />
        <div className={styles.boxCards}>
          {depositions.map((item) => {
            return (
              <div className={styles.cardDeposition}>
                <figure>
                  <Image src={item.image as string} alt="Foto" width={220} height={220}/>
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
          {depositionsVideo.map((item, index) => {
            return (
              <div className={styles.cardVideo}>
                <figure className={styles.boxVideo}>
                  <video autoPlay={false} id={`video${index}`} onClick={() => playPause(index)}>
                    <source src={item.video as string} type="video/mp4" />
                  </video>
                  <i className="fa-solid fa-play" id={`play${index}`} onClick={() => playPause(index)}></i>
                </figure>
                <span className={styles.BoxTextsVideo}>
                  <p className={styles.textName}>{item.nome}</p>
                  <p>{item.texto}</p>
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
