'use client'

import { DocumentNode, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import styles from '@/styles/queryPage.module.css';
import ErrorModal from "@/components/modal/errorModal";
import client from "../../../graphql-client/graphql-client";
import PaginationButtons from "./paginationButtons";
import { CardProps } from "../carousel/carousel";
import { useRouter } from "next/navigation";
import { Card, Image } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

export interface QueryPageProps {
  title: string;
  query: DocumentNode;
  skip: number;
  take: number;
  type: string;
}

const imgUrl =
  "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg";

export function Cardsdgf({ image, title, rating, id }: CardProps) {

  const router = useRouter();

  return (
    <Card radius="md" className={styles['card']} onClick={() => router.push(`/store/artists/${id}`)}>

      <Card.Section className={styles['imageSection']}>
        <Image src={image} height={150} />
      </Card.Section>

      <div className={styles['cardInfo']}>
        <div className={styles['title']}>
          {title}
        </div>
        <div className={styles['rating']}>
          <IconStar size="1rem" fill="#FFE066" color="#FFD43B" />
          <div>{rating}</div>
        </div>
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
    const items = data?.performers?.items;
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
            {data.performers?.map((item: any) => {
              return (
                <Cardsdgf key={item.id} image={imgUrl} title={item.name} rating={item.rating} id={item.id} />
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