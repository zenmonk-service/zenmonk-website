import Image from 'next/image'
import { Box } from '@mui/material'
import { dottedLine } from '@/assets/icons'
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
      <div className="dotted-image-wrapper">
        <Image
          src={dottedLine}
          alt="Dotted Line"
          fill
          className="absolute-image"
        />
      </div>
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
