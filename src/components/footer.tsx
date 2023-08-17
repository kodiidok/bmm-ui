import styles from "@/styles/page.module.css";

export default function Footer() {
  const footerItems = [
    "About us",
    "Contact",
    "Privacy Policy",
    "Sitemap",
    "Terms of Use",
  ];

  return (
    <footer>
      <nav className={styles.footer}>
        <ul className={styles.footerList}>
          {footerItems.map((item, index) => (
            <li key={item} className={styles.footerItem}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <p className={styles.poweredBy}>Powered by Seamlessc</p>
    </footer>
  );
}
