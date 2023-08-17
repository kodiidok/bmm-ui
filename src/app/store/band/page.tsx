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
import { Group, Text } from "@mantine/core";
import { IconStar, IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import ArtistNavbar from "./NavBar";
import IconButton from "@/components/IconButton";
import CalendarNotification from '@/components/Calendar';
import EventTable from "@/components/EventTable";

// import { useEffect, useState } from 'react';

export default function Page() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:3333/hello')
  //     .then((response) => response.text())
  //     .then((data) => setMessage(data));
  // }, []);


  const images = ['https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg'];
  // Your array of image URLs
  const title = 'daddy';
  const rating = '4.8';
  const description = 'Relax, rejuvenate and unplug...';
  const price = '397$';


  const images2 = ['https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg'];



  const images3 = ['https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg'];

  const dates = ["Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5"];
  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
  const notifications = [
    ["Meeting", "", "Lunch", ""],
    ["", "Conference Call", "", ""],
    ["", "", "Coffee Break", "Project Review"],
    ["", "Training", "", ""],
  ];

  return (
    <main className={styles.container}>
      <Logo text="bookmymusic" />
      <Navbar />
      <div className={styles.searchSection}>
        <Searchbar />
        <Button size={1} text="Sign in" />
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "2rem" }}>

        </div>

      </div>



      <div style={{width:"80%"}}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
          <div>
            <h2>Infinity</h2>

          </div>

          <Group spacing={5}>


            <Text fz="xs" fw={500}>
              4.6
            </Text><IconStar size="1rem" />

          </Group>



          <ArtistNavbar />
          <div style={{ marginTop: "3rem" }}>
            <IconButton text="Book Infinity" size={2} icon={<IconBookmarkFilled />} />

          </div>

        </div>
        <div style={{ textAlign: "center", justifyContent: "center", padding: "3rem 7rem" }}><p>Meet the sensational Infinity, an electrifying band who sets the stage ablaze with their magnetic presence and soulful melodies. With a passion for music that knows no bounds,
          they effortlessly weaves stories of love, life and everything in between through their enchanting voice and skill ful instrumentation.
        </p>
          <p>Drawing inspiration from a diverse range of genres, Infinity crafts a unique sound that captivates audiences worldwide. From intimate acoustic performances
            to high-energy anthems, their music strikes a chord with listeners, leaving them craving more. Get ready to groove to the rhythm of Infinity's musical genius!
          </p>





        </div>
        <div style={{ textAlign: "center", justifyContent: "center", padding: "3rem 7rem" }}>
          <div style={{ textAlign: "center", justifyContent: "center", padding: "3rem 7rem" }}>
            <h4 style={{ marginTop: "5rem" }}>Artist Availability</h4></div>
          <CalendarNotification dates={dates} times={times} notifications={notifications} /></div>

        <div style={{ textAlign: "center", justifyContent: "center", padding: "3rem 7rem" }}>
          <div style={{ textAlign: "center", justifyContent: "center", padding: "3rem 7rem" }}>
            <h4 style={{ marginTop: "5rem" }}>Latest Tunes</h4>
            </div>
        </div>
        <div style={{ textAlign: "center", justifyContent: "center", padding: "3rem 3rem" }}>
          <div style={{ textAlign: "center", justifyContent: "center", padding: "3rem 3rem" }}>
            <h4 style={{ marginTop: "5rem",marginBottom: "3rem" }}>Upcoming Events</h4>
            <EventTable /></div></div>
      </div>



      <div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "2rem" }}>
        </div>

      </div>
      <ContactUs text="Get in touch" line1="We'd love to hear from you." line2="Please fill out this form." />

      <Footer />
    </main>
  )
}
