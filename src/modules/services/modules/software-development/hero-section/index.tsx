import { HeroSection } from '@/shared/hero-section'
import './styles.scss'

const SoftwareDevelopmentHeroSection = () => {
  return (
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
        description="Zenmonk delivers scalable and secure enterprise software, providing end-to-end support from legacy modernization to deployment. We ensure optimal performance with solutions tailored to your business needs."
        url="/services/software.png"
      />
    </div>
  )
}

export default SoftwareDevelopmentHeroSection
