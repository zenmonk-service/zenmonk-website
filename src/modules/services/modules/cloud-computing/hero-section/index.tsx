'use client'
import { HeroSection } from '@/shared/hero-section'
import MainHeroImage from './assets/cloud.svg?url'
import { useMediaQuery } from '@mui/material'
import CloudGroupImage from './assets/cloud-group.svg?url'
import Image from 'next/image'

const CloudSolutionsHeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 728px)')

  return (
    <div style={{ paddingTop: isMobile ? '0px' : 'max(80px, 6vw)', position: 'relative' }}>
      <HeroSection
        url={MainHeroImage}
        title="Building Secure,<br/>Scalable, and Reliable<br/><span>Cloud Solutions</span>"
        highlightedText="Cloud Solutions"
        buttonText="Accelerate Your Cloud Journey"
        description="We architect secure, scalable, and resilient multi-cloud environments tailored to your enterprise needs. Focusing on high availability and DevOps automation, we simplify your cloud infrastructure journey."
        style={isMobile ? { paddingTop: '105px' } : {}}
        imageStyle={{
          scale: isMobile ? 1.6 : 1.7,
          margin: '0 auto',
          display: 'block',
          marginLeft: isMobile ? "-14%" : '-15%',
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
