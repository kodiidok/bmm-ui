"use client";

import { Logo } from "@/components/common/logo";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/common/footer";
import Searchbar from "@/components/searchbar";
import Button from "@/components/button/button";
import ContactUs from "@/components/common/contactUs";
import styles from "@/styles/admin.module.scss";
import { Carousel } from "@mantine/carousel";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardsCarousel } from "@/components/widgets/carousel";
import { CarouselEvent } from "@/components/carousel/carouselEvent";
import { createStyles, getStylesRef, rem } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@uidotdev/usehooks";
import Shell from "@/components/shell/shell";

export default function Page() {
  const router = useRouter();

  const mobile = useMediaQuery("(max-width: 600px)");
  const slideSize = mobile ? "90%" : "30%";

  return (
    <main className={styles.main}>
      <div
        style={{
          marginBottom: rem(30),
          width: "100%",
        }}
      >
        <Logo placement="center" bg={true} />
      </div>
      <Navbar
        items={[
          "dashboard",
          "calendar",
          "sales",
          "inquiries",
          "managers",
          "performers",
          "settings",
        ]}
      />
      <div className={styles.searchSection}>
        <Searchbar />
        <Button
          size={1}
          text="Sign in"
          onClick={() => router.push("/store/auth")}
          type="primary"
        ></Button>
      </div>
      <div
        className={styles.container}
        style={{ padding: mobile ? "30px" : "30px" }}
      >
        <div
          style={{
            width: "90%",
            alignSelf: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
              height: "35px",
              paddingBottom: "1rem",
            }}
          >
            <h2 style={{ margin: 0, alignSelf: "center", color: "#495057" }}>
              Dashboard
            </h2>
            <Button size={1.1} text="Add Widget" type="secondary" />
          </div>
          {/* add widgets inside this div */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              paddingBottom: "50px",
              paddingTop: "30px",
            }}
          >
            <div>
              <p>Widget Name</p>
              <div
                style={{
                  backgroundColor: "#F8F9FA",
                  width: "100%",
                  height: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  color: "#CED4DA",
                }}
              >
                Dashbord Widget
              </div>
            </div>
            <div>
              <p>Widget Name</p>
              <div
                style={{
                  backgroundColor: "#F8F9FA",
                  width: "100%",
                  height: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  color: "#CED4DA",
                }}
              >
                Dashbord Widget
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ContactUs
        text="Get in touch"
        line1="We'd love to hear from you."
        line2="Please fill out this form."
      /> */}
      <Footer />
    </main>
  );
}
