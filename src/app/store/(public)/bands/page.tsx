"use client";

import FeaturedBands from "@/components/band/featuredBands";
import QueryPage from "@/components/common/performerQueryPage";
import { PERFORMERS_BY_TYPE_QUERY } from "@/gql/query";
import styles from "@/styles/page.module.css";
import titleStyles from "@/styles/pageTitle.module.css";

export default function Page() {

  return (
    <main className={styles['container']}>
      <FeaturedBands />
      <div className={titleStyles['pageHero']}>
        <h1 className={titleStyles['pageTitle2']}>Bands</h1>
      </div>
      <QueryPage title="Bands" query={PERFORMERS_BY_TYPE_QUERY} skip={0} take={10} type={"Band"} />
    </main>
  );
}

