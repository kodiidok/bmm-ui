"use client";

import styles from "@/styles/store.module.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeaturedArtists from "@/components/artist/featuredArtists";
import FeaturedBands from "@/components/band/featuredBands";
import FeaturedEvents from "@/components/event/featuredEvents";

export default function Page() {

  return (
    <main className={styles["main"]}>
      <div className={styles["container"]}>
        <FeaturedArtists />
        <FeaturedBands />
        <FeaturedEvents />
      </div>
    </main>
  );
}
