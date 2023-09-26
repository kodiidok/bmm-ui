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
import { IconStar } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/carousel.module.css";

const imgUrl =
  "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg";

export interface CardProps {
  image: string;
  title: string;
  rating: string;
  id: string;
}

export interface CarouselProps {
  data: any;
}

function Cardsdgf({ image, title, rating, id }: CardProps) {

  const router = useRouter();

  return (
    <Card withBorder radius="md" className={styles['card']} onClick={() => router.push(`/store/artists/${id}`)}>

      <Card.Section className={styles['imageSection']}>
        <Image src={image} height={150} />
      </Card.Section>

      <div className={styles['cardInfo']}>
        <div className={styles['title']}>
          {title}
        </div>
        <div className={styles['rating']}>
          <IconStar size="1rem" fill="#FFE066" color="#FFE066" />
          <div>{rating}</div>
        </div>
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
        return (
          <Carousel.Slide key={slideIndex}>
            <Cardsdgf key={item.id} id={item.id} rating={item.rating} title={item.name} image={imgUrl} />
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
