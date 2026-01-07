'use client'

import { LazySection } from '@/shared/lazy-section-wrapper'
import HeroSection from '@/modules/about-us/sections/hero-section'
import {
  AwardProofSection,
  BusinessSection,
  OurClientSection,
  WhyChooseUsSection,
} from '@/modules/about-us/sections'
import StandOutSection from '@/modules/about-us/sections/stand-out-section'

const About = () => {
  return (
    <div>
      <HeroSection />
      <BusinessSection />
      <StandOutSection />
      <WhyChooseUsSection />
      <AwardProofSection />
      <OurClientSection />
    </div>
  )
}

export default About
