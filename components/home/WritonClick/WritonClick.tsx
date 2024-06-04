'use client';

import { StartButton } from '@/components/atom/start-button';
import styles from './WritonClick.module.css';
import Image from 'next/image';

import writon_long from '@/public/image/icon/writon-long.png';
import { useState } from 'react';

const imageWritonLongStyle = {
  width: 'calc(100vw - 100px) !important',
  height: 'calc((360*(100vw - 100px)) / 1628) !important',
};

export default function WritonClick() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className={styles.container_wrapper}>
      <div
        className={`${styles.container} ${isHovered && styles.active}`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div className={styles.title_container}>
          <span className={styles.title}>
            지금 바로
            <br />
            글을 써보세요
          </span>
          <StartButton backgroundColor="white" />
        </div>
        <Image
          src={writon_long}
          alt="writon"
          style={imageWritonLongStyle}
          className={styles.writon_image}
        />
      </div>
    </div>
  );
}
