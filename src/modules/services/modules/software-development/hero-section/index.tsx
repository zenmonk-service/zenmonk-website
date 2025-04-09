import { HeroSection } from '@/shared/hero-section'
import SectionWrapper from '@/shared/wrapper'
import { Hero as HeroImg } from '../assets'

const SoftwareDevelopment: React.FC = () => (
  <HeroSection
    title="Reliable & Scalable <br/>Software Development"
    highlightedText="Software Development"
    description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
    image={HeroImg.src}
  />
)

export { SoftwareDevelopment }
