'use client'
import Rating from '@/shared/rating'
import HeroImage from './assets/hero-image.svg?url'
import Background from './assets/dotted-bg.svg'
import { useMediaQuery } from '@mui/material'
import styles from './styles.module.scss'
import { HeroSection } from '@/shared/hero-section'

const AiSolutionsHeroSection = () => {
  const isLessThan800 = useMediaQuery('(max-width: 800px)')
  return (
    <div className={styles.backgroundWrapper}>
      <Background className={styles.backgroundLine} />
      <HeroSection
        url={HeroImage}
        title="<span>Digital Transformation &amp; Automation</span> to Accelerate Growth"
        highlightedText="Digital Transformation & Automation"
        description="We empower your business with cutting-edge artificial intelligence and machine learning solutions. From custom LLM models to intelligent automation, we build smart tools that accelerate operational efficiency."
        imageStyle={{
          margin: '0 auto',
          display: 'block',
          maxWidth: '100%',
          width: '100%',
        }}
        style={{
          height: 'auto',
          aspectRatio: 'initial',
          paddingBottom: '70px',
          paddingTop: isLessThan800 ? '70px' : undefined,
        }}
      />
      <Rating />
    </div>
  )
}
export default AiSolutionsHeroSection
