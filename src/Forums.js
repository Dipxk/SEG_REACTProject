import styles from './forums.module.css';

function Forums() {
  return (
    <div className={styles.forumsPage}>
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>COMMUNITY FEATURES</h1>
      </header>
      <div className={styles.content}>
        <div className={styles.featureSection}>
          <div className={styles.featureItem}>
            <img src="/path/to/your/image1.jpg" alt="Feature 1" className={styles.featureImg} />
            <p className={styles.featureText}>
              Immerse yourself in the vibrant world of anime culture in Japan, where colorful billboards and lively street scenes celebrate beloved series and characters. Experience the heart of the action in iconic districts like Akihabara and Shibuya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forums;
