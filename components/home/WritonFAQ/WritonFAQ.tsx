import React from 'react';
import styles from './WritonFAQ.module.css';
import { WritonFAQDATA } from './WritonFAQData';
import FAQItem from './components/FAQItem/FAQItem';

export default function WritonFAQ() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>FAQ</span>
      <div className={styles.faq_list}>
        {WritonFAQDATA.map((data, idx) => (
          <React.Fragment key={idx}>
            <FAQItem data={data} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
