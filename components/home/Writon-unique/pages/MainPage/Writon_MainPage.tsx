import CalendarBox from '../../components/MainPage/CalendarBox/CalendarBox';
import ProgressBox from '../../components/MainPage/ProgressBox/ProgressBox';
import RetrospectBox from '../../components/MainPage/RetrospectBox/RetrospectBox';
import styles from './Writon_MainPage.module.css';

export default function Writon_MainPage() {
  return (
    <div className={styles.container}>
      <ProgressBox />
      <CalendarBox />
      <RetrospectBox />
    </div>
  );
}
