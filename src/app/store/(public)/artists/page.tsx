"use client";

import FeaturedArtists from "@/components/artist/featuredArtists";
import QueryPage from "@/components/common/performerQueryPage";
import { PERFORMERS_BY_TYPE_QUERY } from "@/gql/query";
import styles from "@/styles/page.module.css";
import titleStyles from "@/styles/pageTitle.module.css";

export default function Page() {

  return (
    <main className={styles['container']}>
      <FeaturedArtists />
      <div className={titleStyles['pageHero']}>
        <h1 className={titleStyles['pageTitle2']}>Artists</h1>
      </div>
      <QueryPage title="Browse Artists" query={PERFORMERS_BY_TYPE_QUERY} skip={0} take={10} type={"Artist"} />
    </main>
  );
}

