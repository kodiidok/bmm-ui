import styles from "@/styles/page.module.scss";

export default function Footer() {
  const footerItems = [
    "About us",
    "Contact",
    "Privacy Policy",
    "Sitemap",
    "Terms of Use",
  ];

  return (
    <footer style={{
      backgroundColor: '#252323',
      paddingBottom: '40px',
      width: '100%'
    }}>
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
