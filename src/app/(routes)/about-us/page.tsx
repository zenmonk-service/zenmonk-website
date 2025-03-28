import { Box } from '@mui/material'
import Rating from '@/shared/rating'
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
import SectionWrapper from '@/shared/wrapper'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ReadyToStart from '@/modules/services/modules/software-development/ready-to-start'

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
