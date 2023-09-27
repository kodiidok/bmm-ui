"use client";

import FeaturedArtists from "@/components/artist/featuredArtists";
import QueryPage from "@/components/common/queryPage";
import { ARTISTS_QUERY } from "@/gql/query";
import styles from "@/styles/page.module.css";

export default function Page() {

  return (
    <main className={styles['container']}>
      <FeaturedArtists />
      <QueryPage title="Browse Artists" query={ARTISTS_QUERY} skip={0} take={10}/>
    </main>
  );
}
