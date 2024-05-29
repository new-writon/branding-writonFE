'use client';

import { useState } from 'react';
import styles from './WritonFunctionIntroduce.module.css';
import CategoryTab from './components/CategoryTab/CategoryTab';

export default function WritonFunctionIntroduce() {
  const [activeFunction, setActiveFunction] = useState<string>('회고 작성');
  return (
    <div className={styles.container}>
      <p className={styles.title}>라이톤이 제공하는 기능</p>
      <CategoryTab
        activeFunction={activeFunction}
        setActiveFunction={setActiveFunction}
      />
    </div>
  );
}
