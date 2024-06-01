import Writon_MainPage from '@/components/home/Writon-unique/pages/MainPage/Writon_MainPage';
import styles from './home.module.css';
import MainTitle from '@/components/home/MainTitle/MainTitle';
import WritonFunctionIntroduce from '@/components/home/WritonFunctionIntroduce/WritonFunctionIntroduce';
import WritonInvite from '@/components/home/WritonInvite/WritonInvite';
import WritonUse from '@/components/home/WritonUse/WritonUse';
import WritonRecommend from '@/components/home/WritonRecommend/WritonRecommend';

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
      <section className={styles.third_section}>
        <section className={styles.third_white_section}>
          <WritonInvite />
        </section>
      </section>
      <section className={styles.forth_section}>
        <WritonUse />
      </section>
      <section className={styles.fifth_section}>
        <WritonRecommend />
      </section>
    </div>
  );
}
