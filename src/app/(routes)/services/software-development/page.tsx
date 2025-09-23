import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ItSolutions from '@/modules/services/it-solutions'
import HeroSection from '@/modules/services/modules/software-development/hero-section'
import ReadyToStartSoftwareDev from '@/modules/services/modules/software-development/ready-to-start'
import TechnologyTree from '@/modules/services/tech-tree'
import FAQ from '@/shared/faq'
import Rating from '@/shared/rating'

const SoftwareDevelopmentPage = () => {
  const serviceId = 'software-development'
  return (
    <div>
      <HeroSection />
      <Rating />
      <ItSolutions id={serviceId} />
      <TechnologyTree />
      <DevelopmentProcess />
      <YourIdealChoice />
      <BusinessSectors />
      <ReadyToStartSoftwareDev />
      <FAQ />
    </div>
  )
}

export default SoftwareDevelopmentPage
