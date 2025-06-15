import { HeroSection } from '@/shared/hero-section'

const CloudComputingHeroSection = () => (
  <div
    style={{
      backgroundImage: `url('/services/cloud-background.png')`,
      backgroundSize: 'cover',
    }}
  >
    <HeroSection
      title="Building Secure,<br/> Scalable, and Reliable Cloud Solutions"
      highlightedText="Cloud Solutions"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      url="/services/cloud.png"
    />
  </div>
)

export default CloudComputingHeroSection
