import React, { useState } from 'react';
import styles from './sliderbutton.module.css';
import TitleGradient from '../title-gradient';

export default function SliderButtons() {
    const [selectedButton, setSelectedButton] = useState('Descrição sobre as aulas técnicas... são dinâmicas, online, ao vivo e tal tal tal');

    const handleButtonClick = (text) => {
        setSelectedButton(text);
    };

    return (
        <section className={styles.content}>
          <TitleGradient Children="Este curso é pra quem busca" />
            <div className={styles.boxButtons}>
                <button
                    className={selectedButton === 'Descrição sobre as aulas técnicas... são dinâmicas, online, ao vivo e tal tal tal' ? styles.selectedButton : ''}
                    onClick={() => handleButtonClick('Descrição sobre as aulas técnicas... são dinâmicas, online, ao vivo e tal tal tal')}
                >
                    Técnica
                </button>
                <button
                    className={selectedButton === 'Texto do botão Desafios' ? styles.selectedButton : ''}
                    onClick={() => handleButtonClick('Texto do botão Desafios')}
                >
                    Desafios
                </button>
                <button
                    className={selectedButton === 'Texto do botão Soft skills' ? styles.selectedButton : ''}
                    onClick={() => handleButtonClick('Texto do botão Soft skills')}
                >
                    Soft skills
                </button>
            <span>{selectedButton}</span>
            </div>
        </section>
    );
}
