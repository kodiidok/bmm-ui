'use client'

import { DocumentNode, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import styles from '@/styles/queryPage.module.css';
import ErrorModal from "@/components/modal/errorModal";
import client from "../../../graphql-client/graphql-client";
import PaginationButtons from "./paginationButtons";
import { CardProps } from "../carousel/carousel2";
import { useRouter } from "next/navigation";
import { Card, Image } from "@mantine/core";
import { IconCalendarEvent, IconClock2, IconStar, IconTicket } from "@tabler/icons-react";

export interface QueryPageProps {
  title: string;
  query: DocumentNode;
  skip: number;
  take: number;
  type: string;
}

const imgUrl =
  "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg";

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
          Book Now
        </div>
      </Card>
    );
  }

export default function QueryPage({ query, skip, take, type, title }: QueryPageProps) {
  const { loading, error, data, refetch } = useQuery(query, { client, variables: { skip, take, type } });
  const [queryData, setQueryData] = useState<any>(null);
  const [totalPages, setTotalPages] = useState(5);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [skipSize, setSkipSize] = useState(0);

  useEffect(() => {
    const items = data?.products?.items;
    setQueryData({ ...queryData, data: items })
  }, [data]);

  useEffect(() => {
    console.log(queryData);
  }, [queryData]);

  useEffect(() => {
    console.log(skipSize);
  }, [skipSize]);

  useEffect(() => {
    refetch({ skip: skipSize, take: pageSize, type });
  }, [pageSize]);

  const handlePageChange = (pageNumber: number) => {
    const skipValue = (pageNumber - 1) * pageSize;
    setSkipSize(skipValue);
    setPage(pageNumber);
  }

  return (
    <div className={styles['queryPage']}>
      {
        loading && <div>Loading...</div>
      }

      {
        error && <ErrorModal error={error} initModalState={true} />
      }

      {!loading && !error && (
        <div className={styles['layout']}>
          {/* <div className={styles['header']}>
            <h2>
              {title}
            </h2>
          </div> */}
          <div className={styles['cards']}>
            {data.products?.items.map((item: any) => {
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
                <Cardsdgf key={item.id} id={item.id} title={item.name} image={imgUrl} time={formattedTime12} date={formattedDate} />
              )
            })}
          </div>
        </div>
      )}

      <div className={styles['paginationSection']}>
        <PaginationButtons
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(page) => handlePageChange(page)}
        />
      </div>
    </div>
  );
}