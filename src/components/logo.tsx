import styles from "../styles/page.module.scss";

interface Props {
  text: string;
}

export default function Logo({text}: Props) {
  return(
    <div className={styles.logo}>
      <h6>{text}</h6>
    </div>
  )
}