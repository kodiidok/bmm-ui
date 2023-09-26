"use client";

import Footer from "@/components/common/footer";
import ContactUs from "@/components/common/contactUs";
import styles from "@/styles/store.module.scss";
import { Carousel } from "@mantine/carousel";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardsCarousel } from "@/components/carousel/carousel";
import { CarouselEvent } from "@/components/carousel/carouselEvent";
import { createStyles, getStylesRef, rem } from "@mantine/core";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useMutation, gql, useQuery } from "@apollo/client";
import client from "../../../graphql-client/graphql-shop-client";

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
  const mobile = useMediaQuery("(max-width: 600px)");
  const slideSize = mobile ? "90%" : "30%";
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  const { loading, error, data } = useQuery(ARTIST_QUERY, { client });

  return (
    <main className={styles['main']}>
      <div
        className={styles['container']}
      >
        {/* <div
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
        </div> */}

        {/* <div
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
        </div> */}

        {/* <div
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
              loop={true}
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
        </div> */}
      </div>
    </main>
  );
}
