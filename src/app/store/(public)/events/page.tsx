"use client";

import QueryPage from "@/components/common/eventQueryPage";
import FeaturedEvents from "@/components/event/featuredEvents";
import { EVENTS_BY_TYPE_QUERY } from "@/gql/query";
import styles from "@/styles/page.module.css";
import titleStyles from "@/styles/pageTitle.module.css";

export default function Page() {

  return (
    <main className={styles['container']}>
      <FeaturedEvents />
      <div className={titleStyles['pageHero']}>
        <h1 className={titleStyles['pageTitle2']}>Events</h1>
      </div>
      <QueryPage title="Events" query={EVENTS_BY_TYPE_QUERY} skip={0} take={10} type={"event"} />
    </main>
  );
}

