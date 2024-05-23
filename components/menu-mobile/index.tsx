import styles from "./menu-mobile.module.css"

export default function MenuMobile() {
  return(
    <div className={styles.menu_mobile} id="menu_mobile">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#home">Início</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#sobre">Sobre</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#formulario">Inscrição</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#faq">Inscreva-se</a>
            </li>
        </ul>
    </div>
  )
}