import styles from "@/styles/pageTitle.module.css";

interface HeroProps {
  title: string;
  description: string;
}

export default function Hero({ title, description }: HeroProps) {

  if (!title && !description) {
    return null;
  }

  return (
    <div
      className={styles['pageHero']}
      style={{
        backgroundImage: `url(${'/bmm-bg.svg'})`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'contain',
      }}
    >
      <h1 className={styles['pageTitle']}>{title}</h1>
      {
        description && 
        <div className={styles['pageDescription']}>
          {description}
        </div>
      }
    </div>
  );
}