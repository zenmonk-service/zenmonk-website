import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ItSolutions from '@/modules/services/it-solutions'
import HeroSection from '@/modules/services/modules/software-development/hero-section'
import ReadyToStartSoftwareDev from '@/modules/services/modules/software-development/ready-to-start'
import FAQ from '@/shared/faq'
import Rating from '@/shared/rating'
import { Box } from '@mui/material'
import TechnologyTree from '@/modules/services/tech-tree'


const SoftwareDevelopmentPage = () => {
  const serviceId = 'software-development'
  return (
    <div>
      <HeroSection />
      <Rating />
      <ItSolutions id={serviceId} />
      <TechnologyTree noRandomIcons isTechTree />
      <DevelopmentProcess />
      <YourIdealChoice />
      <BusinessSectors />
      <ReadyToStartSoftwareDev />
      <FAQ />
      <Box sx={{ height: "6.25vw", width: "100%", backgroundColor: "#fff" }} />
    </div>
  )
}

export default SoftwareDevelopmentPage
