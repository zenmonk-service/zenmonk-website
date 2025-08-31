import BaseButton from '@/shared/button'
import Rating from '@/shared/rating'
import styles from './styles.module.scss'

const AboutUsHeroSection = () => {
  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Meet the Innovators Behind
            <span className={styles.highlightedText}> ZENMONK</span>
          </h1>
          <p className={styles.description}>
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values into
            action, simplifying tech to deliver user-centered solutions.
          </p>
          <BaseButton className={styles.button}> Let's COnnect</BaseButton>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/about-us/about.png"
            alt="about-us"
            className={styles.heroImage}
          />
        </div>
      </div>
      <Rating />
    </div>
  )
}
export default AboutUsHeroSection
