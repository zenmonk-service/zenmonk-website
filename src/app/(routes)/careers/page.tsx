import { Box } from '@mui/material'
import { ContactUsSection } from '@/modules/about-us/sections'
import { HeroSection } from '@/modules/careers/sections/hero-section'
import InnovationExcellence from '@/modules/careers/sections/innovation-excellence-section'
import OpenPosition from '@/modules/careers/sections/open-position-section'
import PerkBenefits from '@/modules/careers/sections/perks-benefits-section'
import Showcases from '@/modules/careers/sections/show-case-section'
import TraditionsCustoms from '@/modules/careers/sections/tradition-custom-section'
import WorkCulture from '@/modules/careers/sections/work-culture-section'
import FAQ from '@/shared/faq'
import SectionWrapper from '@/shared/wrapper'

const page = () => {
  return (
    <Box>
      <SectionWrapper>
        <HeroSection />
        <OpenPosition />
        <PerkBenefits />
        <WorkCulture />
      </SectionWrapper>
      <Showcases />
      <SectionWrapper>
        <InnovationExcellence />
      </SectionWrapper>

      <TraditionsCustoms />
      <FAQ />
      <ContactUsSection />
    </Box>
  )
}

export default page
