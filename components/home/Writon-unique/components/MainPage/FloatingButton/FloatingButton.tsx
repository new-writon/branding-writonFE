import Image from 'next/image';
import styles from './FloatingButton.module.css';
import pencil from '@/public/image/mainPage/icon-pencil-white.svg';

export default function FloatingButton() {
  return (
    <div className={styles.container}>
      <span>작성하기</span>
      <Image src={pencil} alt="pencil" />
    </div>
  );
}
