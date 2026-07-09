import BusinessSectors from '@/modules/services/business-sectors'
import DevelopmentProcess from '@/modules/services/development-process'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ItSolutions from '@/modules/services/it-solutions'
import { HeroSection } from '@/shared/hero-section'
import ReadyToTalkShared from '@/modules/services/shared/ready-to-talk'
import TechnologyTree from '@/modules/services/tech-tree'
import FAQ from '@/shared/faq'
import Rating from '@/shared/rating'
import HeroImage from '@/assets/services/display-icons/digital-transformation.svg?url'

const DigitalTransformationPage = () => {
  const serviceId = 'digital-transformation-and-automation'
  return (
    <div>
      <HeroSection
        url={HeroImage}
        title="Revolutionize Your Business<br/>with <span>Digital Transformation</span>"
        highlightedText="Digital Transformation"
        description="Looking to revolutionize your digital landscape? Together, let us navigate your digital route and equip your company with advanced analytics, seamless integration, and automation for sustained growth and agility."
        imageStyle={{
          scale: 1.2,
          margin: '0 auto',
          display: 'block',
        }}
      />
      <Rating />
      <ItSolutions id={serviceId} />
      <TechnologyTree serviceId={serviceId} />
      <YourIdealChoice />
      <BusinessSectors />
      <DevelopmentProcess />
      <ReadyToTalkShared />
      <FAQ />
      <div
        style={{
          height: 'max(80px, 6.25vw)',
          width: '100%',
          backgroundColor: '#fff',
        }}
      />
    </div>
  )
}

export default DigitalTransformationPage
