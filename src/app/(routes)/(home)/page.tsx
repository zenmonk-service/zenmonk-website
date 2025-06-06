import Box from '@mui/material/Box'
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
import FAQ from '@/shared/faq'
import SectionWrapper from '@/shared/wrapper'

const page = () => {
  return (
    <Box>
      <HeroSection />
      <OurPartners />
      <ServiceSection />
      <TechSolutionSection />
      <OurWorkSection />
      <Box sx={{ overflow: 'hidden' }}>
        <SectionWrapper>
          <WhyChooseUsSection />
        </SectionWrapper>
        <Odometer />
      </Box>
      <ClientSatisfaction />
      <FAQ />
      <Testimony />
    </Box>
  )
}

export default page
