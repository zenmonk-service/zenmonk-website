import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ItSolutions from '@/modules/services/it-solutions'
import HeroSection from '@/modules/services/modules/product-development/hero-section'
import ReadyToTalkProductDevelopment from '@/modules/services/modules/product-development/ready-to-talk'
import TechnologyTree from '@/modules/services/tech-tree'
import FAQ from '@/shared/faq'
import Rating from '@/shared/rating'
import { Box } from '@mui/material'

const ProductDevelopmentPage = () => {
  return (
    <div>
      <HeroSection />
      <Rating />
      <ItSolutions id='product-development' />
      <TechnologyTree isTechTree noRandomIcons/>
      <YourIdealChoice />
      <BusinessSectors />
      <DevelopmentProcess />
      <ReadyToTalkProductDevelopment />
      <FAQ />
      <Box sx={{ height: "max(80px,6.25vw)", width: "100%", backgroundColor: "#fff" }} />
    </div>
  )
}

export default ProductDevelopmentPage
