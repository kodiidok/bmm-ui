import styles from "@/styles/pageTitle.module.css";

export default function Hero() {
  return (
    <div
      className={styles['pageHero']}
      style={{
        backgroundImage: `url(${'/bmm-bg.svg'})`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'contain',
      }}
    >
      <h1 className={styles['pageTitle']}>Home</h1>
      <div className={styles['pageDescription']}>
        "Discover the Stars of Sound: Explore our handpicked selection of Featured Artists, Top Bands, and Must-Attend Events on our homepage. From chart-toppers to emerging talents, we've curated a musical universe for you to explore and book. Whether you're seeking the perfect performer for your event or looking for the hottest gig in town, our homepage is your gateway to the world of music and entertainment. Join us in celebrating the power of live music!"
      </div>
    </div>
  );
}