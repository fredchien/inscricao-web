import styles from "./softskils.module.css";
import TitleGradient from "../title-gradient";
import Image from "next/image";
import LogoInteligence from "../../assets/SSia.png";
import LogStudy from "../../assets/SSaprender.png";
import LogoComunication from "../../assets/SScnv.png";
import LogoCode from "../../assets/SSalem.png";
import LogoPrivacity from "../../assets/SSetica.png";
import LogoFocus from "../../assets/SSfoco.png";
import LogoCriativy from "../../assets/SScriativa.png";
import LogoTecnic from "../../assets/SSauto.png";

export default function SoftSkillsComponent() {
  const data = [
    {
      image: LogoInteligence,
      name: "Inteligência Artificial como ferramenta de estudo",
    },
    {
      image: LogStudy,
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
          <Image src={item.image} alt="" className={styles.loadingGif} />

          <p>{item.name}</p>
        </div>
      ))}
    </section>
  );
}
