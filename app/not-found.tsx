'use client'

import styles from '@/styles/not-found.module.css'

export default function Notfound() {
  return (
    <div className={styles.container}>
      <p>해당페이지를 찾을 수 없어요.</p>
      <button className={styles.button} onClick={() => window.history.back()}>
        돌아가기
      </button>
    </div>
  )
}
