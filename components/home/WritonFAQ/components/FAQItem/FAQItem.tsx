'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './FAQItem.module.css';
import arrow from '@/public/image/mainPage/icon-calendar-arrow.svg';
import Image from 'next/image';
import { writonFAQDataType } from '@/types';

export default function FAQItem({ data }: { data: writonFAQDataType }) {
  const [fold, setFold] = useState<boolean>(false);

  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (answerRef.current) {
      answerRef.current.style.height = fold
        ? `${answerRef.current.scrollHeight}px`
        : '0px';
    }
  }, [fold]);

  return (
    <div className={`${styles.container} ${fold && styles.active}`}>
      <div className={styles.question} onClick={() => setFold(!fold)}>
        <span className={styles.q}>Q.</span>
        <span className={styles.qeustion_text}>{data.question}</span>
        <Image
          className={`${fold ? styles.open : styles.close}`}
          src={arrow}
          alt="V"
        />
      </div>
      <div ref={answerRef} className={styles.answer}>
        <span className={styles.a}>A.</span>
        <span className={styles.answer_text}>{data.answer}</span>
      </div>
    </div>
  );
}
