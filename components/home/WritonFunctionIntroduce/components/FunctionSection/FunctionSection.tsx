import { functionSectionDataType, functionSectionStateDataType } from '@/types';
import styles from './FunctionSection.module.css';
import Image from 'next/image';

export default function FunctionSection({
  sectionData,
  sectionStates,
}: {
  sectionData: functionSectionDataType;
  sectionStates: functionSectionStateDataType[];
}) {
  return (
    <div
      className={`${sectionStates.find((item) => item.name === sectionData.name)?.state && styles.active} ${styles.container} ${sectionData.name === '회고 작성' ? styles.retrospect : sectionData.name === '챌린지' ? styles.challenge : sectionData.name === '커뮤니티' ? styles.community : styles.smalltalk}`}
    >
      <span className={styles.title}>{sectionData.text}</span>
      <Image
        src={sectionData.image[0]}
        alt={sectionData.name}
        className={styles.image}
        layout="fill"
        quality={100}
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
      />
    </div>
  );
}
