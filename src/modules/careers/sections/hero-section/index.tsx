
'use client'

import { useRouter } from 'next/navigation'
import BaseButton from '@/shared/button'
import './styles.scss'
import HeroImage from './hero-image'
import Decorator from "./assets/decorator.svg"

const HeroSection = () => {
  const router = useRouter()
  return (
    <section>
      <div className="hero-section-d">
        <Decorator className="decorator" />
        <Decorator className="decorator-2" />
        <div className="container">
          <div className="text-container">
            <h4 className="heading">
              <span>Join Our Team</span> and Make <br />an Impact in Tech
            </h4>
            <p className="description">
              We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions.
            </p>
          </div>
          <BaseButton
            onClick={() => router.push('/contact')}
            className="button"
          >
            EXPLORE MORE
          </BaseButton>
        </div>
        <div className="hero-visual">
          <HeroImage />
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
