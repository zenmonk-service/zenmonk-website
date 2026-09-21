'use client'

import { useAppDispatch } from '@/store/hooks'
import { openContactModal } from '@/store/features/header/header-slice'
import BaseButton from '@/shared/button'
import Bg from './assets/bg.svg'
import DesignSvg from './assets/design.svg'
import HeroBg from './assets/hero-image-bg.svg'
import Hero from './assets/hero.svg'
import Tools from './assets/tools.svg'
import UiUxSvg from './assets/ui-ux.svg'
import styles from './styles.module.scss'

const UiUxHeroSection = () => {
  const dispatch = useAppDispatch()
  return (
    <div className={styles.uiUxSectionWrapper}>
      <Bg className={styles.background} />
      <div className={styles.heroSectionTextWrapper}>
        <UiUxSvg className={styles.uiUxTitle} />
        <DesignSvg className={styles.designTitle} />
        <p className={styles.textDescription}>
          At Zenmonk, we combine creativity, strategy, and user-centered thinking to design websites, mobile apps, and digital products that look beautiful and feel effortless to use.
        </p>
        <BaseButton
          onClick={() => dispatch(openContactModal())}
          showArrow
          sx={{ marginTop: '24px' }}
        >
          Craft Your User Experience
        </BaseButton>
      </div>
      <div className={styles.imageContainer}>
        <HeroBg className={styles.heroImageBg} />
        <Tools className={styles.tools} />
        <Hero className={styles.heroImage} />
      </div>
    </div>
  )
}

export default UiUxHeroSection
