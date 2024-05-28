import styles from './RenderDays.module.css';

export const RenderDays = () => {
  const days = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <div className={styles.container}>
      {days.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </div>
  );
};
