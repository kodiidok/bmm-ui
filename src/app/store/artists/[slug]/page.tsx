"use client";
import Logo from "@/components/logo/logo";
import Navbar, { NavbarItemProps } from "@/components/navbar/navbar";
import Footer from "@/components/common/footer";
import Searchbar from "@/components/input/searchbar";
import Button from "@/components/button/button";
import ContactUs from "@/components/common/contactUs";
import styles from "@/styles/store.module.scss";
import { Group, Text, Image } from "@mantine/core";
import { IconStar, IconBookmarkFilled } from "@tabler/icons-react";
import Tags from "../../../../components/navbar/tags";
import IconButton from "@/components/button/iconButton";
import CalendarNotification from "@/components/calendar/calendar";
import EventTable from "@/components/table/eventTable";
import Scheduler from "@/components/scheduler/Scheduler";

export default function Page({ params }: { params: { slug: string } }) {
  const imageUrl =
    "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg";

  const dates = ["Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5"];
  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
  const notifications = [
    ["Meeting", "", "Lunch", ""],
    ["", "Conference Call", "", ""],
    ["", "", "Coffee Break", "Project Review"],
    ["", "Training", "", ""],
  ];

  const baseUrl = "/store";
  const navbarItems: NavbarItemProps[] = [
    {
      text: "dashboard",
      href: baseUrl,
    },
    {
      text: "artists",
      href: `${baseUrl}/artists`,
    },
    {
      text: "bands",
      href: `${baseUrl}/bands`,
    },
    {
      text: "events",
      href: `${baseUrl}/events`,
    },
    {
      text: "settings",
      href: `${baseUrl}/settings`,
    },
  ];

  return (
    <main className={styles.main}>
      <div style={{ width: "90%" }}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Image src={imageUrl} height={220} radius={10} />
            <h2
              style={{
                marginBottom: "15px",
              }}
            >
              Danith Sri
            </h2>
            <Group spacing={10}>
              <Text fz="xs" fw={500}>
                4.8
              </Text>
              <IconStar size="1rem" />
            </Group>
            <div
              style={{
                marginTop: "1rem",
              }}
            >
              <Tags />
            </div>
          </div>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IconButton
              text="Book Now"
              size={2}
              icon={<IconBookmarkFilled />}
            />
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <p>
            Meet the sensational Infinity, an electrifying band who sets the
            stage ablaze with their magnetic presence and soulful melodies. With
            a passion for music that knows no bounds, they effortlessly weaves
            stories of love, life and everything in between through their
            enchanting voice and skill ful instrumentation.
          </p>
          <p>
            Drawing inspiration from a diverse range of genres, Infinity crafts
            a unique sound that captivates audiences worldwide. From intimate
            acoustic performances to high-energy anthems, their music strikes a
            chord with listeners, leaving them craving more. Get ready to groove
            to the rhythm of Infinity's musical genius!
          </p>
        </div>

        <div
          style={{
            paddingTop: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h3>Artist Availability</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Dashbord Widget */}
              <div
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                {/* <CalendarNotification
                  dates={dates}
                  times={times}
                  notifications={notifications}
                /> */}
                <Scheduler />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <h4 style={{ marginTop: "5rem" }}>Latest Tunes</h4>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <h4 style={{ marginTop: "5rem", marginBottom: "3rem" }}>
              Upcoming Events
            </h4>
            <EventTable />
          </div>
        </div>
      </div>
    </main>
  );
}
