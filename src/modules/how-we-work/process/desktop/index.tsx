'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { processes } from '../process'
import './styles.scss'

const ProcessDesktop = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 1 })

  console.log(isInView)
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
                animate={
                  isInView
                    ? process.animations.animate
                    : process.animations.initial
                }
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                <div className="title" style={{ color: process.color }}>
                  {process.title}
                </div>
                <div className="description">{process.description}</div>
              </motion.div>
              <div key={process.title} className="process-item-icon">
                <div
                  className="circle"
                  style={{ backgroundColor: process.color }}
                >
                  <process.Icon />
                </div>
              </div>
            </div>
          )
        })}

        <div
          style={{
            position: 'absolute',
            bottom: '-1%',
            left: '51%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: '1.8vw',
              color: '#000',
            }}
          >
            Here’s
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: '3.2vw',
              background:
                'linear-gradient(75deg, #EB7C0D 4.02%, #FFA750 83.84%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2',
            }}
          >
            How We Work
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: '1.8vw',
              color: '#000',
              textTransform: 'uppercase',
            }}
          >
            PROCESS
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProcessDesktop
