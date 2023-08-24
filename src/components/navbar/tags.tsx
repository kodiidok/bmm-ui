import styles from "@/styles/page.module.scss";
import NavbarItem from "@/components/navbar/navBarItem";

export default function Tags() {
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
