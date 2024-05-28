import CalendarBox from '../../components/MainPage/CalendarBox/CalendarBox';
import ProgressBox from '../../components/MainPage/ProgressBox/ProgressBox';
import styles from './Writon_MainPage.module.css';

export default function Writon_MainPage() {
  return (
    <div className={styles.container}>
      <ProgressBox />
      <CalendarBox />
    </div>
  );
}
