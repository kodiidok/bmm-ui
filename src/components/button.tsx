import styles from "@/styles/page.module.css";

interface Props {
  text: string;
  size: number;
}

export default function Button({ text, size }: Props) {
  const buttonStyle = {
    fontSize: `${size}rem`,
    // backgroundColor: bgcolor,
    fontFamily: "Roboto, Sans-Serifs",
  };

  return(
    <button type="submit" className={styles.button} style={buttonStyle}>{text}</button>
  )
}