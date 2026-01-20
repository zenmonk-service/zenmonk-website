'use client'
import { HeroSection } from '@/shared/hero-section'
import { useMediaQuery } from '@mui/material'

const ItBusinessConsultationHeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 728px)')
  return <div
    style={{
      backgroundImage: `url("/services/it-background.png")`,
      backgroundSize: 'contain',
    }}
  >
    <HeroSection
      title="Driving Innovation with <br/> IT & Business Expertise"
      highlightedText="IT & Business Expertise"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      url={isMobile ? "/services/it-mobile.png" : "/services/it.png"}
      imageStyle={{
        scale: isMobile ? 1 : 1.2,
      }}
    />
  </div>
}

export default ItBusinessConsultationHeroSection
