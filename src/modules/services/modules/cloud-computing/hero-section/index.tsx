import { Toolbar } from '@mui/material'
import { HeroSection } from '@/shared/hero-section'
import SectionWrapper from '@/shared/wrapper'
import { CloudComputing as HeroImg } from '../assets'

const CloudComputing: React.FC = () => (
  <>
    <Toolbar/>
    <HeroSection
      title="Building Secure,<br/> Scalable, and Reliable Cloud Solutions"
      highlightedText="Cloud Solutions"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      image={HeroImg.src}
    />
  </>
)

export { CloudComputing }
