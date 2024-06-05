import Questions from "../questions";
import TitleGradient from "../title-gradient";
import styles from "./requeriments.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "./service";

export default function Requeriments() {
  return (
    <section className={styles.content} id="pre-requisitos">
      <TitleGradient Children="Deseja se tornar um Desenvolvedor Front-end?" />
      <div>
        <h3>Confira os pré-requisitos</h3>
        <ul>
          {data[0].prerequisites.map((prerequisite, index) => (
            <li key={index} className={styles.listCorrect}>
              <FontAwesomeIcon icon={faCircleCheck} />
              {prerequisite}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Não é necessário</h3>
        <ul>
          {data[0].notReally.map((notReally, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faCircleXmark} />
              {notReally}
            </li>
          ))}
        </ul>
        <Questions />
      </div>
    </section>
  );
}
