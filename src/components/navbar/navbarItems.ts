import { NavbarItemProps } from "./navbar";

export const baseStoreUrl = "/store";
export const baseAdminUrl = "/store";

export const defaultNavbarItems: NavbarItemProps[] = [
  {
    text: "dashboard",
    href: baseStoreUrl,
  },
  {
    text: "artists",
    href: `${baseStoreUrl}/artists`,
  },
  {
    text: "bands",
    href: `${baseStoreUrl}/bands`,
  },
  {
    text: "events",
    href: `${baseStoreUrl}/events`,
  },
  {
    text: "settings",
    href: `${baseStoreUrl}/settings`,
  },
];