import BaseButton from '@/shared/button'
import BallDecorator from './assets/ball-decorator.svg'
import HomeHeroImage from './assets/hero.svg'
import './styles.scss'
import OurPartners from '../our-partners'

const HeroSection = () => {
  return (
    <section>
      <div className="hero-section-d">
        <BallDecorator className="ball-decorator" />
        <div className="container">
          <div className="text-container">
            <h4 className="heading">
              Super Charge Your Business
              <br />
              Growth With
              <span>&nbsp;Efficient</span>,<span>&nbsp;Intelligent</span>,<br />
              <span>Versatile</span>, Software Innovations
            </h4>
            <p className="description">
              Zenmonk believes in the power of harmony between- Technology
              <br /> and Precision, Innovation and Mindfulness.
            </p>
          </div>
          <BaseButton className="button">EXPLORE MORE</BaseButton>
        </div>
        <div className="image-container">
          <HomeHeroImage />
        </div>
      </div>
      <OurPartners />
    </section>
  )
}

export { HeroSection }
