import BaseButton from '@/shared/button'
import Rating from '@/shared/rating'
import HeroImage from './assets/cloud.svg'
import Background from './assets/hero-bg.svg'
import styles from './styles.module.scss'

const CloudSolutionsHeroSection = () => {
  return (
    <div className={styles.backgroundWrapper}>
      <Background className={styles.backgroundLine} />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Building Secure,
            <br /> Scalable, and Reliable <br />
            <span className={styles.highlightedText}>Cloud Solutions</span>
          </h1>
          <p className={styles.description}>
            Need a cloud solution that adapts to your business needs? We design
            agile, scalable, and secure cloud environments, allowing you to
            focus on growth while we manage the technical complexities.
          </p>
          <BaseButton className={styles.button}> Explore More</BaseButton>
        </div>
        <div className={styles.imageContainer}>
          <HeroImage className={styles.heroImage} />
        </div>
      </div>
      <Rating />
    </div>
  )
}
export default CloudSolutionsHeroSection
