import styles from "./softskils.module.css";
import TitleGradient from "../title-gradient";
import Image from "next/image";
import LogoInteligence from "../../assets/ia-icon.png";
import LogStydyo from "../../assets/stydy-icon.png";
import LogoComunication from "../../assets/comunication-icon.png";
import LogoCode from "../../assets/alem-docodigo-icon.png";
import LogoPrivacity from "../../assets/privacity-icon.png";
import LogoFocus from "../../assets/focus-icon.png";
import LogoCriativy from "../../assets/criativy-icon.png";
import LogoTecnic from "../../assets/tecnic-auto-icon.png";

export default function SoftSkillsComponent() {
  const data = [
    {
      image: LogoInteligence,
      name: "Inteligência Artificial como ferramenta de estudo",
    },
    {
      image: LogStydyo,
      name: "Aprendendo a Aprender",
    },
    {
      image: LogoFocus,
      name: "Determinação e foco",
    },
    {
      image: LogoComunication,
      name: "Comunicação não-violenta",
    },
    {
      image: LogoCode,
      name: "O código além do código",
    },
    {
      image: LogoPrivacity,
      name: "Ética e privacidade digital",
    },
    {
      image: LogoCriativy,
      name: "Programação Criativa",
    },
    {
      image: LogoTecnic,
      name: "Técnicas autodidatas",
    },
  ];

  return (
    <section className={styles.content}>
      <TitleGradient Children="Receberá aulas sobre Soft skills" />
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={item.image}
            alt=""
            width={300}
            height={200}
            className={styles.loadingGif}
          />

          <p>{item.name}</p>
        </div>
      ))}
    </section>
  );
}
