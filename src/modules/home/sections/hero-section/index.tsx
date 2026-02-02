
'use client'

import { useRouter } from 'next/navigation'
import BaseButton from '@/shared/button'
import HeroImage from './hero-image'
import Geometry from '@/shared/geometry'
import './styles.scss'

const HeroSection = () => {
  const router = useRouter()
  return (
    <div className="hero-section-home-container">
      <div className="hero-section-home">
        <div className="container">
          <Geometry />
          <div className="text-container">
            <h4 className="heading">
              Super Charge Your Business{" "}
              Growth With <span>Efficient</span>, <span>Intelligent</span>,{" "}
              <span>Versatile</span> Software Innovations
            </h4>
            <p className="description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
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
    </div>
  )
}

export { HeroSection }
