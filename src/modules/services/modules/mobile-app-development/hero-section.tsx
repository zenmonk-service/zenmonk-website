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
      buttonText="Build Your Mobile App"
      description="We build intuitive, high-performance mobile and web applications designed for seamless user engagement. From cross-platform apps to scalable backends, we turn innovative ideas into market-ready realities."
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
