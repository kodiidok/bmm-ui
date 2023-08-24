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
import client from "../../../../graphql-client/graphql-shop-client";
import Scheduler from "@/components/scheduler/Scheduler";
import DateRangeSelector from "@/components/scheduler/DateRangeSelector";

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

// const ARTIST_QUERY = gql`
//   {
//     performer(id: 2) {
//       id
//       name
//       type
//       createdAt
//       updatedAt
//       deletedAt
//       description
//       rating
//     }
//   }
// `;

const useStyles = createStyles((theme) => ({

}));

export default function Page() {
  const router = useRouter();
  const { classes } = useStyles();


  const mobile = useMediaQuery("(max-width: 600px)");
  const slideSize = mobile ? "90%" : "30%";

  const [userId, setUserId] = useState(null);
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  // This useEffect will only run once, during the first render
  useEffect(() => {
    // Updating a state causes a re-render
    setInitialRenderComplete(true);
  }, []);


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
          <Scheduler />
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
