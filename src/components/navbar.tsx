import styles from "@/styles/page.module.scss";
import NavbarItem from "./navBarItem";

export default function Navbar() {
  const itemList = ["dashboard", "artists", "bands", "events", "about us"];

  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          {itemList.map((item) => (
            <li key={item} className={styles.navbarItem}>
              <NavbarItem text={item}/>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
