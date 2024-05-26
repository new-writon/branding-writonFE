import ProgressBar from './ProgressBar';
import styles from './ProgressBox.module.css';

export default function ProgressBox() {
  console.log(ProgressBar);
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span className={styles.title}>
          토니님의 라이톤 프로젝트 회고 챌린지
        </span>
        <div className={styles.title_side_box}>D-10</div>
      </div>
      <ProgressBar />
    </div>
  );
}
