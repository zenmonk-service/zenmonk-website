
'use client'

import { useRouter } from 'next/navigation'
import BaseButton from '@/shared/button'
import './styles.scss'
import HeroImage from './hero-image'
import Decorator from "./assets/decorator.svg"
import { HeroSection } from '@/shared/hero-section'
import Hero from "./assets/hero.svg?url"


const CareerHeroSection = () => {
  const router = useRouter()
  return (
    <section>
      <div className="hero-section-d">
        <Decorator className="decorator" />
        <Decorator className="decorator-2" />

        <HeroSection
          title="Join Our Team and Make an Impact in Tech"
          highlightedText="Join Our Team"
          description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
          url={Hero}
          imageStyle={{
            position: 'relative',
            zIndex: 10,
            scale: 0.9,
          }}
        />

      </div>
    </section>
  )
}

export default CareerHeroSection
