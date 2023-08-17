import { Navbar, Group, Code, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
} from '@tabler/icons-react';
import { LinksGroup } from './NavbarLinksGroup';
import { Logo } from '../logo/Logo';
import styles from '@/styles/admin.module.scss';

const mockdataCore = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Calendar',
    icon: IconCalendarStats,
    links: [
      { label: 'Events', link: '/' },
      { label: 'Bookings', link: '/' },
    ],
  },
  {
    label: 'Sales',
    icon: IconCalendarStats,
    links: [
      { label: 'Tickets', link: '/sales/tickets' },
    ],
  },
  {
    label: 'Inquiries',
    icon: IconCalendarStats,
    links: [
      { label: 'Events', link: '/' },
      { label: 'Bands', link: '/' },
      { label: 'Artists', link: '/' },
      { label: 'Direct', link: '/' },
    ],
  },
  {
    label: 'Managers',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Band Managers', link: '/' },
      { label: 'Artists Managers', link: '/' },
      { label: 'Events Managers', link: '/' },
    ],
  },
  {
    label: 'Performers',
    icon: IconCalendarStats,
    links: [
      { label: 'Bands', link: '/' },
      { label: 'Artists', link: '/' },
    ],
  },
];

const mockdataUtil = [
  {
    label: 'Settings',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Roles', link: '/' },
      { label: 'Shipping', link: '/' },
      { label: 'Payments', link: '/' },
    ],
  },
  { label: 'System', icon: IconGauge },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    // padding: theme.spacing.md,
    paddingTop: 0,
    // marginLeft: `calc(${theme.spacing.md} * -1)`,
    // marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    // marginLeft: `calc(${theme.spacing.md} * -1)`,
    // marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    // marginLeft: `calc(${theme.spacing.md} * -1)`,
    // marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarNested() {
  const { classes } = useStyles();
  const linksCore = mockdataCore.map((item) => <LinksGroup {...item} key={item.label} />);
  const linksUtil = mockdataUtil.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={950} width={{ sm: 250 }} p="md" className={classes.navbar} style={{
      padding: 0,
    }}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Logo />
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links}>
        <div className={classes.linksInner}>{linksCore}</div>
      </Navbar.Section>

      <Navbar.Section grow className={classes.footer}>
        <div className={classes.linksInner}>{linksUtil}</div>
      </Navbar.Section>
    </Navbar>
  );
}