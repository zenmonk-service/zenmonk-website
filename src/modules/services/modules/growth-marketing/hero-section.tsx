import { HeroSection } from '@/shared/hero-section'

const GrowthMarketingHeroSection = () => (
  <div
    style={{
      backgroundImage: `url('/services/growth-background.png')`,
      backgroundSize: 'contain',
    }}
  >
    <HeroSection
      url="/services/growth.png"
      title="Growth & Marketing<br/> That Drives Real Results"
      highlightedText="Growth & Marketing"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
    />
  </div>
)

export default GrowthMarketingHeroSection
