'use client'
import { useMediaQuery } from '@mui/material'
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
      description="We drive measurable business acceleration through data-backed growth marketing and conversion funnels. Leveraging predictive analytics and targeted campaigns, we amplify your brand and maximize revenue." />
  </div>
}

export default GrowthMarketingHeroSection
