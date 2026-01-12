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
        title="Building Secure,<br/>Scalable, and Reliable<br/><span>Cloud Solutions</span>"
        highlightedText="Cloud Solutions"
        description="Need a cloud solution that adapts to your business needs? We design agile, scalable, and secure cloud environments, allowing you to focus on growth while we manage the technical complexities."
        imageStyle={{
          maxWidth: isMobile ? '293px' : '500px',
          margin: '0 auto',
          display: 'block',
        }}
      />
      <Rating />
    </div>
  )
}
export default AiSolutionsHeroSection
