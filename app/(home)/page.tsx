import Writon_MainPage from '@/components/home/Writon-unique/pages/MainPage/Writon_MainPage'
import styles from './home.module.css'
import MainTitle from '@/components/home/MainTitle/MainTitle'

export default function Home() {
  return (
    <div className={styles.container}>
      <MainTitle />
      <Writon_MainPage />
    </div>
  )
}
