import { HeroSection as HeroComponent } from '@/shared/hero-section'
import './styles.scss'

const HeroSection: React.FC = () => (
  <div className="about-hero-section-wrapper">
    <HeroComponent
      title="Meet the Innovators<br/> Behind ZENMONK"
      highlightedText="ZENMONK"
      description="We believe in ZenFusion, 
      merging technology with mindfulness. 
      As your partners in technological excellence,
      we transform values into action, 
      simplifying tech to deliver user-centered solutions."
      url='/about-us/about.png'
    />
  </div>
)

export { HeroSection }
