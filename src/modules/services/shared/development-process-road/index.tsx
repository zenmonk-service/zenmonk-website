'use client'

import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import MonkWatermark from '../development-process-wave/assets/monk.svg'

import Step1 from './assets/1.png'
import Step2 from './assets/2.png'
import Step3 from './assets/3.png'
import Step4 from './assets/4.png'
import Step5 from './assets/5.png'
import Step6 from './assets/6.png'

import './styles.scss'
import { steps, StepTitlePlate } from './steps'

const stepIcons = [Step1, Step2, Step3, Step4, Step5, Step6]

const DevelopmentProcessRoad = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      className={`development-process-road ${inView ? 'animate' : ''}`}
    >
      <div className="container">
        {/* Desktop Version - Road SVG */}
        <div className="road-svg-wrapper desktop-only">
          <div className="road-svg-container">
            <div className="road-svg-container">
              <svg
                width="1920"
                height="703"
                viewBox="0 0 1920 703"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="road-svg"
              >
                <path
                  d="M-34 1.5C49.5345 4.6473 1006.79 81.6442 1006.79 138.688C1006.79 196.713 407.487 138.688 407.487 271.662C407.487 385.5 1310.2 254.745 1354.44 346.803C1398.68 438.862 562.078 394.013 527.763 476.236C462.011 633.786 1000.55 648.366 1286.85 648.366C1558.5 648.366 2001 678 2001 702"
                  stroke="#DDDDDD"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="12 12"
                  fill="none"
                />
              </svg>
            </div>
            {/* ------------------------- STEP CARDS ------------------------- */}
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`step-text marker-${index + 1}`}
              >
                <StepTitlePlate
                  title={step.title}
                  color={step.color}
                  description={step.description}
                  icon={
                    <Image
                      src={stepIcons[index]}
                      alt={`Step ${index + 1}`}
                      width={150}
                      height={150}
                      style={{
                        width: '6.25vw',
                        height: 'auto',
                      }}
                      className="plate-image"
                    />
                  }
                />
              </div>
            ))}
          </div>

          {/* ------------------------- WATERMARK ------------------------- */}
          <div className="monk-watermark">
            <Image src={MonkWatermark} alt="Monk Watermark" />
          </div>
        </div>

        {/* Mobile Version - Vertical List */}
        <div className="mobile-steps-list mobile-only">
          {steps.map((step, index) => (
            <div key={step.id} className="mobile-step-item" >
              <div
                className="mobile-step-number"
                style={{
                  border: `0.1px solid ${step.color}`,
                  backgroundColor: '#fff',
                }}
              >
                <span style={{
                  backgroundColor: step.color,
                  color: '#fff',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1px'
                }}>
                  {index + 1}
                </span>
              </div>
              <div className="mobile-step-content">
                <h3 className="mobile-step-title" style={{ color: step.color }}>
                  {step.title}
                  <span className="title-underline" style={{ backgroundColor: step.color }}></span>
                </h3>
                <p className="mobile-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevelopmentProcessRoad
