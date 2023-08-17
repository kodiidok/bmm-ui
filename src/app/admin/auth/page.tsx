"use client"

import { AdminAuthenticationForm } from '@/components/forms/AdminAuthenticationForm'
import styles from '@/app/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <AdminAuthenticationForm></AdminAuthenticationForm>
    </main>
  )
}
