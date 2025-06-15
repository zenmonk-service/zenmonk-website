import { HeroSection } from '@/shared/hero-section'
import './styles.scss'

const SoftwareDevelopmentHeroSection = () => (
  <div
    className="container"
    style={{
      backgroundImage: `url("/services/software-background.png")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <HeroSection
      title="Software<br/>Development"
      highlightedText="Software"
      description="Zenmonk excels in custom enterprise software development, 
      delivering scalable and secure solutions. We provide end-to-end support
      from legacy modernization to deployment, ensuring optimal software performance tailored to your business needs."
      url='/services/software.png'
    />
  </div>
)

export default SoftwareDevelopmentHeroSection
