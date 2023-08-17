"use client";

import Footer from "@/components/footer";
import { ShopAuthenticationForm } from "@/components/forms/ShopAuthenticationForm";
import { Logo } from "@/components/logo/Logo";
import styles from "@/styles/page.module.scss";

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: "1058px",
      }}
    >
      <div>
        <Logo placement="center" bg={true} />
      </div>
      <main className={styles.main}>
        <ShopAuthenticationForm></ShopAuthenticationForm>
      </main>
      <Footer />
    </div>
  );
}
