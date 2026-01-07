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

const stepIcons = [Step1, Step2, Step3, Step4, Step5, Step6]

const steps = [
  {
    id: 1,
    title: 'Conducting In-Depth Analysis',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#00D4CE',
    markerX: 256,
    markerY: 5,
  },
  {
    id: 2,
    title: 'Impressive Designs',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#0078BF',
    markerX: 960,
    markerY: 125,
  },
  {
    id: 3,
    title: 'Development',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#FF8546',
    markerX: 402,
    markerY: 263,
  },
  {
    id: 4,
    title: 'Potential Testing & Monitoring',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#A263F5',
    markerX: 1300,
    markerY: 347,
  },
  {
    id: 5,
    title: 'Effectual Delivery & Support',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#DD57B0',
    markerX: 498,
    markerY: 516,
  },
  {
    id: 6,
    title: 'Partnership for Success',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#22B553',
    markerX: 1208,
    markerY: 624,
  },
]

const StepTitlePlate = ({
  title,
  color,
  icon,
}: {
  title: string
  color: string
  icon: React.ReactNode
}) => {
  return (
    <div className="step-title-plate">
      <div className="plate-icon-wrapper">{icon}</div>
      <span className="plate-text" style={{ color }}>
        {title}
      </span>
    </div>
  )
}


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
        <div className="road-svg-wrapper">
          <div className="road-svg-container">
            <svg
              width="1920"
              height="749"
              viewBox="0 0 1920 749"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="road-svg"
            >
              <defs>
                <mask id="road-mask">
                  <path
                    d="M-34 48C49.5345 51.1473 1006.79 128.144 1006.79 185.188C1006.79 243.213 407.487 185.188 407.487 318.162C407.487 432 1310.2 301.245 1354.44 393.303C1398.68 485.362 562.078 440.513 527.763 522.736C462.011 680.286 1000.55 694.866 1286.85 694.866C1558.5 694.866 2001 724.5 2001 748.5"
                    stroke="white"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                  />
                </mask>
              </defs>

              <path
                d="M-34 48C49.5345 51.1473 1006.79 128.144 1006.79 185.188C1006.79 243.213 407.487 185.188 407.487 318.162C407.487 432 1310.2 301.245 1354.44 393.303C1398.68 485.362 562.078 440.513 527.763 522.736C462.011 680.286 1000.55 694.866 1286.85 694.866C1558.5 694.866 2001 724.5 2001 748.5"
                stroke="#CACACA"
                strokeWidth="4"
                strokeDasharray="15 15"
                strokeLinecap="round"
                strokeLinejoin="round"
                mask="url(#road-mask)"
              />
            </svg>

            {/* ------------------------- STEP CARDS ------------------------- */}
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`step-text marker-${index + 1}`}
                style={{
                  left: `${(step.markerX / 1920) * 100}%`,
                  top: `${(step.markerY / 749) * 100}%`,
                }}
              >
                {/* Connector Line and Dot */}
                <div className="connector">
                  <div className="connector-line" />
                  <div className="connector-dot" style={{ backgroundColor: step.color }} />
                </div>

                <StepTitlePlate
                  title={step.title}
                  color={step.color}
                  icon={
                    <Image
                      src={stepIcons[index]}
                      alt={`Step ${index + 1}`}
                      width={150}
                      height={150}
                      className="plate-image"
                    />
                  }
                />
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          {/* ------------------------- WATERMARK ------------------------- */}
          <div className="monk-watermark">
            <Image src={MonkWatermark} alt="Monk Watermark" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentProcessRoad
