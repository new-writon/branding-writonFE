'use client';

import Image from 'next/image';
import styles from './FunctionIcon.module.css';
import { functionIconDataType } from '@/types';
import { useState } from 'react';

export default function FunctionIcon({
  icon,
  activeFunction,
  setActiveFunction,
}: {
  icon: functionIconDataType;
  activeFunction: string;
  setActiveFunction: (activeFunction: string) => void;
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={styles.container}
      onClick={() => setActiveFunction(icon.text)}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={icon.image}
          alt=""
          className={styles.image}
          style={{ opacity: activeFunction === icon.text ? 0 : 1 }}
        />
        <Image
          src={icon.image_color}
          alt=""
          className={styles.image}
          style={{
            opacity: activeFunction === icon.text ? 1 : isHovered ? 1 : 0,
          }}
        />
      </div>

      <span
        style={{
          color:
            activeFunction === icon.text
              ? 'var(--Main-100, #0f1655)'
              : isHovered
                ? 'var(--Main-100, #0f1655)'
                : ' var(--Gray-50, #b1b4bc)',
        }}
      >
        {icon.text}
      </span>
    </div>
  );
}
