import styles from "@/styles/page.module.scss";

interface Props {
  text: string;
  size: number;
  icon: React.ReactNode; // This prop will accept any JSX/React element as the icon
}

export default function IconButton({ text, size, icon }: Props) {
  const buttonStyle = {
    fontSize: `${size}rem`,
    borderRadius:`${size}rem`,
    paddingLeft:`${size}rem`,
    paddingRight:`${size}rem`,
    paddingTop:`${0.4*size}rem`,
    paddingBottom:`${0.4*size}rem`,
    // backgroundColor: bgcolor,
  };

  const iconStyle = {
    fontSize: `${size}rem`, // Apply the desired icon size
    // marginRight: `${0.5 * size}rem`, // Add some space between the icon and text
  };

  return (
    <button type="submit" className={styles.roundButton}>
      <span style={iconStyle}>{icon}</span> {text}
    </button>
  );
}