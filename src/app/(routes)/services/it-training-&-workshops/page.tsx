import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ItSolutions from '@/modules/services/it-solutions'
import HeroSection from '@/modules/services/modules/it-training/hero-section'
import ReadyToTalkShared from '@/modules/services/shared/ready-to-talk'
import TechnologyTree from '@/modules/services/tech-tree'
import FAQ from '@/shared/faq'
import Rating from '@/shared/rating'
import { Box } from '@mui/material'

const ItTrainingAndWorkshopsPage = () => {
  return (
    <div>
      <HeroSection />
      <Rating />
      <ItSolutions id='it-training-and-workshops'/>
      <Box sx={{ height: "6.25vw", width: "100%", backgroundColor: "#fff" }} />
      <TechnologyTree  isTechTree noRandomIcons/>
      <YourIdealChoice />
      <BusinessSectors />
      <DevelopmentProcess />
      <Box sx={{ height: "6.25vw", width: "100%", backgroundColor: "#fff" }} />
      <ReadyToTalkShared />
      <FAQ />
    </div>
  )
}

export default ItTrainingAndWorkshopsPage
