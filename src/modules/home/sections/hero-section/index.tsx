'use client'

import { useRouter } from 'next/navigation'
import BaseButton from '@/shared/button'
import OurPartners from '../our-partners'
import BallBg from './assets/ball-bg.svg'
import Ball from './assets/ball.svg'
import HeroImage from './icon-container/hero-image'
import './styles.scss'

const HeroSection = () => {
  const router = useRouter()
  return (
    <section>
      <div className="hero-section-d">
        {/* <BallDecorator className="ball-decorator" /> */}
        <div className="light-bg"></div>
        <Ball className="ball-decorator" />
        <BallBg className="ball-bg" />
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
        <HeroImage />
      </div>
      <OurPartners />
    </section>
  )
}

export { HeroSection }
