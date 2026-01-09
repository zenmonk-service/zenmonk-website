
'use client'

import { useRouter } from 'next/navigation'
import BaseButton from '@/shared/button'
import OurPartners from '../our-partners'
import './styles.scss'
import HeroImage from './hero-image'
import Geometry from '@/shared/geometry'

const HeroSection = () => {
  const router = useRouter()
  return (
    <section>
      <div className="hero-section-home">
        <div className="bg-polyhedron">
          <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M400 50L750 400L400 750L50 400L400 50Z" stroke="#E2E8F0" strokeWidth="0.5" />
            <path d="M400 50L50 400L400 750M400 50L750 400L400 750" stroke="#E2E8F0" strokeWidth="0.5" />
            <path d="M50 400H750" stroke="#E2E8F0" strokeWidth="0.5" />
            <path d="M400 50V750" stroke="#E2E8F0" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="150" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="5 5" />
          </svg>
        </div>
        <div className="container">
          <Geometry/>
          <div className="text-container">
            <h4 className="heading">
              Super Charge Your Business<br />{" "}
              Growth With <span>Efficient</span>, <span>Intelligent</span>,<br />
              <span>Versatile</span> Software Innovations
            </h4>
            <p className="description">
              It is a long established fact that a reader will be distracted by
              <br /> the readable content of a page when looking at its layout.
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
      <OurPartners />
    </section>
  )
}

export { HeroSection }
