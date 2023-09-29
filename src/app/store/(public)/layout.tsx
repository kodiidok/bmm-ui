'use client'

import React from "react";
import styles from '@/styles/store.module.css';
import ContactUs from "@/components/common/contactUs";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Hero from "@/components/common/hero";
import { ActiveCustomerProvider } from "@/components/providers/activeCustomerProvider";
import { StoreProvider } from "@/components/providers/storeProvider";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <StoreProvider
      children={
        <section className={styles['section']}>
          <Header />
          <Hero />

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
      }
    />
  );
}