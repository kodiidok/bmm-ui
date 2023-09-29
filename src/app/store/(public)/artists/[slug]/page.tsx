"use client";

import styles from "@/styles/store.module.css";
import { Group, Text, Image } from "@mantine/core";
import { IconStar, IconBookmarkFilled } from "@tabler/icons-react";
import Tags from '@/components/navbar/tags';
import IconButton from "@/components/button/iconButton";
import EventTable from "@/components/table/eventTable";
import Scheduler from "@/components/scheduler/Scheduler";
import { PERFORMEY_BY_ID } from "@/gql/query";
import { useQuery } from "@apollo/client";
import client from "../../../../../../graphql-client/graphql-shop-client";
import { useEffect, useState } from "react";
import Button from "@/components/button/button";

export default function Page({ params }: { params: { slug: string } }) {
  const imageUrl =
    "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg";
  const [performer, setPerformer] = useState<any>(null);
  const { loading, error, data } = useQuery(PERFORMEY_BY_ID, { client, variables: { id: params.slug } });

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
    <main className={styles['container']}>
      <div className={styles['meta']}>
        <Image src={imageUrl} height={220} radius={10} />
        <div className={styles['submeta']}>
          <div>
            <div className={styles['name']}>
              <h2>{performer.name}</h2>
              <div className={styles['rating']}>
                <Text fz="xs" fw={500}>{performer.rating}</Text>
                <IconStar size="1rem" />
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

      <div>
        {/* description */}
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
        <EventTable />
      </div>
    </main>
  );
}
