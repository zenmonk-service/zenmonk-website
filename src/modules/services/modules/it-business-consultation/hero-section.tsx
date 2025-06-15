import { HeroSection } from '@/shared/hero-section'

const ItBusinessConsultationHeroSection = () => (
  <div
    style={{
      backgroundImage: `url("/services/it-background.png")`,
      backgroundSize: 'contain',
    }}
  >
    <HeroSection
      title="Driving Innovation with <br/> IT & Business Expertise"
      highlightedText="IT & Business Expertise"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      url="/services/it.png"
    />
  </div>
)

export default ItBusinessConsultationHeroSection
