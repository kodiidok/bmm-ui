import styles from "@/styles/page.module.scss";

interface Props {
  text: string
  size: number
  onClick?: (event: any) => void
  type: "round" | "secondary" | "primary" | "featured"
}

export default function Button({ text, size, onClick, type }: Props) {
  const buttonStyle = {
    fontSize: `${size - 0.15}rem`,
  };
  let className = styles.button;
  
  if (type === "round") {
    className = styles.roundButton;
  } else if (type === "secondary") {
    className = styles.secondaryButton;
  } else if (type === "featured") {
    className = styles.featuredButton;
  }

  return (
    <button
      type="submit"
      className={className}
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
