"use client";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Searchbar from "@/components/searchbar";
import Button from "@/components/button";
import ContactUs from "@/components/contactUs";
import styles from "@/styles/page.module.css";
import { CarouselCard } from "@/components/carousel";
import { CarouselEvent } from "@/components/carouselEvent";
import ThankYouForm from "@/components/forms/RequestResponse";
import GetInTouchForm from "@/components/forms/GetInTouch";
import { FeaturesCard } from "@/components/card";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardCarouselRow from "@/components/CarouselRow";
import { CardsCarousel } from "@/components/widgets/Carousel";

export default function Page() {
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

  return (
    <main className={styles.container}>
      <Logo text="bookmymusic" />
      <Navbar />
      <div className={styles.searchSection}>
        <Searchbar />
        <Button size={1} text="Sign in" />
      </div>
      <div style={{
        width: "800px"
      }}>
        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <h2 className={styles.carouselHeader}>Featured Artists</h2>
            <div style={{ height: "1rem", marginTop: "2rem" }}>
              <Button size={1.2} text="View All Artists" />
            </div>
          </div>
          <CardsCarousel />
        </div>

        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <h2 className={styles.carouselHeader}>Featured Bands</h2>
            <div style={{ height: "1rem", marginTop: "2rem" }}>
              <Button size={1.2} text="View All Bands" />
            </div>
          </div>
          <CardsCarousel />
        </div>

        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <h2 className={styles.carouselHeader}>Featured Events</h2>
            <div style={{ height: "1rem", marginTop: "2rem" }}>
              <Button size={1.2} text="View All Events" />
            </div>
          </div>
          <div className={styles.carouselAlign}>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselEvent
                key={index}
                images={images3}
                title={title}
                rating={rating}
                description={description}
                price={price}
              />
            ))}
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
