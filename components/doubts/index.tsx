import styles from "./doubts.module.css";
import TitleGradient from "../title-gradient";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import IconWpp from "../../assets/icon-wpp.png";
import Image from "next/image";
import { data } from "./service";

export default function DoubtsComponents() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section className={styles.content} id="faq">
      <TitleGradient Children="Dúvidas frequentes" />
      <div className={styles.content_dropdowns}>
        {data.map((item, index) => (
          <div key={index} className={styles.dropdown}>
            <button
              className={styles.dropdownToggle}
              onClick={() => handleDropdown(index)}
            >
              <p>{item.title}</p>
              <span
                className={openDropdown === index ? styles.rotateArrow : ""}
              >
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </button>
            {openDropdown === index && (
              <div
                className={styles.dropdownContent}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                {item.studies.map((study, studyIndex) => (
                  <p key={studyIndex}>
                    {study}{" "}
                    {item.link && (
                      <a href="mailto:escola@vainaweb.com.br">
                        escola@vainaweb.com.br
                      </a>
                    )}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.boxDoubts}>
        <span className={styles.doubtsEmail}>
          <h3>Possui mais alguma dúvida?</h3>
          <p>
            Fale conosco através do Email
            <br />{" "}
            <a href="mailto:escola@vainaweb.com.br">
              <h3>escola@vainaweb.com.br</h3>
            </a>
          </p>
        </span>
        <span className={styles.doubtsWpp}>
          <Image src={IconWpp} alt="" />
          <span>
            <p>
              <b>Possui mais dúvidas?</b>
            </p>
            <p>
              Fale com <b>Astro</b>, a assistente virtual da Escola Vai na Web.
            </p>
          </span>
        </span>
      </div>
    </section>
  );
}
