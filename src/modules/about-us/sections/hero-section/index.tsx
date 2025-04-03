
import About from '@/assets/images/about/about.png'
import { HeroSection as HeroComponent } from '@/shared/hero-section'
import SectionWrapper from '@/shared/wrapper'
import './styles.scss'

const HeroSection: React.FC = () => (
  <SectionWrapper>
      <HeroComponent
        title="Meet the Innovators<br/> Behind ZENMONK"
        highlightedText="ZENMONK"
        description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
        image={About.src}
      />
  </SectionWrapper>
)

export { HeroSection }
