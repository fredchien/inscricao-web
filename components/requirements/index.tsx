import Questions from "../questions";
import TitleGradient from "../title-gradient";
import styles from "./requeriments.module.css";

export default function Requeriments() {
  const data = [
    {
      prerequisites: [
        "Ter entre 16 e 35 anos de idade",
        "Renda familiar até 1 salário mínimo por pessoa",
        "Morar no estado Rio de Janeiro",
        "Disponibilidade de 2 horas por dia, de segunda-feira à sexta-feira",
        "Possuir computador ou notebook",
        "Possuir acesso à internet",
      ],
      notReally: [
        "Conhecimento prévio sobre programação ou tecnologia",
        "Fazer cálculos matemáticos",
      ],
    },
  ];

  return (
    <section className={styles.content}>
      <TitleGradient Children="Deseja se tornar um Desenvolvedor Front-end?" />
      <div>
      <h3>Confira os pré-requisitos</h3>
      <ul>
        {data[0].prerequisites.map((prerequisite, index) => (
          <li key={index}>
            <input 
              type="checkbox"
              className={styles.checkbox}
              checked={true}
              disabled
            /> {prerequisite}
            </li>
        ))}
      </ul>
      </div>
      <div>
      <h3>Não é necessário</h3>
      <ul>
        {data[0].notReally.map((notReally, index) => (
          <li key={index}>
            <input 
               type="checkbox"
               className={styles.checkbox}
               checked={false}
               disabled
            /> 
            {notReally}</li>
        ))}
      </ul>
      <Questions />
      </div>
    </section>
  );
}
