"use client";

import { Logo } from "@/components/common/logo";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <main className={styles['homeapge']}>
      <Logo placement="center" bg={false}/>
    </main>
  );
}
