import styles from "./menu-mobile.module.css";

export default function MenuMobile({ openMenu }) {
  return (
    <div className={styles.menu_mobile} id="menu_mobile">
      <ul className="navbar-nav">
        <li className="nav-item" onClick={openMenu}>
          <a className="nav-link" href="#home">
            Início
          </a>
        </li>
        <li className="nav-item" onClick={openMenu}>
          <a className="nav-link" href="#sobre">
            Sobre
          </a>
        </li>
        <li className="nav-item" onClick={openMenu}>
          <a className="nav-link" href="#faq">
            FAQ
          </a>
        </li>
        <li className="nav-item" onClick={openMenu}>
          <a className="nav-link" href="#pre-requisitos">
            Inscreva-se
          </a>
        </li>
      </ul>
    </div>
  );
}
