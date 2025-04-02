import { Toolbar } from '@mui/material'
import { HeroSection } from '@/shared/hero-section'
import SectionWrapper from '@/shared/wrapper'
import { Hero as HeroImg } from '../assets'

const MobileAppDevelopment: React.FC = () => (
  <SectionWrapper>
    <HeroSection
      title="Mobile&nbsp;App Development <br/>For Future-Ready<br/> Businesses"
      highlightedText='App Development'
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      image={HeroImg.src}
    />
  </SectionWrapper>
)

export { MobileAppDevelopment }
