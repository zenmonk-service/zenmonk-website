import { AwardProofSection, BusinessSection, WhyChooseUsSection } from '@/modules/about-us/sections'
import StandOutSection from '@/modules/about-us/sections/stand-out-section'
import HeroSection from '@/modules/about-us/sections/hero-section'

const About = () => {
  return (
    <div>
      <HeroSection />
      <BusinessSection />
      <StandOutSection />
      <WhyChooseUsSection />
      <AwardProofSection />
      {/* 
      <VisionSection />
      <ContactUsSection /> */}
    </div>
  )
}

export default About
