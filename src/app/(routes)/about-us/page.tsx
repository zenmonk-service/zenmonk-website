import { Box } from '@mui/material'
import {
  BusinessSection,
  HeroSection,
  WhyChooseUsSection,
  AwardProofSection,
  StandOutSection,
  VisionSection,
  ContactUsSection,
  OurClientSection,
} from '@/modules/about-us/sections'
import AnimatedDiv from '@/shared/animated-div'
import Rating from '@/shared/rating'

const About = () => {
  return (
    <Box>
      <AnimatedDiv>
        <HeroSection />
        <Rating />
      </AnimatedDiv>
      <AnimatedDiv>
        <BusinessSection />
      </AnimatedDiv>
      <AnimatedDiv>
        <StandOutSection />
      </AnimatedDiv>
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
        <OurClientSection />
      </AnimatedDiv>
      <AnimatedDiv>
        <ContactUsSection />
      </AnimatedDiv>
    </Box>
  )
}

export default About
