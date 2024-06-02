'use client';

import styles from '@/styles/common/header.module.css';
import writon_header from '@/public/image/icon/writon_header.svg';
import Image from 'next/image';
import { HeaderStartButton } from '../atom/start-button';
export default function Header() {
  const scrollToSection = (section: string) => {
    if (section === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (section === 'function_introduce') {
      const element = document.getElementById(
        'writon_unique',
      ) as HTMLDivElement;
      window.scrollTo({ top: element.clientHeight + 80, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(section) as HTMLDivElement;
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header_left}>
          <Image
            className={styles.writon_logo}
            src={writon_header}
            alt="Writon"
            onClick={() => scrollToSection('top')}
          />
          <div className={styles.text_group}>
            <span onClick={() => scrollToSection('function_introduce')}>
              기능
            </span>
            <span onClick={() => scrollToSection('FAQ')}>FAQ</span>
          </div>
        </div>
        <div className={styles.header_right}>
          <HeaderStartButton />
        </div>
      </div>
    </div>
  );
}
