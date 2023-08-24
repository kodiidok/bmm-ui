"use client";

import { Logo } from "@/components/common/logo";
import Navbar, { NavbarItemProps } from "@/components/navbar/navbar";
import Footer from "@/components/common/footer";
import Searchbar from "@/components/input/searchbar";
import Button from "@/components/button/button";
import ContactUs from "@/components/common/contactUs";
import styles from "@/styles/store.module.scss";
import { Carousel } from "@mantine/carousel";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardsCarousel } from "@/components/carousel/carousel";
import { CarouselEvent } from "@/components/carousel/carouselEvent";
import { createStyles, getStylesRef, rem } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@uidotdev/usehooks";

import { useState, useEffect } from "react";

import { useMutation, gql, useQuery } from "@apollo/client";
import client from "../../../graphql-client/graphql-shop-client";

// const LOGIN_MUTATION = gql`
//     mutation Login($username: String!, $password: String!, $rememberMe: Boolean!) {
//         login(username: $username, password: $password, rememberMe: $rememberMe) {
//             ... on CurrentUser {
//                 id
//             }
//             __typename
//         }
//     }
// `;

const ARTIST_QUERY = gql`
  {
    performer(id: 2) {
      id
      name
      type
      createdAt
      updatedAt
      deletedAt
      description
      rating
    }
  }
`;

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

  const [userId, setUserId] = useState(null);
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  // This useEffect will only run once, during the first render
  useEffect(() => {
    // Updating a state causes a re-render
    setInitialRenderComplete(true);
  }, []);

  const { loading, error, data } = useQuery(ARTIST_QUERY, { client });

  const baseUrl = "/store";
  const navbarItems: NavbarItemProps[] = [
    {
      text: "dashboard",
      href: baseUrl,
    },
    {
      text: "artists",
      href: `${baseUrl}/artists`,
    },
    {
      text: "bands",
      href: `${baseUrl}/bands`,
    },
    {
      text: "events",
      href: `${baseUrl}/events`,
    },
    {
      text: "settings",
      href: `${baseUrl}/settings`,
    },
  ];

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
      <Navbar items={navbarItems} />
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
                width: "100%",
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
