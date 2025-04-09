'use client'

import Image from 'next/image'
import { Box, useMediaQuery } from '@mui/material'
import { HeroSection } from '@/shared/hero-section'
import SectionWrapper from '@/shared/wrapper'
import { HeroBg, HeroImg } from '../assets'
import "./styles.scss"

const ProductDevelopment: React.FC = () => {
  const isLapTop = useMediaQuery('(max-width:1499px)')
  return (
    <>
      <Image src={HeroBg} alt="hero-bg" className="hero-bg"/>
      <Image src={HeroBg} alt="hero-bg" className="hero-bg-2"/>

      <>
        <HeroSection
          title="Digital Transformation & Automation to Accelerate Growth"
          highlightedText="Digital Transformation & Automation"
          description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
          image={HeroImg.src}
          imgWidth={isLapTop ? 400 : 525}
        />
      </>
    </>
  )
}

export { ProductDevelopment }
