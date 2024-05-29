'use client'

import styles from '@/styles/atom/start-button.module.css'
export function StartButton({ backgroundColor }: { backgroundColor: string }) {
  return (
    <button
      onClick={() => window.open('https://writon.co.kr', '_blank')}
      className={`${styles.button} ${backgroundColor === 'purple' ? styles.purple : styles.white}`}
    >
      시작하기
    </button>
  )
}

export function HeaderStartButton() {
  return (
    <button
      onClick={() => window.open('https://writon.co.kr', '_blank')}
      className={styles.header_button}
    >
      시작하기
    </button>
  )
}
