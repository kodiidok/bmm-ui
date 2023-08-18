"use client"

import { AdminAuthenticationForm } from '@/components/forms/AdminAuthenticationForm'
import styles from '@/styles/page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <AdminAuthenticationForm></AdminAuthenticationForm>
    </main>
  )
}
