import BaseButton from '@/shared/button'
import Hero from './assets/hero.svg'
import './styles.scss'

const HeroSection = () => {
  return (
    <div className="career-hero-section-wrapper">
      <div className="hero-section">
        <div className="hero-section-text-wrapper">
          <h4 className="text-heading">
            Join Us At <span>ZENMONK</span>
            <br />
          </h4>
          <p className="text-description">
            Find your Zen in your career at Zenmonk. A monastery-like workplace
            for growth, new ideas, and making a difference, where our team is
            encouraged to discover balance and purpose in work.
          </p>
        </div>
        <BaseButton className="button">Apply NOW</BaseButton>
      </div>
      <div className="hero-section-image-wrapper">
        <Hero />
      </div>
    </div>
  )
}

export default HeroSection
