"use client";

import { Logo } from "@/components/logo/Logo";
import styles from "@/styles/page.module.scss";

export default function Home() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        height: "1000px"
      }}
    >
      <Logo placement="center" bg={false}/>
    </main>
  );
}
