import styles from "@/styles/page.module.scss";
import NavbarItem from "./navBarItem";

interface NavbarProps {
  items: string[];
}

export default function Navbar({ items }: NavbarProps) {
  // const itemList = ["dashboard", "artists", "bands", "events", "about us"];

  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          {items.map((item) => (
            <li key={item} className={styles.navbarItem}>
              <NavbarItem text={item} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
