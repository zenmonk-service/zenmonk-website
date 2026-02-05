'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { processes } from '../process'
import './styles.scss'

const ProcessDesktop = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <div className="process-section-wrapper" ref={sectionRef}>
      <div className="process-visual-container">
        <div className="process-visual-track" />
        {processes.map((process) => {
          return (
            <div
              className={`${process.className} process-node`}
              key={process.title}
            >
              <motion.div
                className="process-node-text"
                initial={process.animations.initial}
                animate={isInView ? process.animations.animate : process.animations.initial}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
              >
                <div className="title">{process.title}</div>
                <div className="description">{process.description}</div>
              </motion.div>
              <motion.div
                key={process.title}
                className="process-item-icon"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: 'backOut',
                }}
              >
                <div className="circle">
                  <process.Icon />
                </div>
              </motion.div>
            </div>
          )
        })}

        <div className="center-heading-container">
          <motion.div
            className="heres-text"
            initial={{ y: '-100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            Here’s
          </motion.div>
          <motion.div
            className="how-we-work-text"
            initial={{ x: '100%', opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            How We Work
          </motion.div>
          <motion.div
            className="process-text"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            PROCESS
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProcessDesktop
