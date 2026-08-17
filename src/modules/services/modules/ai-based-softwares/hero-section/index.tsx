'use client'
import Rating from '@/shared/rating'
import HeroImage from './assets/hero-image.svg?url'
import Background from './assets/dotted-bg.svg'
import styles from './styles.module.scss'
import { HeroSection } from '@/shared/hero-section'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const AiSolutionsHeroSection = () => {
  const isLessThan800 = useMediaQuery('(max-width: 800px)')
  return (
    <div className={styles.backgroundWrapper}>
      <Background className={styles.backgroundLine} />
      <HeroSection
        url={HeroImage}
        title="<span>Digital Transformation &amp; Automation</span> to Accelerate Growth"
        highlightedText="Digital Transformation & Automation"
        description="Need AI to revolutionize your business? We are your experts. From pilot projects to full-scale AI integration, we provide intelligent solutions to boost efficiency and innovation. Let us empower your business with innovative AI tools and services."
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
