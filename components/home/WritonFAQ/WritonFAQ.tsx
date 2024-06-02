import styles from './WritonFAQ.module.css';

export default function WritonFAQ() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>FAQ</span>
      <div className={styles.faq_list}></div>
    </div>
  );
}
