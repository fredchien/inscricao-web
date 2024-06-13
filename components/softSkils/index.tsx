import styles from "./softskils.module.css";
import TitleGradient from "../title-gradient";
import Image from "next/image";
import { data } from "./service";

export default function SoftSkillsComponent() {
  return (
    <section className={styles.content}>
      <TitleGradient Children="Receberá aulas sobre Soft skills" />
      <div className={styles.contentImages}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <Image src={item.image} alt="" className={styles.loadingGif} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <a href="#pre-requisitos">Quero me inscrever</a>
    </section>
  );
}
