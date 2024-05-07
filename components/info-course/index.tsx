import React, { useEffect, useRef } from 'react';
import styles from './info-course.module.css';
import lottie from 'lottie-web';

export default function infoCourse() {
    const container = useRef(null);

    useEffect(() => {
        if (container.current) {
            const anim = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'https://lottie.host/effcbc96-46fe-4f99-a8f8-1e2e191018f5/Efcmbv6JHV.json',
            });

            return () => anim.destroy();
        }
    }, []);

    return (
        <section className={styles.content}>
            <div ref={container} style={{ width: '100%', maxWidth: '130px' }} />
            <h2>Mas, o que é Front-end?</h2>
            <h3>Basicamente, é a face visível de uma aplicação web, onde os usuários interagem diretamente. Aqui, mergulharemos em HTML, CSS e JavaScript para criar interfaces impressionantes e interativas que cativam e engajam os usuários.</h3>
            <p>
                É uma parte crucial do desenvolvimento web, um(a) desenvolvedor(a) é responsável por criar a interface com a qual os usuários interagem diretamente em um site ou aplicativo. Ou seja, é tudo o que você vê e interage em uma página da web ou em um aplicativo móvel. Isso inclui o layout, design, cores, tipografia, menus, botões e qualquer outro elemento com o qual os usuários possam interagir.
                <br />
                <br />
                Os desenvolvedores front-end usam uma combinação de linguagens de marcação (como HTML), estilos (como CSS) e scripts (geralmente JavaScript) para construir a interface do usuário. Garantindo que um design seja responsivo, ou seja, se adapte a diferentes dispositivos e tamanhos de tela, e também que seja acessível e amigável para os usuários.
            </p>
        </section>
    );
}
