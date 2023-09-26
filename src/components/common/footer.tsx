import styles from "@/styles/footer.module.css";

export default function Footer() {
  const footerItems = [
    "About us",
    "Contact",
    "Privacy Policy",
    "Sitemap",
    "Terms of Use",
  ];

  return (
    <footer className={styles['footerContainer']}>
      <nav className={styles['footer']}>
        <ul className={styles['footerList']}>
          {footerItems.map((item, index) => (
            <li key={item} className={styles['footerItem']}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <p className={styles['poweredBy']}>Powered by Seamlessc</p>
    </footer>
  );
}
