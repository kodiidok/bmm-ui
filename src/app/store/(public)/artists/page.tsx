"use client";

import FeaturedArtists from "@/components/artist/featuredArtists";
import QueryPage from "@/components/common/performerQueryPage";
import { PERFORMERS_BY_TYPE_QUERY } from "@/gql/query";
import styles from "@/styles/page.module.css";

export default function Page() {

  return (
    <main className={styles['pageContainer']}>
      <div className={styles['featuredSection']}>
        <div className={styles['container']}>
          <FeaturedArtists />
        </div>
      </div>
      <div className={styles['container']}>
        <QueryPage title="Browse Artists" query={PERFORMERS_BY_TYPE_QUERY} skip={0} take={10} type={"Artist"} />
      </div>
    </main>
  );
}

