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
import { Carousel } from "@mantine/carousel";
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

interface CarouselEventProps {
  images: any;
  title: string;
  rating: any;
  description: string;
  price: any;
}

export function CarouselEvent({
  images,
  title,
  rating,
  description,
  price,
}: CarouselEventProps) {
  const { classes } = useStyles();
  const slides = images.map((image: any, index: number) => (
    <Card radius="md" withBorder padding="xl" key={index}>
      <Card.Section>
        <Image src={image} height={220} />
        <div style={{
          padding: "1rem"
        }}>
          <Group position="apart" mt="lg">
            <Text fw={500} fz="lg">
              {title}
            </Text>

            <Group spacing={5}>
              <IconStar size="1rem" fill="#FFE066" color="#FFE066"/>
              <Text fz="xs" fw={500}>
                {rating}
              </Text>
            </Group>
          </Group>

          <Text fz="sm" c="dimmed" mt="sm">
            {description}
          </Text>

          <Group position="apart" mt="md">
            <div>
              <Text fz="xl" span fw={500} className={classes.price}>
                {price}
              </Text>
              <Text span fz="sm" c="dimmed">
                {" "}
              </Text>
            </div>

            <Button radius="md" color="red.7">Buy Tickets</Button>
          </Group>
        </div>
      </Card.Section>
    </Card>
  ));

  return <>{slides}</>;
}
