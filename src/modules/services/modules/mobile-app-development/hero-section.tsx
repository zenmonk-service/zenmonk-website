'use client'
import { HeroSection } from '@/shared/hero-section'

import { useMediaQuery } from '@mui/material'

const MobileAppDevelopment = () => {
  const isTabletRange = useMediaQuery('(min-width: 768px) and (max-width: 1000px)')
  return <div
    style={{
      backgroundImage: `url('/services/mobile-background.png')`,
      backgroundSize: 'contain',
      paddingTop: isTabletRange ? 'max(40px, 3vw)' : undefined,
    }}
  >
    <HeroSection
      url="/services/mobile.png"
      title="Mobile App Development For Future-Ready Businesses"
      highlightedText="App Development"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      style={{
        height: 'auto',
        aspectRatio: 'initial',
        paddingBottom: '20px',
      }}
      imageStyle={{
        scale: 0.9
      }}
    />
  </div>
}

export default MobileAppDevelopment
