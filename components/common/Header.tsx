'use client';

import styles from '@/styles/common/header.module.css';
import writon_header from '@/public/image/icon/writon_header.svg';
import Image from 'next/image';
import { HeaderStartButton, StartButton } from '../atom/start-button';
import HamburgerButton from '../atom/Hamburger-button';
import { useEffect, useState } from 'react';
export default function Header() {
  const [toggleActive, setToggleActive] = useState<boolean>(false);

  const scrollToSection = (section: string) => {
    setToggleActive(false);
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
  useEffect(() => {
    if (toggleActive) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [toggleActive]);
  return (
    <>
      {' '}
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
            <HamburgerButton
              toggleActive={toggleActive}
              setToggleActive={setToggleActive}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.mobile_view} ${toggleActive && styles.active}`}>
        <span
          className={styles.text}
          onClick={() => scrollToSection('function_introduce')}
        >
          기능
        </span>
        <span className={styles.text} onClick={() => scrollToSection('FAQ')}>
          FAQ
        </span>
        <StartButton backgroundColor="purple" />
      </div>
    </>
  );
}
