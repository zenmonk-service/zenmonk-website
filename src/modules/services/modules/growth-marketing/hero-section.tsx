'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { HeroSection } from '@/shared/hero-section'

const GrowthMarketingHeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTabletRange = useMediaQuery('(min-width: 768px) and (max-width: 1000px)')
  return <div
    style={{
      backgroundImage: `url('/services/growth-background.png')`,
      backgroundSize: 'contain',
      paddingTop: isTabletRange ? 'max(30px, 2vw)' : undefined,
    }}
  >
    <HeroSection
      url="/services/growth.png"
      title="Growth & Marketing That Effectively Drives Real Results"
      titleProps={{
        style: {
          width: '95%'
        }
      }}
      style={{
        height: 'auto',
        aspectRatio: 'initial',
        paddingBottom: '60px',
      }}
      imageStyle={{ 
        scale: isMobile ? 1 : 0.9
      }}
      highlightedText="Growth & Marketing"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions." />
  </div>
}

export default GrowthMarketingHeroSection
