import BaseButton from '@/shared/button'
import Rating from '@/shared/rating'
import HeroImage from './assets/ai-hero-image.svg'
import Background from './assets/dotted-bg.svg'
import styles from './styles.module.scss'

const AiSolutionsHeroSection = () => {
  return (
    <div className={styles.backgroundWrapper}>
      <Background className={styles.backgroundLine} />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span className={styles.highlightedText}>
              Digital Transformation <br/>& Automation
            </span>
            &nbsp;To <br/> Accelerate Growth
          </h1>
          <p className={styles.description}>
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values into
            action, simplifying tech to deliver user-centered solutions.
          </p>
          <BaseButton className={styles.button}> Let&apos;s Connect</BaseButton>
        </div>
        <div className={styles.imageContainer}>
          <HeroImage className={styles.heroImage} />
        </div>
      </div>
      <Rating />
    </div>
  )
}
export default AiSolutionsHeroSection
