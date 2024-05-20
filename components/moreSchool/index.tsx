import Image from 'next/image';
import styles from './moreSchool.module.css';
import ImgCard from "../../assets/img-card.png"
import TitleGradient from '../title-gradient';


export default function MoreSchool() {
    return (
        <section className={styles.content} id='sobre'>
          <TitleGradient Children="Escola Vai na Web" />  
          <div className={styles.card}>
            <Image 
            src={ImgCard} 
            alt='' 
            objectFit="cover"
            />
            <span>CARREIRA <p>Desenvolvedor Front-end</p></span>
          </div>
        </section>
    );
}