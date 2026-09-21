
'use client'

import { useAppDispatch } from '@/store/hooks'
import { openContactModal } from '@/store/features/header/header-slice'
import BaseButton from '@/shared/button'
import HeroImage from './hero-image'
import Geometry from '@/shared/geometry'
import './styles.scss'

const HeroSection = () => {
  const dispatch = useAppDispatch()
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
              Zenmonk believes in the power of harmony between—
              Technology and Precision, Innovation and Mindfulness
            </p>
          </div>
          <BaseButton
            onClick={() => dispatch(openContactModal())}
            className="button"
            showArrow
          >
            Build Your Success Story
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
