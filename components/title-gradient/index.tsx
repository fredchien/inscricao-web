import styles from "./title-gradient.module.css"

export default function TitleGradient({Children}) {
  return(
    <h2 className={styles.content}>{Children}</h2>
  )
}