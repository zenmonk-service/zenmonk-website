'use client'
import { HeroSection } from '@/shared/hero-section'
import MainHeroImage from './assets/cloud.svg?url'
import CloudGroupImage from './assets/cloud-group.svg?url'
import Image from 'next/image'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const CloudSolutionsHeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 728px)')

  return (
    <div style={{ paddingTop: 'max(80px, 6vw)', position: 'relative' }}>
      <HeroSection
        url={MainHeroImage}
        title="Building Secure,<br/>Scalable, and Reliable<br/><span>Cloud Solutions</span>"
        highlightedText="Cloud Solutions"
        description="Need a cloud solution that adapts to your business needs? We design agile, scalable, and secure cloud environments, allowing you to focus on growth while we manage the technical complexities."
        imageStyle={{
          scale: isMobile ? 1.4 : 1.2,
          margin: '0 auto',
          display: 'block',
          marginLeft: isMobile ? "-10%" : '',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Image
          src={CloudGroupImage}
          alt="Cloud Accents Overlay"
          width={100}
          height={200}
          style={{
            position: 'absolute',
            top: isMobile ? '-15%' : '5%',
            right: isMobile ? '-1%' : '-8%',
            pointerEvents: 'none',
            zIndex: 2,
            width: isMobile ? '20vw' : '7.5vw',
            height: 'auto',
          }}
        />
      </HeroSection>
    </div>
  )
}

export default CloudSolutionsHeroSection
