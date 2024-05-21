import React, { useRef, useEffect } from 'react';
import styles from './info-course.module.css';
import lottie from 'lottie-web';
import TitleGradient from '../title-gradient';
import MoreSchool from '../moreSchool';

export default function InfoCourse() {
    // const lottieOne = useRef(null);
    // const lottieTwo = useRef(null);

    // useEffect(() => {
    //     lottie.loadAnimation({
    //         container: lottieOne.current,
    //         renderer: 'svg',
    //         loop: true,
    //         autoplay: true,
    //         path: 'https://lottie.host/ed4c5091-baa8-4c52-8394-2262df703b70/Gfo25g3bm8.json',
    //     });

    //     lottie.loadAnimation({
    //         container: lottieTwo.current,
    //         renderer: 'svg',
    //         loop: true,
    //         autoplay: true,
    //         path: 'https://lottie.host/e109d19e-bf4a-4acf-bccc-e5506939e041/CU3ush8jam.json',
    //     });
    // }, []);

    return (
        <section className={styles.content}>
            <div className={styles.boxTitle}>
                <TitleGradient Children={"Boas vindas à Escola Vai na Web"} />
                <p>Um  negócio de impacto social  que atua na capacitação gratuita em tecnologia digital avançada com o objetivo de preparar jovens talentos de favelas e periferias para a economia digital.</p>
            </div>
            <div className={styles.content_boxes}>
                <MoreSchool />
                <div className={styles.box_content}>
                    <h3>Mas, o que é Front-end?</h3>
                    <h4>O front-end é a parte visível e interativa de um site ou aplicativo, tornando a experiência do usuário agradável e funcional. É uma parte crucial do desenvolvimento web.</h4>
                    {/* <div ref={lottieOne} style={{ width: '100%', height: '300px' }} /> */}
                    <p>Um(a) desenvolvedor(a) é responsável por criar a interface  com a qual os usuários interagem diretamente em um site ou aplicativo. Isso inclui:</p>
                    <ul>
                        <li>Layout</li>
                        <li>Design</li>
                        <li>Cores</li>
                        <li>Tipografia</li>
                        <li>Menus</li>
                        <li>Botões</li>
                    </ul>
                    <p>E qualquer outro elemento gráfico, que dê vida às aplicações web.</p>
                    {/* <div ref={lottieTwo} style={{ width: '100%', height: '300px' }} /> */}
                </div>
            </div>
        </section>
    );
}
