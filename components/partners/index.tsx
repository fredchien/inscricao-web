import React, { useState, useEffect } from 'react';
import styles from './paterns.module.css';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imageParterBTg from '../../assets/btg.png';

export default function Paterns() {
  const [slidesToShow, setSlidesToShow] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(12);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(6);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Use the dynamic value here
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 205,
    // beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <section className={styles.content}>
      <h2>Alguns de nossos alunos agora são</h2>
        <Slider {...settings}>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
              style={{width: "6rem"}}
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
          <div className={styles.boxSlide}>
            <Image
              className={styles.imgCarousel}
              src={imageParterBTg}
              alt="partern-bg"
              layout="responsive"
            />
          </div>
        </Slider>
    </section>
  );
}
