'use client';

import { functionSectionDataType, functionSectionStateDataType } from '@/types';
import styles from './FunctionSection.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const imageFunctionSectionStyle = {
  maxWidth: '1248px !important',
  width: '100% !important',
  height: 'auto !important',
};
const imageEtcIconStyle = {
  width: 'auto !important',
  height: '20% !important',
};
const imageFireIconStyle = {
  width: 'auto !important',
  height: '12% !important',
};

export default function FunctionSection({
  sectionData,
  sectionStates,
}: {
  sectionData: functionSectionDataType;
  sectionStates: functionSectionStateDataType[];
}) {
  const [active, setActive] = useState<number>(0);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setActive((prevActive) => (prevActive === 0 ? 1 : 0));
      },
      sectionData?.etc_image ? 5000 : 3500,
    );
    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    if (active === 1) {
      setTimeout(() => {
        sectionData?.etc_image?.forEach((_, idx) => {
          setTimeout(() => {
            setVisibleImages((prevVisibleImages) => {
              const newVisibleImages = [...prevVisibleImages];
              newVisibleImages[idx] = true;
              return newVisibleImages;
            });
          }, idx * 500); // 0.5초 간격으로 이미지 표시
        });
      }, 500);
    } else {
      setVisibleImages([]);
    }
  }, [active, sectionData]);

  return (
    <div
      className={`${styles.container} ${sectionData.name === '회고 작성' ? styles.retrospect : sectionData.name === '챌린지' ? styles.challenge : sectionData.name === '커뮤니티' ? styles.community : styles.smalltalk}`}
    >
      <span className={styles.title}>{sectionData.text}</span>
      {sectionData.image.map((image, idx) => (
        <Image
          key={idx}
          src={image}
          alt={sectionData.name}
          className={`${styles.image} ${sectionData.name === '챌린지' && styles.bottom} ${active === idx && styles.active} ${sectionData.image.length === 2 && idx === 0 && styles.first_image} ${sectionData.image.length === 2 && idx === 1 && styles.second_image}`}
          style={imageFunctionSectionStyle}
          width={1248}
          height={839}
          priority={true}
          quality={100}
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
        />
      ))}
      <div
        className={`${styles.etc_icon_container} ${active === 1 && styles.view_active}`}
      >
        {sectionData?.etc_image?.map((image, idx) => (
          <Image
            key={idx}
            src={image}
            alt={sectionData.name}
            className={`${styles.etc_image} ${idx > 2 ? styles.imageFireIconStyle : styles.imageEtcIconStyle} ${visibleImages[idx] && styles.active}`}
            style={idx > 2 ? imageFireIconStyle : imageEtcIconStyle}
            width={1248}
            height={839}
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          />
        ))}
      </div>
    </div>
  );
}
