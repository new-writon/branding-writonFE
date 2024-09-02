'use client';

import {
  differenceInCalendarWeeks,
  format,
  getDay,
  startOfMonth,
} from 'date-fns';
import Image from 'next/image';
import question from '@/public/image/mainPage/icon-question.svg';
import arrow from '@/public/image/mainPage/icon-calendar-arrow.svg';
import calendar from '@/public/image/mainPage/icon-calendar.svg';
import styles from './CalendarBox.module.css';
import { useState } from 'react';
import { RenderDays } from './RenderDays';
import RenderCell from './RenderCell';

export default function CalendarBox() {
  const today = new Date();
  const monthStart = startOfMonth(today);

  const weekNumber =
    getDay(today) === 0
      ? differenceInCalendarWeeks(today, monthStart) + 1
      : differenceInCalendarWeeks(today, monthStart) + 2;
  const [fold, setFold] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.calendar_header}>
        <div className={styles.calendar_header_left}>
          <span>
            {format(today, 'M')}월 {weekNumber}주차 도전중
          </span>
          <button>
            <Image src={question} alt="question" />
            <span>챌린지 방법</span>
          </button>
        </div>
        <div className={styles.calendar_header_right}>
          <button
            className={styles.calendar_button}
            onClick={() => setFold(!fold)}
          >
            <span> {fold ? '달력 접기' : '달력 펼치기'}</span>
            <Image className={styles.calendar_icon} src={calendar} alt="달력" />
            <Image
              className={`${fold ? styles.open : styles.close}`}
              src={arrow}
              alt="V"
            />
          </button>
        </div>
      </div>
      <RenderDays />
      <RenderCell fold={fold} />
    </div>
  );
}
