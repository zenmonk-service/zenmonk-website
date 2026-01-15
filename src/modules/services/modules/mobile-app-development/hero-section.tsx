import { HeroSection } from '@/shared/hero-section'

const MobileAppDevelopment = () => (
  <div
    style={{
      backgroundImage: `url('/services/mobile-background.png')`,
      backgroundSize: 'contain',
    }}
  >
    <HeroSection
      url="/services/mobile.png"
      title="Mobile App Development For Future-Ready Businesses"
      highlightedText="App Development"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      imageStyle={{
        scale: 1.2,
      }}
    />
  </div>
)

export default MobileAppDevelopment
