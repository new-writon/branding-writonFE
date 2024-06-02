import Image from 'next/image';
import styles from './WritonRecommend.module.css';
import { WritonRecommendData } from './WritonRecommendData';

WritonRecommendData;
export default function WritonRecommend() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        라이톤,
        <br />
        이런 분들에게 추천해요
      </p>
      <div className={styles.recommand_container}>
        {WritonRecommendData.map((data) => (
          <div key={data.name} className={styles.recommand_item}>
            <Image
              width={30}
              height={30}
              src={data.image}
              alt={data.name}
              className={
                data.name === 'highfive' ? styles.highfive : styles.talking
              }
            />
            <div className={styles.text_container}>
              <span className={styles.main_title}>{data.main_title}</span>
              <span className={styles.sub_title}>{data.sub_title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
