'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { HeroSection } from '@/shared/hero-section'

const GrowthMarketingHeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return <div
    style={{
      backgroundImage: `url('/services/growth-background.png')`,
      backgroundSize: 'contain',
    }}
  >
    <HeroSection
      url="/services/growth.png"
      title="Growth & Marketing That Drives Real Results"
      titleProps={{
        style: {
          width: '95%'
        }
      }}
      imageStyle={{ 
        scale: isMobile ? 1 : 0.9
      }}
      highlightedText="Growth & Marketing"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions." />
  </div>
}

export default GrowthMarketingHeroSection
