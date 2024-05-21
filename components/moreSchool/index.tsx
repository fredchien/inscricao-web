import Image from 'next/image';
import styles from './moreSchool.module.css';
import ImgCard from "../../assets/background-card.png"


export default function MoreSchool() {
    return (
        <div className={styles.content} id='sobre'>
          <div className={styles.card}>
            <Image 
            src={ImgCard} 
            alt='' 
            objectFit="cover"
            />
            <span>FORMAÇÃO <br /><p>Desenvolvedor(a)<br/> Front-end + vue</p></span>
          </div>
        </div>
    );
}