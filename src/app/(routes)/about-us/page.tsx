import {
  BusinessSection,
  WhyChooseUsSection,
  AwardProofSection,
  StandOutSection,
  VisionSection,
  ContactUsSection,
  OurClientSection,
} from '@/modules/about-us/sections'
import HeroSection from '@/modules/about-us/sections/hero-section'
import AnimatedDiv from '@/shared/animated-div'

const About = () => {
  return (
    <div>
      <HeroSection />
      <BusinessSection />
      <StandOutSection />
      {/* 
      <AnimatedDiv>
        <WhyChooseUsSection />
      </AnimatedDiv>
      <AnimatedDiv>
        <AwardProofSection />
      </AnimatedDiv>
      <AnimatedDiv>
        <VisionSection />
      </AnimatedDiv>
      <AnimatedDiv>
        <ContactUsSection />
      </AnimatedDiv> */}
    </div>
  )
}

export default About
