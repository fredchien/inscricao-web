import React, { useRef, useEffect } from 'react';
import styles from './info-course.module.css';
import lottie from 'lottie-web';

export default function InfoCourse() {
    const lottieOne = useRef(null);
    const lottieTwo = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: lottieOne.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://lottie.host/ed4c5091-baa8-4c52-8394-2262df703b70/Gfo25g3bm8.json',
        });

        lottie.loadAnimation({
            container: lottieTwo.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://lottie.host/e109d19e-bf4a-4acf-bccc-e5506939e041/CU3ush8jam.json',
        });
    }, []);

    return (
        <section className={styles.content}>
            <h2>Mas, o que é Front-end?</h2>
            <h3>O front-end é a parte visível e interativa de um site ou aplicativo, tornando a experiência do usuário agradável e funcional. É uma parte crucial do desenvolvimento web.</h3>
            <div ref={lottieOne} style={{ width: '100%', height: '300px' }} />
            <p>Um(a) <b>desenvolvedor(a) é responsável por criar a interface</b> com a qual os usuários interagem diretamente em um site ou aplicativo.<br />
                Ou seja, é tudo o que você vê e interage em uma página da web ou em um aplicativo móvel. Isso inclui:</p>
            <ul>
                <li>Layout</li>
                <li>Design</li>
                <li>Cores</li>
                <li>Tipografia</li>
                <li>Menus</li>
                <li>Botões</li>
            </ul>
            <p>E qualquer outro elemento com o qual os usuários possam interagir.</p>
            <div ref={lottieTwo} style={{ width: '100%', height: '300px' }} />
            <p>Os desenvolvedores front-end usam uma combinação de linguagens de marcação (como HTML), estilos (como CSS) e scripts (geralmente JavaScript) para construir a interface do usuário. Garantindo que um design seja responsivo, ou seja, se adapte a diferentes dispositivos e tamanhos de tela, e também que seja acessível e amigável para os usuários.</p>
        </section>
    );
}
