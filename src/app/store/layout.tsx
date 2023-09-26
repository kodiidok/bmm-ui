'use client'

import { Logo } from "@/components/common/logo";
import Navbar from "@/components/navbar/navbar";
import Searchbar from "@/components/input/searchbar";
import Button from "@/components/button/button";
import React from "react";
import { useRouter } from "next/navigation";
import styles from '@/styles/store.module.css';
import { defaultNavbarItems } from "@/components/navbar/navbarItems";
import ContactUs from "@/components/common/contactUs";
import Footer from "@/components/common/footer";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const router = useRouter();

  return (
    <section className={styles['section']}>
      {/* header area */}
      <div className={styles['logo']}>
        <Logo placement="center" bg={true} />
      </div>
      <div className={styles['headerLayout']}>
        <Navbar items={defaultNavbarItems} />
        <div className={styles['searchSection']}>
          <Searchbar />
          <Button
            size={1}
            text="Sign in"
            onClick={() => router.push("/store/auth")}
            type="primary"
          ></Button>
        </div>
      </div>

      {/* main content of the page */}
      <div className={styles['layoutContainer']}>
        {children}
      </div>

      {/* footer area */}
      <ContactUs
        text="Get in touch"
        line1="We'd love to hear from you."
        line2="Please fill out this form."
      />
      <Footer />
    </section>
  );
}