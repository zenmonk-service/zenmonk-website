'use client'

import React from 'react'
import './style.scss'
import ProcessPath from './assets/process-path.svg'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import DevelopmentProcessItBusinessMobile from './mobile'

interface DevelopmentProcessItBusinessProps {
  title?: string
  highlightedText?: string
  showTitle?: boolean
}

const DevelopmentProcessItBusiness: React.FC<DevelopmentProcessItBusinessProps> = () => {
  const isMobile = useMediaQuery('(max-width: 1000px)')

  const steps = [
    {
      number: 1,
      title: 'Start a Conversation',
      description: 'Tell us your vision, big or small. Whether you need a custom solution.',
      color: '#00B0BC',
      iconBg: '#E0F7FA',
    },
    {
      number: 2,
      title: 'Choose Your Engagement',
      description: 'Tell us your vision, big or small. Whether you need a custom solution.',
      color: '#0062AE',
      iconBg: '#E8E6FF',
    },
    {
      number: 3,
      title: 'Review Your Options',
      description: 'Tell us your vision, big or small. Whether you need a custom solution.',
      color: '#8645DC',
      iconBg: '#FFF3E0',
    },
    {
      number: 4,
      title: 'Get Started & Get Results',
      description: 'Tell us your vision, big or small. Whether you need a custom solution.',
      color: '#0EA62A',
      iconBg: '#FCE4EC',
    },
    {
      number: 5,
      title: 'Experience the Benefits',
      description: 'Tell us your vision, big or small. Whether you need a custom solution.',
      color: '#FF764C',
      iconBg: '#FCE4EC',
    },
  ]

  // Render mobile version
  if (isMobile) {
    return <DevelopmentProcessItBusinessMobile />
  }

  // Render desktop version
  return (
    <div className="development-process-it-business">
      <div className="process-container">
        <ProcessPath className="process-path-svg" />
        <div className="steps-overlay">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-content">
                <h3 className="step-title" style={{ color: step.color }}>{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DevelopmentProcessItBusiness
