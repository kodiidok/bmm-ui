import { Card, Image, Text, Group, createStyles, rem } from '@mantine/core';
import { IconStar} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));



interface Props{
  image:string;
  rating:string;
  title:string;
}
export function FeaturesCard(props:Props) {
  const { classes } = useStyles();
  

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
      <Image src={props.image} height={220} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{props.title}</Text>
        </div>
        
        <Group spacing={5}>
            <IconStar size="1rem"/>
            
            <Text fz="xs" fw={500}>
              {props.rating}
            </Text>
            
          </Group>
      </Group>

    </Card>
  );
}