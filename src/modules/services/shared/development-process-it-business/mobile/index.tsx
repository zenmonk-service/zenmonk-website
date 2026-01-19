'use client'

import React from 'react'
import './style.scss'
import MobileIcon1 from '../assets/mobile-icon-1.svg'
import MobileIcon2 from '../assets/mobile-icon-2.svg'
import MobileIcon3 from '../assets/mobile-icon-3.svg'
import MobileIcon4 from '../assets/mobile-icon-4.svg'
import MobileIcon5 from '../assets/mobile-icon-5.svg'

const DevelopmentProcessItBusinessMobile: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Conducting In-Depth Analysis',
      description: 'We all collaborate with you to gather and understand your business needs and objective',
      color: '#00BCD4',
      icon: MobileIcon1,
    },
    {
      number: 2,
      title: 'Impressive Designs',
      description: 'We all collaborate with you to gather and understand your business needs and objective',
      color: '#635BE1',
      icon: MobileIcon2,
    },
    {
      number: 3,
      title: 'Development',
      description: 'We all collaborate with you to gather and understand your business needs and objective',
      color: '#FF6F00',
      icon: MobileIcon3,
    },
    {
      number: 4,
      title: 'Effectual Delivery & Support',
      description: 'We all collaborate with you to gather and understand your business needs and objective',
      color: '#DD57B0',
      icon: MobileIcon4,
    },
    {
      number: 5,
      title: 'Partnership for Success',
      description: 'We all collaborate with you to gather and understand your business needs and objective',
      color: '#43A047',
      icon: MobileIcon5,
    },
  ]

  return (
    <div className="development-process-mobile-business">
      <div className="mobile-timeline">
        {steps.map((step, index) => (
          <div key={index} className="mobile-step">
            <div className="mobile-step-icon">
              <step.icon />
            </div>
            <div className="mobile-step-content">
              <h3 className="mobile-step-title" style={{ color: step.color }}>
                {step.title}
              </h3>
              <p className="mobile-step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DevelopmentProcessItBusinessMobile
