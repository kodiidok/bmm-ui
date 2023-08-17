"use client"

import { ShopAuthenticationForm } from '@/components/forms/ShopAuthenticationForm'
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <ShopAuthenticationForm></ShopAuthenticationForm>
    </main>
  )
}
