"use client";

import { Logo } from "@/components/logo/Logo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Searchbar from "@/components/searchbar";
import Button from "@/components/button";
import ContactUs from "@/components/contactUs";
import styles from "@/styles/store.module.scss";
import { Carousel } from "@mantine/carousel";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardsCarousel } from "@/components/widgets/Carousel";
import { CarouselEvent } from "@/components/carousel/CarouselEvent";
import { createStyles, getStylesRef, rem } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@uidotdev/usehooks";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },
}));

export default function Page() {
  const router = useRouter();
  const { classes } = useStyles();

  const images = [
    "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg",
  ];
  // Your array of image URLs
  const title = "daddy";
  const rating = "4.8";
  const description = "Relax, rejuvenate and unplug...";
  const price = "397$";

  const images2 = [
    "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg",
  ];

  const images3 = [
    "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg",
  ];

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
      <Navbar />
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
              Featured Artists
            </h2>
            <Button size={1.1} text="View All" type="secondary" />
          </div>
          <CardsCarousel />
        </div>

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
              Featured Bands
            </h2>
            <Button size={1.1} text="View All" type="secondary" />
          </div>
          <CardsCarousel />
        </div>

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
              Featured Events
            </h2>
            <Button size={1.1} text="View All" type="secondary" />
          </div>
          <div className={styles.carouselAlign}>
            <Carousel
              withIndicators
              loop
              classNames={{
                root: classes.carousel,
                controls: classes.carouselControls,
                indicator: classes.carouselIndicator,
              }}
              align="start"
              slideGap={rem(10)}
              slideSize={slideSize}
              style={{
                width: "100%"
              }}
            >
              {Array.from({ length: 4 }).map((_, index) => (
                <Carousel.Slide key={index}>
                  <CarouselEvent
                    key={index}
                    images={images3}
                    title={title}
                    rating={rating}
                    description={description}
                    price={price}
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <ContactUs
        text="Get in touch"
        line1="We'd love to hear from you."
        line2="Please fill out this form."
      />
      <Footer />
    </main>
  );
}
