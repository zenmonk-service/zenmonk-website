'use client'

import { useRouter } from 'next/navigation'
import BaseButton from '@/shared/button'
import Bg from './assets/bg.svg'
import DesignSvg from './assets/design.svg'
import HeroBg from './assets/hero-image-bg.svg'
import Hero from './assets/hero.svg'
import Tools from './assets/tools.svg'
import UiUxSvg from './assets/ui-ux.svg'
import styles from './styles.module.scss'

const UiUxHeroSection = () => {
  const router = useRouter()
  return (
    <div className={styles.uiUxSectionWrapper}>
      <Bg className={styles.background} />
      <div className={styles.heroSectionTextWrapper}>
        <UiUxSvg className={styles.uiUxTitle} />
        <DesignSvg className={styles.designTitle} />
        <p className={styles.textDescription}>
          We design intuitive and engaging experiences that makes every
          touchpoint seamless and enjoyable. Let us enhance your interface with
          precision and creativity.
        </p>
        <BaseButton
          onClick={() => router.push('/contact')}
          sx={{ marginTop: '24px' }}
        >
          EXPLORE MORE
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
