'use client'

import { DocumentNode, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import styles from '@/styles/queryPage.module.css';
import ErrorModal from "@/components/modal/errorModal";
import client from "../../../graphql-client/graphql-client";
import PaginationButtons from "./paginationButtons";

export interface QueryPageProps {
  title: string;
  query: DocumentNode;
  skip: number;
  take: number;
}

export default function QueryPage({ query, skip, take, title }: QueryPageProps) {
  const { loading, error, data, refetch } = useQuery(query, { client, variables: { skip, take } });
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

  const handlePageChange = (pageNumber: number) => {
    const skipValue = (pageNumber - 1) * pageSize;
    setSkipSize(skipValue);
    setPage(pageNumber);
    refetch({ skip: skipSize, take: pageSize});
  }

  return (
    <div>
      {
        loading && <div>Loading...</div>
      }

      {
        error && <ErrorModal error={error} initModalState={true} />
      }

      {!loading && !error && (
        <div className={styles['carouselLayout']}>
          <div className={styles['header']}>
            <h3>
              {title}
            </h3>
          </div>
          {JSON.stringify(data)}
        </div>
      )}

      <PaginationButtons
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(page) => handlePageChange(page)}
      />
    </div>
  );
}