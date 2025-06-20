import Image from 'next/image'
import { Box } from '@mui/material'
import { dottedBg } from '@/assets/icons'
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
      <div style={{ position: 'relative', height:"100vh" }}>
        <Image
          src={dottedBg}
          alt="Dotted Line"
          fill
          className="absolute-image"
        />
      <AnimatedDiv>
        <HeroSection />
      </AnimatedDiv >
      </div>
      <Rating />
      <BusinessSection />
      <StandOutSection />
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
