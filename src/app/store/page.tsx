"use client";

import styles from "@/styles/store.module.scss";
import React  from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeaturedArtists from "@/components/artist/featuredArtists";
import FeaturedBands from "@/components/band/featuredBands";
import FeaturedEvents from "@/components/event/featuredEvents";

export default function Page() {

  return (
    <main className={styles["main"]}>
      <div className={styles["container"]}>

        {/* <div>
        "Discover the Stars of Sound: Explore our handpicked selection of Featured Artists, Top Bands, and Must-Attend Events on our homepage. From chart-toppers to emerging talents, we've curated a musical universe for you to explore and book. Whether you're seeking the perfect performer for your event or looking for the hottest gig in town, our homepage is your gateway to the world of music and entertainment. Join us in celebrating the power of live music!"
        </div> */}

        <FeaturedArtists />
        <FeaturedBands />
        <FeaturedEvents />
      </div>
    </main>
  );
}
