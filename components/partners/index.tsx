import styles from './paterns.module.css';
import imageParterBTg from "../../assets/btg.png";

import Image from 'next/image'

export default function Paterns() {
    return (
        <section className={styles.content}>
          <h2>Alguns de nossos alunos agora são</h2>
          <div>
            <Image className={styles.imgCoursel} src={imageParterBTg} alt="partern-bg" />
            <Image className={styles.imgCoursel} src={imageParterBTg} alt="partern-bg" />
            <Image className={styles.imgCoursel} src={imageParterBTg} alt="partern-bg" />
            <Image className={styles.imgCoursel} src={imageParterBTg} alt="partern-bg" />
            <Image className={styles.imgCoursel} src={imageParterBTg} alt="partern-bg" />
          </div>
        </section>
    );
}