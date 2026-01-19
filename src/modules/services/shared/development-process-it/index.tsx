'use client'

import React from 'react'
import './style.scss'
import ProcessPath from './assets/process-path.svg'
import DevelopmentProcessMobile from './mobile'
import { useMediaQuery } from '@/hooks/useMediaQuery'

interface DevelopmentProcessITProps {
  title?: string
  highlightedText?: string
  showTitle?: boolean
}

const DevelopmentProcessIT: React.FC<DevelopmentProcessITProps> = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const steps = [
    {
      number: 1,
      title: 'Conducting In-Depth Analysis',
      description: 'We all collaborate with you to gather and understand your business needs and objective',
      color: '#00BCD4',
      iconBg: '#E0F7FA',
    },
    {
      number: 2,
      title: 'Impressive Designs',
      description: 'We all collaborate with you to gather and understand your business needs and objective',
      color: '#635BE1',
      iconBg: '#E8E6FF',
    },
    {
      number: 3,
      title: 'Development',
      description: 'We all collaborate with you to gather and understand your business needs and objective',
      color: '#FF6F00',
      iconBg: '#FFF3E0',
    },
    {
      number: 4,
      title: 'Effectual Delivery & Support',
      description: 'We all collaborate with you to gather and understand your business needs and objective',
      color: '#DD57B0',
      iconBg: '#FCE4EC',
    },
    {
      number: 5,
      title: 'Partnership for Success',
      description: 'We all collaborate with you to gather and understand your business needs and objective',
      color: '#43A047',
      iconBg: '#E8F5E9',
    },
  ]

  // Render mobile version
  if (isMobile) {
    return <DevelopmentProcessMobile />
  }

  // Render desktop version
  return (
    <div className="development-process-it">
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

export default DevelopmentProcessIT
