import Image from "next/image";
import styles from "./new-paterns.module.css";

import LogoVnw from "../../assets/logo-vnw.svg";
import LogoLoreal from "../../assets/LOREAL_logo.png";
import LogoPS from "../../assets/IPS_logo.png";

export default function NewPaterns() {
  return (
    <div className={styles.content}>
      <div>
        <p style={{ color: "#F6A528" }}>Realização</p>
        <Image src={LogoVnw} style={{ width: "76px" }} alt="" />
        <Image src={LogoPS} style={{ width: "157px" }} alt="" />
      </div>
      <div>
        <p style={{ color: "#F3631E" }}>Apoio</p>
        <Image src={LogoLoreal} style={{ width: "194px" }} alt="" />
      </div>
    </div>
  );
}
