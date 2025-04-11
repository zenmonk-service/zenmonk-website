import { Box } from '@mui/material'
import { Odometer } from '@/modules/home/odometer'
import {
  ServiceSection,
  HeroSection,
  TechSolutionSection,
  OurWorkSection,
  WhyChooseUsSection,
  ClientSatisfaction,
} from '@/modules/home/sections'
import OurPartners from '@/modules/home/sections/our-partners'
import Testimony from '@/modules/home/testimony'
import AnimatedDiv from '@/shared/animated-div'
import FAQ from '@/shared/faq'
import SectionWrapper from '@/shared/wrapper'

const page = () => {
  return (
    <Box>
        <HeroSection />
        <OurPartners />
        <AnimatedDiv>
          <ServiceSection />
        </AnimatedDiv>
        <AnimatedDiv>
          <TechSolutionSection />
        </AnimatedDiv>
        <AnimatedDiv>
        <OurWorkSection />
      </AnimatedDiv>
      <Box sx={{overflow:"hidden"}}>
      <SectionWrapper>
        <AnimatedDiv>
          <WhyChooseUsSection />
        </AnimatedDiv>
      </SectionWrapper>
      <AnimatedDiv>
        <Odometer />
      </AnimatedDiv>
      </Box>
      <AnimatedDiv>
        <ClientSatisfaction />
      </AnimatedDiv>
      <AnimatedDiv>
        <FAQ />
      </AnimatedDiv>
      {/*

      <AnimatedDiv>
        <Testimony />
      </AnimatedDiv> */}
    </Box>
  )
}

export default page
