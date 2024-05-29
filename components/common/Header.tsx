import styles from '@/styles/common/header.module.css'
import writon_header from '@/public/image/icon/writon_header.svg'
import Image from 'next/image'
import { HeaderStartButton } from '../atom/start-button'
export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header_left}>
          <Image
            className={styles.writon_logo}
            src={writon_header}
            alt="Writon"
          />
          <div className={styles.text_group}>
            <span>기능</span>
            <span>FAQ</span>
          </div>
        </div>
        <div className={styles.header_right}>
          <HeaderStartButton />
        </div>
      </div>
    </div>
  )
}
