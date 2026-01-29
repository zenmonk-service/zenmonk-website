import BaseButton from '@/shared/button'
import HeroImage from './assets/industry.svg'
import styles from './styles.module.scss'

const IndustrySpecificHeroSection = () => {
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span className={styles.highlightedText}> Industry-Specific</span>
            <br />
            Solutions
          </h1>
          <p className={styles.description}>
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values into
            action, simplifying tech to deliver user-centered solutions.
          </p>
          <BaseButton className={styles.button}>Explore More</BaseButton>
        </div>
        <div className={styles.imageContainer}>
          <HeroImage className={styles.heroImage} />
        </div>
      </div>
    </div>
  )
}
export default IndustrySpecificHeroSection
