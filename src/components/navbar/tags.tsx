import styles from "@/styles/page.module.css";

export default function Tags() {
  const itemList = ["live", "outdoor", "wedding", "mashup"];

  return (
    <ul className={styles['tags']}>
      {itemList.map((item) => (
        <li key={item} className={styles['listItem']}>
          {item}
        </li>
      ))}
    </ul>
  );
}
