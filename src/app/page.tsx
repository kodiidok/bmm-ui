import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Welcome to bookmymusic</h1>
        <p style={{ maxWidth: 600 }}>Best selling events</p>
      </div>
    </main>
  )
}
