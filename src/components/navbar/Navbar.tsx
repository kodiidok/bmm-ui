import styles from "@/styles/navbar.module.css";
import NavbarItem from "./navBarItem";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

interface NavbarProps {
  items: NavbarItemProps[];
}

export interface NavbarItemProps {
  text: string;
  href?: string;
}

export default function Navbar({ items }: NavbarProps) {
  const [navbarMobile, setNavbarMobile] = useState(false);

  return (
    <div className={styles['navbarContainer']}>
      <nav className={styles['navbar']}>
        <ul className={styles['navbarList']}>
          {items.map((item) => (
            <li key={item.text} className={styles['navbarItem']}>
              <NavbarItem text={item.text} href={item.href} />
            </li>
          ))}
        </ul>
        <div className={styles['navbarMobile']}>
          <div className={styles['menuIcon']} onClick={() => {setNavbarMobile(!navbarMobile)}}>
            <IconMenu2 />
          </div>
          {
            navbarMobile && <ul className={styles['navbarListMobile']}>
              {items.map((item) => (
                <li key={item.text} className={styles['navbarItemMobile']}>
                  <NavbarItem text={item.text} href={item.href} />
                </li>
              ))}
            </ul>
          }
        </div>
      </nav>
    </div>
  );
}
