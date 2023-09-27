"use client"

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  Group,
  Text,
  Image,
  Card,
  rem,
} from "@mantine/core";
import { IconCalendarEvent, IconClock2, IconTicket } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/carousel.module.css";

const imgUrl =
  "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg";

export interface CardProps {
  image: string;
  title: string;
  id: string;
  date: string;
  time: string;
}

export interface CarouselProps {
  data: any;
}

function Cardsdgf({ image, title, date, time, id }: CardProps) {

  const router = useRouter();

  return (
    <Card radius="md" className={styles['card']} onClick={() => router.push(`/store/artists/${id}`)}>

      <Card.Section className={styles['imageSection']}>
        <Image src={image} height={150} />
      </Card.Section>

      <div className={styles['dateTimeContainer']}>
        <div className={styles['dateTime']}>
          <IconCalendarEvent size={20} />
          {date}
        </div>
        <div className={styles['dateTime']}>
          <IconClock2  size={20} />
          {time}
        </div>
      </div>

      <div className={styles['cardInfo']}>
        <div className={styles['title']}>
          {title}
        </div>
      </div>

      <div className={styles['buyTicket']}>
        <IconTicket />
        Buy Tickets
      </div>
    </Card>
  );
}

export function CardsCarousel({ data }: CarouselProps) {
  const mobile = useMediaQuery("(max-width: 600px)");
  const cardsPerSlide = 6;
  const totalSlides = Math.ceil(data.data?.length / cardsPerSlide);
  const slideSize = mobile ? "90%" : "30%";
  const slides: any = [];

  const [dataItems, setDataItems] = useState<any>(null);

  useEffect(() => {
    if (data.data) {
      setDataItems(data.data);
    }
  }, [data]);

  if (dataItems) {
    for (let slideIndex = 0; slideIndex < totalSlides; slideIndex++) {
      const startIdx = slideIndex * cardsPerSlide;
      const endIdx = Math.min(startIdx + cardsPerSlide, dataItems.length);
      const slideData = dataItems.slice(startIdx, endIdx);
      const mappedData = slideData.map((item: any, itemIndex: number) => {
        const timestamp = item.customFields.dateTime;

        // Create a Date object from the timestamp
        const date = new Date(timestamp);

        // Extract the date in yyyy-mm-dd format
        const formattedDate = date.toISOString().split('T')[0];

        // Extract the time in hh:mm format
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

        // Format the time in "12.30 PM" format
        const hours12 = hours % 12 || 12; // Convert to 12-hour format
        const ampm = hours < 12 ? 'AM' : 'PM';
        const formattedTime12 = `${hours12}.${minutes} ${ampm}`;

        return (
          <Carousel.Slide key={slideIndex}>
            <Cardsdgf key={item.id} id={item.id} title={item.name} image={imgUrl} time={formattedTime12} date={formattedDate} />
          </Carousel.Slide>
        )
      });
      slides.push(mappedData);
    }
  }

  return (
    <div className="" style={{ padding: "0rem" }}>
      <Carousel
        slideSize={slideSize}
        slideGap={rem(10)}
        style={{
          width: "100%",
        }}
        align="start"
        slidesToScroll={totalSlides}
      >
        {slides}
      </Carousel>
    </div>
  );
}
