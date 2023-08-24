import styles from "@/styles/page.module.css";
import NavbarItem from "@/components/navBarItem";

export default function ArtistNavbar() {
  const itemList = ["live", "outdoor", "wedding", "mashup"];

  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          {itemList.map((item) => (
            <li key={item} className={styles.navbarItem} style={{color:"#64748B"}}>
              <NavbarItem text={item}/>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
