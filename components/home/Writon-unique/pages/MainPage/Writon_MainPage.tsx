'use client';

import CalendarBox from '../../components/MainPage/CalendarBox/CalendarBox';
import FloatingButton from '../../components/MainPage/FloatingButton/FloatingButton';
import ProgressBox from '../../components/MainPage/ProgressBox/ProgressBox';
import RetrospectBox from '../../components/MainPage/RetrospectBox/RetrospectBox';
import styles from './Writon_MainPage.module.css';
import { motion } from 'framer-motion';

export default function Writon_MainPage() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, transform: 'translateY(50px)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
      transition={{ duration: 1, ease: 'easeIn' }}
    >
      <div className={styles.header}>
        <div>
          <span>내 챌린지</span>
        </div>
        <div>
          <span>커뮤니티</span>
        </div>
      </div>
      <div className={styles.inner}>
        <ProgressBox />
        <CalendarBox />
        <RetrospectBox />
      </div>
      <FloatingButton />
    </motion.div>
  );
}
