import BusinessSectors from '@/modules/services/business-sectors'
import { DevelopmentProcess } from '@/modules/services/modules/ai-based-softwares/hero-section/DevelopmentProcess'
import YourIdealChoice from '@/modules/services/ideal-choice'
import ItSolutions from '@/modules/services/it-solutions'
import HeroSection from '@/modules/services/modules/ai-based-softwares/hero-section'
import ReadyToTalkShared from '@/modules/services/shared/ready-to-talk'
import TechnologyTree from '@/modules/services/tech-tree'
import FAQ from '@/shared/faq'

const AiBasedSoftwaresPage = () => {
  const serviceId = 'ai-solutions'
  return (
    <div>
      <HeroSection />
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

export default AiBasedSoftwaresPage
