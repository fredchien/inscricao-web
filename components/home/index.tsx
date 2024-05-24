import Image from 'next/image';
import styles from './video.module.css';
import Playicon from "../../assets/play-icon.png"
import AstronautaImage from "../../assets/home-astronauta.png"

export default function Home() {
    return (
        <section className={styles.content} id='home'>
           <div className={styles.box_title}>
            <h1>
            Desenvolva Novos<br />
            Talentos Digitais
            </h1>
            <button>
            <Image src={Playicon} alt=''/>
            <p>ASSISTA AO VÍDEO E<br /> ENTENDA COMO PARTICIPAR</p>
            </button>
            <a href="#formulario">Inscreva-se</a>
           </div>
           <div className={styles.box_end}>
            <Image src={AstronautaImage} alt="" />
           </div>
        </section>
    );
}