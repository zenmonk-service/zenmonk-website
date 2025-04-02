import { HeroSection } from '@/shared/hero-section'
import SectionWrapper from '@/shared/wrapper'
import { Hero as HeroImg } from '../assets'
import { Toolbar } from '@mui/material'

const ItBusinessConsultation: React.FC = () => (
  <SectionWrapper>
    <Toolbar/>
    <HeroSection
      title="Driving Innovation with <br/> IT & Business Expertise"
      highlightedText="IT & Business Expertise"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      image={HeroImg.src}
    />
  </SectionWrapper>
)

export { ItBusinessConsultation }
