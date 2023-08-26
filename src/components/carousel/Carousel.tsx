"use client"

import { Carousel } from "@mantine/carousel";
// import { useMediaQuery } from "@mantine/hooks";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  createStyles,
  Group,
  Text,
  Image,
  Card,
  useMantineTheme,
  rem,
  CardSection,
} from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  imageSection: {
    // padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  rating: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface CardProps {
  image: string;
  title: string;
  rating: string;
}

function Cardsdgf({ image, title, rating }: CardProps) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={image} height={150} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{title}</Text>
        </div>

        <Group spacing={5}>
          <IconStar size="1rem" fill="#FFE066" color="#FFE066" />

          <Text fz="xs" fw={500}>
            {rating}
          </Text>
        </Group>
      </Group>
    </Card>
  );
}

const imgUrl =
  "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg";
const mockdata = [
  {
    image: imgUrl,
    title: "daddy",
    rating: "4.8",
  },
  {
    image: imgUrl,
    title: "daddy",
    rating: "4.8",
  },
  {
    image: imgUrl,
    title: "daddy",
    rating: "4.8",
  },
  {
    image: imgUrl,
    title: "daddy",
    rating: "4.8",
  },
  {
    image: imgUrl,
    title: "daddy",
    rating: "4.8",
  },
  {
    image: imgUrl,
    title: "daddy",
    rating: "4.8",
  },
  {
    image: imgUrl,
    title: "daddy",
    rating: "4.8",
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery("(max-width: 600px)");
  // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const cardsPerSlide = 6;
  const totalSlides = Math.ceil(mockdata.length / cardsPerSlide);
  const slideSize = mobile ? "90%" : "30%";
  const slides: any = [];

  for (let slideIndex = 0; slideIndex < totalSlides; slideIndex++) {
    const startIdx = slideIndex * cardsPerSlide;
    const endIdx = Math.min(startIdx + cardsPerSlide, mockdata.length);
    const slideData = mockdata.slice(startIdx, endIdx);

    slideData.map((item, itemIndex) =>
      slides.push(
        <Carousel.Slide key={slideIndex}>
          <Cardsdgf key={itemIndex} {...item} />
        </Carousel.Slide>
      )
    );
  }

  return (
    <div className="" style={{ padding: "0rem" }}>
      <Carousel
        slideSize={slideSize}
        // breakpoints={[
        //   { maxWidth: "xl", slideSize: slideSize, slideGap: rem(10) },
        // ]}
        slideGap={rem(10)}
        style={{
          width: "100%",
        }}
        align="start"
        slidesToScroll={totalSlides}
      >
        {slides}
      </Carousel>
    </div>
  );
}
