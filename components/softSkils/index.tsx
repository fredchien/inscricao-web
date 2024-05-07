import styles from "./softskils.module.css";
import TitleGradient from "../title-gradient";
import Image from 'next/image'
import Logo from "../../assets/icon-privacy.png"

export default function SoftSkillsComponent() {

  const data = [
    {
      image: Logo,
      name: "Inteligência Artificial como ferramenta de estudo",
    },
    {
      image: Logo,
      name: "Aprendendo a Aprender",
    },
    {
      image: Logo,
      name: "Determinação e foco",
    },
    {
      image: Logo,
      name: "Comunicação não-violenta",
    },
    {
      image: Logo,
      name: "O código além do código",
    },
    {
      image: Logo,
      name: "Ética e privacidade digital",
    },
    {
      image: Logo,
      name: "Programação Criativa",
    },
    {
      image: Logo,
      name: "Técnicas autodidatas",
    },
  ];

  return (
    <section className={styles.content}>
      <TitleGradient Children="Soft skills" />
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <Image src={item.image} alt='' width={300} height={200} className={styles.loadingGif} />

          <p>{item.name}</p>
        </div>
      ))}
    </section>
  );
}
