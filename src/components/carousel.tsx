// import { CarouselSlide } from "@mantine/carousel/lib/CarouselSlide/CarouselSlide";

import { Carousel } from "@mantine/carousel";

import {
  createStyles,
  Image,
  Card,
  Text,
  Group,
  Button,
  getStylesRef,
  rem,
} from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

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

interface CarouselCardProps {
  image: string;
  title: string;
  rating: number;
}

interface CarouselProps {
  slides: CarouselCardProps[];
}

export function CarouselCard({ image, title, rating }: CarouselCardProps) {
  const { classes } = useStyles();

  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Image src={image} height={220} />
      </Card.Section>
      <Group position="apart" mt="lg">
        <Text fw={500} fz="lg">
          {title}
        </Text>

        <Group spacing={5}>
          <Text fz="xs" fw={500}>
            {rating}
          </Text>
          <IconStar size="1rem" />
        </Group>
      </Group>
    </Card>
  );
}

export function CarouselSection({ slides }: CarouselProps) {
  const cards = slides.map((slide, index) => {
    const image = slide.image;
    const title = slide.title;
    const rating = slide.rating;
    return (
      <Carousel.Slide key={`${title}-${index}`} style={{
        display: "flex",
        gap: rem(5),
      }}>
        <CarouselCard image={image} title={title} rating={rating} />
        <CarouselCard image={image} title={title} rating={rating} />
        <CarouselCard image={image} title={title} rating={rating} />
      </Carousel.Slide>
      // <CarouselSlide key={`${title}-${index}`}>
      //   <CarouselCard image={image} title={title} rating={rating} />
      // </CarouselSlide>
    );
  });
  return <Carousel>{cards}</Carousel>;
}
