'use client'

import { useAppDispatch } from '@/store/hooks'
import { openContactModal } from '@/store/features/header/header-slice'
import BaseButton from '@/shared/button'
import Rating from '@/shared/rating'
import HeroImage from './assets/about.svg'
import Background from './assets/dotted-bg.svg'
import styles from './styles.module.scss'

const AboutUsHeroSection = () => {
  const dispatch = useAppDispatch()
  return (
    <div className={styles.backgroundWrapper}>
      <Background className={styles.backgroundLine} />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Meet the Brilliant Innovators Behind
            <span className={styles.highlightedText}> ZENMONK</span>
          </h1>
          <p className={styles.description}>
            We believe in ZenFusion, merging technology with mindfulness. As
            your partners in technological excellence, we transform values into
            action, simplifying tech to deliver user-centered solutions.
          </p>
          <BaseButton
            onClick={() => dispatch(openContactModal())}
            className={styles.button}
            showArrow
          >
            Connect with Our Team
          </BaseButton>
        </div>
        <div className={styles.imageContainer}>
          <HeroImage className={styles.heroImage} />
        </div>
      </div>
      <div className={styles.ratingWrapper}>
        <Rating clients="80+" projects="120+" />
      </div>
    </div>
  )
}
export default AboutUsHeroSection
