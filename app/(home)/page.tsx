import Writon_MainPage from '@/components/home/Writon-unique/pages/MainPage/Writon_MainPage';
import styles from './home.module.css';
import MainTitle from '@/components/home/MainTitle/MainTitle';
import WritonFunctionIntroduce from '@/components/home/WritonFunctionIntroduce/WritonFunctionIntroduce';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.first_section}>
        <MainTitle />
        <Writon_MainPage />
      </section>
      <section className={styles.second_section}>
        <section className={styles.second_white_section}>
          <WritonFunctionIntroduce />
        </section>
      </section>
    </div>
  );
}
