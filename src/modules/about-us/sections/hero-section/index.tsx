
import About from '@/assets/images/about/about.png'
import { HeroSection as HeroComponent } from '@/shared/hero-section'
import './styles.scss'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'

const HeroSection: React.FC = () => (
  <AboutSectionWrapper>
      <HeroComponent
        title="Meet the Innovators<br/> Behind ZENMONK"
        highlightedText="ZENMONK"
        description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
        image={About.src}
      />
  </AboutSectionWrapper>
)

export { HeroSection }
