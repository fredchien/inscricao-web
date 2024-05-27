import Image from "next/image";
import styles from "./new-paterns.module.css";

import LogoVnw from "../../assets/logo-vnw.svg";
import LogoLoreal from "../../assets/logo-loreal.png";
import LogoPS from "../../assets/logo-instituo-precisaser 1.png";

export default function NewPaterns() {
  return (
    <div className={styles.content}>
      <div>
        <p style={{ color: "#F6A528", marginRight: "2rem" }}>Realização</p>
        <Image src={LogoVnw} alt="" />
        <Image src={LogoPS} alt="" />
      </div>
      <div>
        <p style={{ color: "#F3631E" }}>Apoio</p>
        <Image src={LogoLoreal} alt="" />
      </div>
    </div>
  );
}
