'use client'
import Rating from '@/shared/rating'
import HeroImage from './assets/hero-image.svg?url'
import Background from './assets/dotted-bg.svg'
import styles from './styles.module.scss'
import { HeroSection } from '@/shared/hero-section'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const AiSolutionsHeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 728px)')
  return (
    <div className={styles.backgroundWrapper}>
      <Background className={styles.backgroundLine} />
      <HeroSection
        url={HeroImage}
        title="<span>Digital Transformation<br/>&amp; Automation</span> to<br/>Accelerate Growth"
        highlightedText="Digital Transformation & Automation"
        description="Need AI to revolutionize your business? We are your experts. From pilot projects to full-scale AI integration, we provide intelligent solutions to boost efficiency and innovation. Let us empower your business with innovative AI tools and services."
        imageStyle={{
          margin: '0 auto',
          display: 'block',
          maxWidth: isMobile ? '100%' : '72%',
          width: isMobile ? '100%' : '72%',
        }}
      />
      <Rating />
    </div>
  )
}
export default AiSolutionsHeroSection
