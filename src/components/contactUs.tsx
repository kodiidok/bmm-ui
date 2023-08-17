import Button from "./button";
import styles from "@/styles/page.module.css";

interface Props {
  text: string;
  line1: string;
  line2: string;
  
}

export default function ContactUs({text, line1, line2}:Props) {
  const headerStyle = {
    fontSize: 'small',
    paddingBottom: `1rem`,
    color: `#64748B`
  };

  const descriptionStyle = {
    fontSize: 'small',
    color: `#64748B`
  };

  return (
    <div className={styles.contactUs}>
      <div style={headerStyle}>Contact Us</div>
      <Button size={2} text={text}/>
      <div className={styles.contactUs} style={descriptionStyle}>
        <div>{line1}</div>
        <div>{line2}</div>
      </div>
    </div>
  )
}