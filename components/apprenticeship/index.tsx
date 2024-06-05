import React, { useState } from "react";
import styles from "./apprenticeship.module.css";
import TitleGradient from "../title-gradient";
import Image from "next/image";
import { data } from "./service";

export default function Apprenticeship() {
  return (
    <section className={styles.content}>
      <TitleGradient Children="Você aprenderá nas aulas técnicas" />
      {data.map((item, index) => (
        <div key={index} className={styles.module}>
          <Image src={item.image} alt={item.title} className={styles.image} />
          <div>
            <h3>{item.title}</h3>
            <ul>
              {item.studies.map((study, studyIndex) =>
                Array.isArray(study) ? (
                  <ul key={studyIndex}>
                    {study.map((subStudy, subStudyIndex) => (
                      <li key={subStudyIndex} style={{ marginLeft: "2rem" }}>
                        {subStudy}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <li key={studyIndex} style={{ marginLeft: "1rem" }}>
                    {study}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
