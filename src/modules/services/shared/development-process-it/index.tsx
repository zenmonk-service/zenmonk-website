'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './style.scss'

interface DevelopmentProcessITProps {
  title?: string
  highlightedText?: string
  showTitle?: boolean
}

const smoothEase = [0.16, 1, 0.3, 1]

const steps = [
  {
    id: 1,
    title: 'Conducting In-Depth Analysis',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#00D4CE',
    xPct: 12.0,  // 185 / 1538
    yPct: 56.2,  // 309 / 550
    isTop: false,
  },
  {
    id: 2,
    title: 'Impressive Designs',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#0078BF',
    xPct: 29.3,  // 451 / 1538
    yPct: 31.8,  // 175 / 550
    isTop: true,
  },
  {
    id: 3,
    title: 'Development',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#FF8031',
    xPct: 50.0,  // 769 / 1538
    yPct: 56.2,
    isTop: false,
  },
  {
    id: 4,
    title: 'Effectual Delivery & Support',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#DD57B0',
    xPct: 68.5,  // 1054 / 1538
    yPct: 31.8,
    isTop: true,
  },
  {
    id: 5,
    title: 'Partnership for Success',
    description: 'We all collaborate with you to gather and understand your business needs and objective',
    color: '#46D877',
    xPct: 88.9,  // 1367 / 1538
    yPct: 56.2,
    isTop: false,
  },
]

const DevelopmentProcessIT: React.FC<DevelopmentProcessITProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px' })

  return (
    <div className="dev-process-it" ref={containerRef}>

      <div className="dev-process-it__desktop">

        <motion.img
          src="/process-icons/process-path.svg"
          className="dev-process-it__bg"
          alt="Development process"
          draggable={false}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`dev-process-it__label ${step.isTop ? 'is-top' : 'is-bottom'}`}
            style={{ left: `${step.xPct}%`, top: `${step.yPct}%` }}
            initial={{ opacity: 0, y: step.isTop ? -15 : 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: step.isTop ? -15 : 15 }}
            transition={{ duration: 0.6, delay: index * 0.25 + 0.3, ease: smoothEase }}
          >
            <div className="dev-process-it__text">
              <h3 className="dev-process-it__title" style={{ color: step.color }}>
                {step.title}
              </h3>
              <p className="dev-process-it__desc">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="dev-process-it__mobile">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0
          return (
            <motion.div
              key={step.id}
              className={`dev-process-it__mobile-row ${isEven ? 'icon-left' : 'icon-right'}`}
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: smoothEase }}
            >
              <div className="dev-process-it__mobile-icon">
                <img src={`/process-icons/mobile-icon-${step.id}.svg`} alt={step.title} draggable={false} />
              </div>
              <div className={`dev-process-it__mobile-text ${isEven ? 'align-left' : 'align-right'}`}>
                <h3 className="dev-process-it__title" style={{ color: step.color }}>{step.title}</h3>
                <p className="dev-process-it__desc">{step.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default DevelopmentProcessIT
