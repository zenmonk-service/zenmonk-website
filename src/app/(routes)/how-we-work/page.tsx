import { Box } from '@mui/material'
import { Innovation } from '@/modules/how-we-work/Innovation'
import { HeroSection } from '@/modules/how-we-work/hero-section'
import { Process } from '@/modules/how-we-work/process'
import { Quality } from '@/modules/how-we-work/quality'
import { ReadyToTalk } from '@/modules/how-we-work/ready-to-talk'
import { Review } from '@/modules/how-we-work/review'
import SectionWrapper from '@/shared/wrapper'
import FAQ from '@/shared/faq'

const page = () => {
  return (
    <Box>
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>
      <Process />
        <Quality />
      {/* <Review /> */}
      <Innovation />
      <SectionWrapper>
        <ReadyToTalk />
      </SectionWrapper>
      <FAQ />
    </Box>
  )
}

export default page
