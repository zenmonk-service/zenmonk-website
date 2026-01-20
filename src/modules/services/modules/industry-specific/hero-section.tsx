'use client'
import { HeroSection } from '@/shared/hero-section'
import { useMediaQuery } from '@mui/material'

const IndustrySpecificHeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 728px)')
  return <HeroSection
    url="/services/industry.png"
    title="Industry Specific<br/>Solutions"
    highlightedText="Industry Specific"
    description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
    textWrapperStyle={{
      marginTop: isMobile ? '-12%' : "24px"
    }}
    imageStyle={{
      scale: isMobile ? 1.05 : 1.2,
    }}
  />
}

export default IndustrySpecificHeroSection
