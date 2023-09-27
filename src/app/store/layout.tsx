'use client'

import React from "react";
import styles from '@/styles/store.module.css';
import ContactUs from "@/components/common/contactUs";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles['section']}>
      <Header />

      {/* main content of the page */}
      <div className={styles['layoutContainer']}>
        {children}
      </div>

      <ContactUs
        text="Get in touch"
        line1="We'd love to hear from you."
        line2="Please fill out this form."
      />
      <Footer />
    </section>
  );
}