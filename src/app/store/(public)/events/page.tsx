"use client";

import QueryPage from "@/components/common/eventQueryPage";
import FeaturedEvents from "@/components/event/featuredEvents";
import { EVENTS_BY_TYPE_QUERY } from "@/gql/query";
import styles from "@/styles/page.module.css";

export default function Page() {

  return (
    <main className={styles['pageContainer']}>
      <div className={styles['featuredSection']}>
        <div className={styles['container']}>
          <FeaturedEvents />
        </div>
      </div>
      <div className={styles['container']}>
        <QueryPage title="Events" query={EVENTS_BY_TYPE_QUERY} skip={0} take={10} type={"event"} />
      </div>
    </main>
  );
}

