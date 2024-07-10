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
        
      </div>
      
      <figure className={styles.triangule_right_bottom}></figure>
      <figure className={styles.triangule_left_bottom}></figure>
    </section>
  );
}
