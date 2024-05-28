import Image from "next/image";
import styles from "./new-paterns.module.css";

import LogoVnw from "../../assets/logo-vnw.svg";
import LogoLoreal from "../../assets/LOREAL_logo.png";
import LogoPS from "../../assets/IPS_logo.png";

export default function NewPaterns() {
  return (
    <section className={styles.content}>
      <div className={styles.boxContent}>
        <div>
          <p style={{ color: "#F6A528" }}>Realização</p>
          <figure>
            <Image
              src={LogoVnw}
              style={{ width: "76px", marginRight: "0.9rem" }}
              alt=""
            />
            <Image src={LogoPS} style={{ width: "157px" }} alt="" />
          </figure>
        </div>
        <div>
          <p style={{ color: "#F3631E" }}>Apoio</p>
          <Image src={LogoLoreal} style={{ width: "194px" }} alt="" />
        </div>
      </div>
    </section>
  );
}
