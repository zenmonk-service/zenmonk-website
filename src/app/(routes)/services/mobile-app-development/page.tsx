import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ItSolutions from '@/modules/services/it-solutions'
import HeroSection from '@/modules/services/modules/mobile-app-development/hero-section'
import ReadyToTalkShared from '@/modules/services/shared/ready-to-talk'
import TechnologyTree from '@/modules/services/tech-tree'
import FAQ from '@/shared/faq'
import Rating from '@/shared/rating'

const MobileAppDevelopmentPage = () => {
  return (
    <div>
      <HeroSection />
      <Rating />
      <ItSolutions id="custom-app-development" />
      <TechnologyTree isTechTree noRandomIcons />
      <YourIdealChoice />
      <BusinessSectors />
      <DevelopmentProcess />
      <ReadyToTalkShared />
      <FAQ />
    </div>
  )
}

export default MobileAppDevelopmentPage
