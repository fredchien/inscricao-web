import Image from 'next/image';
import styles from './video.module.css';
import Playicon from "../../assets/play-icon.png"
import AstronautaImage from "../../assets/home-astronauta.png"

export default function Home() {
    return (
        <section className={styles.content}>
           <div className={styles.box_title}>
            <h1>
            Desenvolva Novos<br />
            Talentos Digitais
            </h1>
            <button>
            <Image src={Playicon} alt=''/>
            <p>ASSISTA AO VIDEO E ENTENDA</p>
            </button>
            <a href=''>Increva-se</a>
           </div>
           <div className={styles.box_end}>
            <Image src={AstronautaImage} alt="" />
           </div>
        </section>
    );
}