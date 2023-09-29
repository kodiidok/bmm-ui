"use client";
import styles from "@/styles/page.module.css";
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { TicketCard } from "@/components/carousel/ticketCard";
import EventTickets from "@/components/forms/eventTickets";
import EventTable from "@/components/table/eventTable";
import { CardsCarousel } from "@/components/carousel/cardsCarousel";
import { FeaturesCard } from "@/components/carousel/card";

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
 


  const images3 = 'https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg';
  


  return (
    <main className={styles.container}>
     {/* <TicketCard title="ranghala" text="Front Row Premium Ticket" price="5000 RS" seatAvailability="17 tickets Remaining"/> */}
      <CardsCarousel/>
      <FeaturesCard image={images3} title={title} rating={rating}/>
     {/* <Container size="md" style={{ marginTop: '2rem' }}>
      <MusicPlayer src="your-music-file.mp3" />
    </Container> */}
     
    </main>
  )
}
