'use client';

import styles from './RetrospectBox.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useCallback, useRef } from 'react';
import { RetrospectData } from './RetrospectData';
import arrow from '@/public/image/mainPage/icon-retrospect-arrow.svg';
import Image from 'next/image';
import RetrospectItem from './RetrospectItem';

export default function RetrospectBox() {
  const slickRef = useRef<Slider | null>(null);

  const SLIDER_SETTINGS = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1200,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 405,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1.95,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const previous = useCallback(() => slickRef.current?.slickPrev(), []);
  const next = useCallback(() => slickRef.current?.slickNext(), []);

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span className={styles.title}>나의 회고 모아보기</span>
        <span className={styles.retrospect_number}>
          {RetrospectData.length}개
        </span>
      </div>
      <div className={styles.retrospect_box}>
        <button className={styles.arrow_button} onClick={previous}>
          <Image className={styles.arrow_previous} src={arrow} alt="<" />
        </button>
        <Slider className={styles.slider} {...SLIDER_SETTINGS} ref={slickRef}>
          {RetrospectData.map((data, idx) => (
            <React.Fragment key={idx}>
              <RetrospectItem data={data} />
            </React.Fragment>
          ))}
        </Slider>
        <button className={styles.arrow_button} onClick={next}>
          <Image className={styles.arrow_next} src={arrow} alt=">" />
        </button>
      </div>
      <div className={styles.retrospect_responsive_box}>
        {RetrospectData.map((data, idx) => (
          <React.Fragment key={idx}>
            <RetrospectItem data={data} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
