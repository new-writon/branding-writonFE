import styles from './MainTitle.module.css';
import { StartButton } from '@/components/atom/start-button';

export default function MainTitle() {
  return (
    <div className={styles.container}>
      <span className={styles.main_text}>글과 회고로 함께 성장하는 공간</span>
      <span className={styles.sub_text}>
        라이톤에서 팀 회고를 작성하고 관리하세요.
        <br />
        그리고 팀에 맞춤화 된 프라이빗한 공간을 누리세요.
      </span>
      <StartButton backgroundColor="purple" />
    </div>
  );
}
