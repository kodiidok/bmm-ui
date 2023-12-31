import Button from "../button/button";
import { CardsCarousel, CarouselProps } from "../carousel/carousel";
import { useQuery } from "@apollo/client";
import client from "../../../graphql-client/graphql-shop-client";
import { FEATURED_BANDS_QUERY } from "@/gql/query";
import ErrorModal from "../modal/errorModal";
import styles from '@/styles/artists.module.css';
import { useEffect, useState } from "react";



export default function FeaturedBands() {
  const { loading, error, data } = useQuery(FEATURED_BANDS_QUERY, { client });
  const [carouselData, setCarouselData] = useState<any>(null);

  useEffect(() => {
    const items = data?.performers?.map((item: any) => {
      return ({
        name: item.name,
        id: item.id,
        rating: item.rating,
      })
    });
    setCarouselData({ ...carouselData, data: items })
  }, [data]);

  useEffect(() => {
    console.log(carouselData);
  }, [carouselData]);

  return (
    <div className={styles['featuredCarousel']}>
      {
        loading && <div>Loading...</div>
      }

      {
        error && <ErrorModal error={error} initModalState={true} />
      }

      {!loading && !error && (
        <div>
          <div className={styles['header']}>
            <h2>
              Featured Bands
            </h2>
            <Button size={1.1} text="View All" type="secondary" />
          </div>
          <CardsCarousel data={carouselData} />
        </div>
      )}
    </div>
  );
}