import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ItSolutions from '@/modules/services/it-solutions'
import HeroSection from '@/modules/services/modules/growth-marketing/hero-section'
import ReadyToTalkShared from '@/modules/services/shared/ready-to-talk'
import TechnologyTree from '@/modules/services/tech-tree'
import FAQ from '@/shared/faq'
import Rating from '@/shared/rating'

const GrowthAndMarketing = () => {
  const serviceId = 'growth-and-marketing'
  return (
    <div>
      <HeroSection />
      <Rating />
      <ItSolutions id={serviceId} />
      <TechnologyTree serviceId={serviceId} />
      <DevelopmentProcess />
      <YourIdealChoice />
      <BusinessSectors />
      <ReadyToTalkShared />
      <FAQ />
      <div className="desktop-hidden-spacer" style={{ height: "max(80px, 6.25vw)", width: "100%", backgroundColor: "#fff" }} />
    </div>
  )
}

export default GrowthAndMarketing
