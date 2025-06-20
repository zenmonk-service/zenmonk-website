'use client'

import { useRouter } from 'next/navigation'
import BaseButton from '@/shared/button'
import OurPartners from '../our-partners'
import BallDecorator from './assets/ball-decorator.svg'
import HomeHeroImage from './assets/hero.svg'
import './styles.scss'

const HeroSection = () => {
  const router = useRouter()
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
          <BaseButton
            onClick={() => router.push('/contact')}
            className="button"
          >
            GET IN TOUCH
          </BaseButton>
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
