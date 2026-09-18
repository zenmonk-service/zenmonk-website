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
      description="We provide strategic technology advisory that bridges executive vision with modern technical execution. Our consultants optimize IT roadmaps, reduce technical debt, and drive sustainable digital transformation."
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
