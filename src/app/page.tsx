"use client";

import Shell from "@/components/shell/Shell";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <main
      className={styles.main}
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <Shell children={<p>Welcome to bookmymusic</p>} />
    </main>
  );
}
