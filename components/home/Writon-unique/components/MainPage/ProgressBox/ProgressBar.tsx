'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ProgressBar.module.css';
import { AnimatedLineProgressBar } from '@frogress/line';
import Image from 'next/image';
import flag from '@/public/image/mainPage/icon-flag_blue.svg';
export default function ProgressBar() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(1028);
  const [active, setActive] = useState<boolean>(false);

  const handleResize = () => {
    setWidth(progressRef?.current?.offsetWidth || 0);
  };
  useEffect(() => {
    setActive(false);
    setTimeout(() => {
      setActive(true);
    }, 2100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); //clean
  }, [width]);

  return (
    <div className={styles.container} ref={progressRef}>
      <AnimatedLineProgressBar
        percent={50}
        className={styles.progress_bar}
        rounded={11}
        height={11}
        width={progressRef?.current?.offsetWidth}
        transition={{ easing: 'easeInOut', duration: 2 }}
        direction="right"
        progressColor="#EDEEF1"
        containerColor="linear-gradient(180deg, #6272FF 0%, #8785FF 100%)"
      />
      <div className={active ? styles.active : styles.not_active}>
        <div className={styles.round_border}></div>
        <div className={styles.round}></div>
        <div className={styles.message}>
          <span>10일 회고 성공! 대단해요 🔥</span>
          <div className={styles.arrow}></div>
        </div>
        <div className={styles.date}>
          10일 <span>/ 20일</span>
        </div>
      </div>
      <div className={styles.end_date}>20일</div>
      <Image src={flag} alt="깃발" className={styles.flag} />
    </div>
  );
}
