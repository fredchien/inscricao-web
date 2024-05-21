import Apprenticeship from "../apprenticeship"
import SoftSkillsComponent from "../softSkils"
import styles from "./content-yellow.module.css"

export default function ContentYellow() {
  return(
    <div className={styles.content}>
        <figure className={styles.triangule_right_top}></figure>
        <figure className={styles.triangule_left_top}></figure>
      <div className={styles.box_content}>
        <Apprenticeship />
        <SoftSkillsComponent />
      </div>
      <figure className={styles.triangule_right_bottom}></figure>
      <figure className={styles.triangule_left_bottom}></figure>
    </div>
  )
}