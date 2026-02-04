'use client'
import { HeroSection } from '@/shared/hero-section'
import HeroImage from './assets/cloud.svg?url'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const CloudSolutionsHeroSection = () => {

  const isMobile = useMediaQuery('(max-width: 728px)')

  return <HeroSection
    url={HeroImage}
    title="Building Secure,<br/>Scalable, and Reliable<br/><span>Cloud Solutions</span>"
    highlightedText="Cloud Solutions"
    description="Need a cloud solution that adapts to your business needs? We design agile, scalable, and secure cloud environments, allowing you to focus on growth while we manage the technical complexities."
    imageStyle={{
      scale: isMobile ? 1.4 : 1.2,
      margin: '0 auto',
      display: 'block',
      marginLeft: isMobile ? "-10%" : ''
    }}
  />
}

export default CloudSolutionsHeroSection
