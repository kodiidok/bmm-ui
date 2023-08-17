"use client";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Searchbar from "@/components/searchbar";
import Button from "@/components/button";
import ContactUs from "@/components/contactUs";
import styles from "@/styles/page.module.css";
import { createStyles, getStylesRef, rem } from "@mantine/core";
import { CarouselSection } from "@/components/carousel";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },
}));

export default function Page() {

  const { classes } = useStyles();

  const artistCards = [
    { image: 'https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg', title: 'Danith Sri', rating: 4.8 },
  ];

  return (
    <main className={styles.container}>
      <Logo text="bookmymusic" />
      <Navbar />
      <div className={styles.searchSection}>
        <Searchbar />
        <Button size={1} text="Sign In" />
      </div>
      <div className={styles.carouselAlign}>
        <CarouselSection slides={artistCards}></CarouselSection>
      </div>
      <ContactUs
        text="Get in touch"
        line1="We'd love to hear from you."
        line2="Please fill out this form."
      />
      <Footer />
    </main>
  );
}
