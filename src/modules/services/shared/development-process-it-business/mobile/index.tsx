'use client'

import React from 'react'
import { motion } from 'framer-motion'
import './style.scss'
import MobileIcon1 from '../assets/mobile-icon-1.svg'
import MobileIcon2 from '../assets/mobile-icon-2.svg'
import MobileIcon3 from '../assets/mobile-icon-3.svg'
import MobileIcon4 from '../assets/mobile-icon-4.svg'
import MobileIcon5 from '../assets/mobile-icon-5.svg'

const iconLeftVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.75, rotate: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.15,
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const iconRightVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.75, rotate: 12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.15,
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const contentLeftVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15 + 0.15,
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const contentRightVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15 + 0.15,
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

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
        {steps.map((step, index) => {
          const isEven = index % 2 !== 0 // Even items (2, 4) have icon on right
          const iconVariant = isEven ? iconRightVariants : iconLeftVariants
          const contentVariant = isEven ? contentRightVariants : contentLeftVariants

          return (
            <motion.div
              key={index}
              className="mobile-step"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4, margin: "0px 0px -50px 0px" }}
            >
              <motion.div
                className="mobile-step-icon"
                custom={index}
                variants={iconVariant}
              >
                <step.icon />
              </motion.div>

              <motion.div
                className="mobile-step-content"
                custom={index}
                variants={contentVariant}
              >
                <h3 className="mobile-step-title" style={{ color: step.color }}>
                  {step.title}
                </h3>
                <p className="mobile-step-description">{step.description}</p>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default DevelopmentProcessItBusinessMobile
