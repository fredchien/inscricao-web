import styles from "./questions.module.css";

export default function Questions() {
  return (
    <div className={styles.content}>
      {/* <figure>
          <span></span>
          <span></span>
          <span></span>
        </figure> */}
      <h3>Ficou com alguma dúvida?</h3>
      <a href="#faq">
        <button>Tenho dúvidas</button>
      </a>
    </div>
  );
}
