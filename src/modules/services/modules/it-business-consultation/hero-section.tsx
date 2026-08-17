'use client'
import { HeroSection } from '@/shared/hero-section'
import { useMediaQuery } from '@mui/material'

const ItBusinessConsultationHeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 800px)')
  const isDesktop = useMediaQuery('(min-width: 1200px)')
  return <div
    style={{
      backgroundImage: `url("/services/it-background.png")`,
      backgroundSize: 'contain',
      paddingTop: isDesktop ? 'max(80px, 6vw)' : undefined,
    }}
  >
    <HeroSection
      title="Driving Meaningful Innovation with IT & Business Expertise"
      highlightedText="IT & Business Expertise"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      url={isMobile ? "/services/it-mobile.png" : "/services/it.png"}
      titleProps={{
        style: {
          width: "95%",
        },
      }}
    />
  </div>
}

export default ItBusinessConsultationHeroSection
