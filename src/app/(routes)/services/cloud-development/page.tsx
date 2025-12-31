import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ItSolutions from '@/modules/services/it-solutions'
import HeroSection from '@/modules/services/modules/cloud-computing/hero-section'
import ReadyToTalkShared from '@/modules/services/shared/ready-to-talk'
import TechnologyTree from '@/modules/services/tech-tree'
import FAQ from '@/shared/faq'

const CloudDevelopmentPage = () => {
  return (
    <div>
      <HeroSection />
      <ItSolutions id="cloud-development" />
      <TechnologyTree />
      <DevelopmentProcess />
      <YourIdealChoice />
      <BusinessSectors />
      <ReadyToTalkShared />
      <FAQ />
    </div>
  )
}

export default CloudDevelopmentPage
