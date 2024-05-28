import { retrospectType } from '@/types';
import styles from './RetrospectItem.module.css';

export default function RetrospectItem({ data }: { data: retrospectType }) {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span className={styles.title_date}>{data.date}</span>
        {data.special && (
          <span className={styles.special_flag}>스페셜 질문</span>
        )}
      </div>
      <div className={styles.preview_container}>
        {data.preview?.map((item, idx) => {
          return (
            <div className={styles.preview_item} key={idx}>
              <div className={styles.question}>{item?.question}</div>
              <div className={styles.content}>{item?.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
