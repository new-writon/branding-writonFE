import Image from 'next/image';
import ProgressBar from './ProgressBar';
import styles from './ProgressBox.module.css';
import question from '@/public/image/mainPage/icon-question.svg';
export default function ProgressBox() {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span className={styles.title}>
          토니님의 라이톤 프로젝트 회고 챌린지
        </span>
        <div className={styles.title_side_box}>D-10</div>
      </div>
      <ProgressBar />
      <div className={styles.labeling}>
        <div className={styles.label_card}>
          <span className={styles.label_title}>작성한 회고</span>
          <div className={styles.line}></div>
          <div className={styles.label_count}>
            10일
            <span> &nbsp;/ 20일</span>
          </div>
        </div>
        <button className={styles.refund_button}>
          <Image src={question} alt="question" />
          환급 조건
        </button>
      </div>
    </div>
  );
}
