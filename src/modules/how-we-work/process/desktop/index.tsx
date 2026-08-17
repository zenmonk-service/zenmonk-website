'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { processes } from '../process'
import './styles.scss'

const processMetadata = [
  { angle: -90, align: 'left', color: '#2EC2CC' },
  { angle: -50, align: 'left', color: '#A263F5' },
  { angle: 0, align: 'top', color: '#6CC77D' },
  { angle: 50, align: 'right', color: '#3C95DB' },
  { angle: 90, align: 'right', color: '#FA579A' },
]

const ProcessDesktop = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="process-container">
        <div className="process-track">
          {processes.map((process, index) => {
            const { angle, align, color } = processMetadata[index]

            const radians = (angle * Math.PI) / 180
            const topPos = `calc(50% - 50% * ${Math.cos(radians)})`
            const leftPos = `calc(50% + 50% * ${Math.sin(radians)})`

            const textInitial: any = { opacity: 0, y: 0, x: 0 }
            const textAnimate: any = { opacity: 1, x: 0, y: 0 }
            
            if (align === 'left') textInitial.x = 20
            if (align === 'right') textInitial.x = -20
            if (align === 'top') {
              textInitial.y = 20
              textInitial.x = '-50%'
              textAnimate.x = '-50%'
            }

            return (
              <div
                className="process-node"
                key={process.title}
                style={{ top: topPos, left: leftPos }}
              >
                <motion.div
                  className={`text-content align-${align}`}
                  initial={textInitial}
                  animate={isInView ? textAnimate : textInitial}
                  transition={{ duration: 1.4, delay: 0.4 + index * 0.4 }}
                >
                  <h3 className="node-title" style={{ color }}>
                    {process.title}
                  </h3>
                  <p className="node-desc">{process.description}</p>
                </motion.div>

                <motion.div
                  className="icon-container"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{
                    duration: 1.2,
                    delay: index * 0.4,
                    type: 'spring',
                    bounce: 0.4,
                  }}
                >
                  <div
                    className="icon-inner"
                    style={{ backgroundColor: color }}
                  >
                    <process.Icon strokeWidth={2.5} />
                  </div>
                </motion.div>
              </div>
            )
          })}

          <div className="center-text-block">
            <motion.div
              className="heres"
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Here’s
            </motion.div>
            <motion.div
              className="how-we-work"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              How We Work
            </motion.div>
            <motion.div
              className="process"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              PROCESS
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessDesktop
