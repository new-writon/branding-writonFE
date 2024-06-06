import styles from '@/styles/common/footer.module.css';
import Image from 'next/image';
import writon_header from '@/public/image/icon/writon_header.svg';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <div className={styles.text_before}>
            <span>이용약관</span>
            <div className={styles.bar}></div>
            <span>개인정보처리방침</span>
            <div className={styles.bar}></div>
          </div>
          <div className={styles.text_after}>
            <span className={styles.contact}>
              <span>Contact.</span>
              <span className={styles.light}>writon.official@gmail.com</span>
            </span>
            <div className={styles.bar}></div>
            <span className={styles.instargram}>
              <a
                href="https://www.instagram.com/writon_official/"
                target="_blank"
              >
                Instagram
              </a>
              <span>→</span>
            </span>
          </div>
        </div>
        <Image
          src={writon_header}
          alt="writon"
          width={74}
          height={18}
          // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>
    </div>
  );
}
