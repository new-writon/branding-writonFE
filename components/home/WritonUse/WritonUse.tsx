'use client';

import { useState } from 'react';
import styles from './WritonUse.module.css';

import image_desktop from '@/public/image/mainPage/use-type/image-desktop-use.png';
import image_mobile from '@/public/image/mainPage/use-type/image-mobile-use.png';
import Image from 'next/image';

const imageDesktopStyle = {
  width: 'calc(743 / 1080 * 100vh) !important',
  height: 'calc(557 / 1080 * 100vh) !important',
  borderRadius: 'calc(36 / 980 * 100vh) !important',
};
const imageMobileStyle = {
  width: 'calc(219 / 1080 * 100vh) !important',
  height: 'calc(474 / 1080 * 100vh) !important',
  borderRadius: 'calc(30 / 980 * 100vh) !important',
};

export default function WritonUse() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={`${styles.container} ${active && styles.active}`}>
      <p className={styles.title}>PC와 모바일에서 모두 사용할 수 있어요</p>
      <button onClick={() => setActive(!active)}>이벤트</button>
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
