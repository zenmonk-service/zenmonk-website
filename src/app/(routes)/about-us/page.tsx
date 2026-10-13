'use client'

import HeroSection from '@/modules/about-us/sections/hero-section'
import {
  BusinessSection,
  ContactUsSection,
  OurClientSection,
  VisionSection,
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
      <VisionSection/>
      <OurClientSection />
      <ContactUsSection showFlagsOnly />
    </div>
  )
}

export default About
