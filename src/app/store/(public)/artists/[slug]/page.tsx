"use client";

import styles from "@/styles/store.module.css";
import { Text, Image } from "@mantine/core";
import { IconStar, IconBookmarkFilled } from "@tabler/icons-react";
import Tags from '@/components/navbar/tags';
import EventTable from "@/components/table/eventTable";
import { PERFORMER_BY_ID } from "@/gql/query";
import { useQuery } from "@apollo/client";
import client from "../../../../../../graphql-client/graphql-shop-client";
import { useEffect, useState } from "react";
import Hero from "@/components/common/hero";

interface PageHeaderProps {
  imageUrl: string
  name: string
  rating: string
}

export function PageHeader({ imageUrl, name, rating }: PageHeaderProps) {
  return (
    <div className={styles['meta']}>
      <Image src={imageUrl} height={220} radius={10} />
      <div className={styles['submeta']}>
        <div>
          <div className={styles['name']}>
            {/* <h2>{name}</h2> */}
            <div className={styles['rating']}>
              <h2>{rating}</h2>
              <IconStar size={25} color='#F59F00' fill='#FFD43B' />
            </div>
          </div>
          <div className={styles['tags']}>
            <Tags />
          </div>
        </div>
        <div>
          <button className={styles['button2']}>
            <IconBookmarkFilled size={15} />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Page({ params }: { params: { slug: string } }) {
  const imageUrl =
    "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg";
  const [performer, setPerformer] = useState<any>(null);
  const { loading, error, data } = useQuery(PERFORMER_BY_ID, { client, variables: { id: params.slug } });

  useEffect(() => {
    console.log(params.slug);
  }, []);

  useEffect(() => {
    setPerformer(data?.performer);
  }, [data]);

  useEffect(() => {
    console.log(performer);
  }, [performer]);

  if (error || !performer) {
    // Render an error message if there's an error or no performer data
    return (
      <div className={styles["error-message"]}>
        Oops! Something went wrong or the performer does not exist.
      </div>
    );
  }

  const handleBookNow = () => {

  }

  return (
    <div className={styles['layoutContainer']}>
      <Hero 
        title={performer.name}
        description=""
      />
    <main className={styles['container']}>
      <PageHeader imageUrl={imageUrl} name={performer.name} rating={performer.rating} />
      <div>
        {performer.description}
      </div>

      {/* <div className={styles['subheading']}>
        <h3>Artist Availability</h3>
        <Scheduler />
      </div> */}

      {/* <div className={styles['subheading']}>
        <h3>Latest Tunes</h3>
        <div></div>
      </div> */}

      <div className={styles['subheading']}>
        <h3>Upcoming Events</h3>
        <EventTable events={performer.products} />
      </div>
    </main>
    </div>
  );
}
