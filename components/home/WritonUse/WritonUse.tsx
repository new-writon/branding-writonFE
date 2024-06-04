'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './WritonUse.module.css';

import image_desktop from '@/public/image/mainPage/use-type/image-desktop-use.png';
import image_mobile from '@/public/image/mainPage/use-type/image-mobile-use.png';
import Image from 'next/image';

const imageDesktopStyle = {
  width: 'calc(743 / 1080 * 100vh)',
  height: 'calc(557 / 1080 * 100vh)',
  borderRadius: 'calc(36 / 980 * 100vh)',
};
const imageMobileStyle = {
  width: 'calc(219 / 1080 * 100vh)',
  height: 'calc(474 / 1080 * 100vh)',
  borderRadius: 'calc(30 / 980 * 100vh)',
};

export default function WritonUse() {
  const [active, setActive] = useState<boolean>(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        } else if (entry.boundingClientRect.top > 0) {
          setActive(false); // 요소가 화면 위로 올라가면 active 해제
        }
      },
      {
        threshold: 0.4, // 요소가 50% 이상 보이면 콜백 함수 실행
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.container} ${active && styles.active}`}
    >
      <p className={styles.title}>PC와 모바일에서 모두 사용할 수 있어요</p>
      <Image
        src={image_desktop}
        alt="desktop"
        style={imageDesktopStyle}
        quality={100}
        className={styles.image_desktop}
      />
      <Image
        src={image_mobile}
        alt="mobile"
        style={imageMobileStyle}
        quality={100}
        className={styles.image_mobile}
      />
    </div>
  );
}
