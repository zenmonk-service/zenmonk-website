import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { developmentProcessSteps } from '../development-steps'
import styles from './milestone.module.scss'

const decorativeBalls = [
  { size: 'clamp(8px, 0.8vw, 15px)', bg: '#E5E5E5', left: '14%', top: '62%' },
  { size: 'clamp(10px, 1vw, 20px)', bg: '#D91D65', left: '24.5%', top: '37%' },
  { size: 'clamp(6px, 0.6vw, 12px)', bg: '#E5E5E5', left: '28%', top: '52%' },
  { size: 'clamp(5px, 0.5vw, 10px)', bg: '#E5E5E5', left: '55.5%', top: '34%' },
  { size: 'clamp(5px, 0.5vw, 10px)', bg: '#C92C92', left: '46.5%', top: '42%' },
  { size: 'clamp(5px, 0.5vw, 10px)', bg: '#E5E5E5', left: '41%', top: '60%' },
  { size: 'clamp(4px, 0.4vw, 8px)', bg: '#1D5BB6', left: '58.5%', top: '59%' },
  { size: 'clamp(12px, 1.2vw, 24px)', bg: '#D9D9D9', left: '79%', top: '25%' },
  { size: 'clamp(11px, 1.1vw, 22px)', bg: '#7BA03D', left: '81.5%', top: '48%' },
  { size: 'clamp(8px, 0.8vw, 16px)', bg: '#402099', left: '69.5%', top: '44%' },
  { size: 'clamp(15px, 1.5vw, 30px)', bg: '#E5E5E5', left: '10%', top: '72%' },
  { size: 'clamp(7px, 0.7vw, 14px)', bg: '#E5E5E5', left: '74%', top: '37%' },
  { size: 'clamp(7px, 0.7vw, 14px)', bg: '#E5E5E5', left: '72%', top: '65%' },
  { size: 'clamp(10px, 1vw, 20px)', bg: '#86A74C', left: '66%', top: '88%' },
]

const baselineHeight = 'max(12px, 0.8vw)'
const ringPadding = 'max(4px, 0.6vw)'

const SIZES = {
  baselineHeight,
  circle: 'max(50px, 7.8vw)', 
  ringPadding,
  stemHeight: `calc(max(64px, 3.33vw) + (${baselineHeight} * 0.5) + (${ringPadding} * 2))`, 
  stemWidth: 'max(4px, 0.7vw)',
  contentWidth: 'max(120px, 15vw)',
  titleFont: 'max(18px, 1.2vw)',
  descFont: 'max(14px, 0.9vw)',
  numberFont: 'max(24px, 3.5vw)', 
}

const smoothEase = [0.16, 1, 0.3, 1];

const Milestone = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <div className={styles.milestoneContainer} ref={containerRef}>
        <div className={styles.timelineContainer}>
        
        <motion.div
          className={styles.baseline}
          style={{ 
            height: SIZES.baselineHeight,
            marginTop: `calc(${SIZES.baselineHeight} * -0.5)`,
            originX: 0
          }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 3, ease: "linear" }}
        />

        {decorativeBalls.map((ball, idx) => (
          <motion.div
            key={idx}
            style={{ 
              width: ball.size, 
              height: ball.size, 
              backgroundColor: ball.bg, 
              left: ball.left, 
              top: ball.top 
            }}
            className={styles.decorativeBall}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? {
              opacity: 0.8,
              scale: 1,
              y: [0, Math.random() * -15 - 5, 0],
              x: [0, Math.random() * 10 - 5, 0]
            } : { opacity: 0, scale: 0 }}
            transition={{
              opacity: { delay: idx * 0.1 + 0.5, duration: 0.8 },
              scale: { delay: idx * 0.1 + 0.5, duration: 0.8 },
              y: { duration: 4 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 5 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}

        {developmentProcessSteps.map((step, index) => {
          const totalNodes = developmentProcessSteps.length;
          
          const startX = 12;
          const endX = 88;
          const xPosPercent = startX + (index / (totalNodes - 1)) * (endX - startX);

          const waveAmplitude = Math.cos(index * Math.PI); 
          const isTopNode = waveAmplitude > 0;
          const delayBase = index * 0.45; 

          return (
            <div
              key={step.id}
              className={styles.nodeWrapper}
              style={{
                left: `${xPosPercent}%`,
                transform: `translate(-50%, -50%)`,
                width: 0,
                height: 0
              }}
            >
              {isTopNode ? (
                <div className={styles.topNode}>
                  
                  <motion.div 
                    className={styles.textContentTop}
                    style={{ width: SIZES.contentWidth }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1, delay: delayBase + 0.6, ease: smoothEase }}
                  >
                    <h3 
                      className={styles.stepTitle}
                      style={{ 
                        fontSize: SIZES.titleFont,
                        background: `linear-gradient(to right, ${step.colors[0]}, ${step.colors[1]})`, 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent' 
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className={styles.stepDesc} style={{ fontSize: SIZES.descFont }}>
                      {step.description}
                    </p>
                  </motion.div>

                  <motion.div 
                    className={styles.nodeOuterCircle}
                    style={{ 
                      width: SIZES.circle, 
                      height: SIZES.circle, 
                      padding: SIZES.ringPadding,
                      background: `linear-gradient(to bottom right, ${step.colors[0]}, ${step.colors[1]})`,
                      willChange: "transform, opacity",
                      WebkitBackfaceVisibility: "hidden",
                      backfaceVisibility: "hidden",
                      transformOrigin: "center center"
                    }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: delayBase + 0.4, ease: smoothEase }}
                  >
                    <div className={styles.nodeInnerCircle}>
                      <svg style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                        <text 
                          x="50%" 
                          y="50%" 
                          dominantBaseline="central"
                          textAnchor="middle" 
                          fill="#ffffff" 
                          stroke={step.colors[0]} 
                          strokeWidth="0.08em"
                          strokeLinejoin="round"
                          paintOrder="stroke fill"
                          style={{ 
                            fontFamily: 'var(--font-primary, "Montserrat", sans-serif)', 
                            fontWeight: 700, 
                            fontSize: SIZES.numberFont 
                          }}
                        >
                          {step.id}
                        </text>
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div 
                    className={`${styles.stem} ${styles.stemTop}`}
                    style={{ 
                      width: SIZES.stemWidth, 
                      height: SIZES.stemHeight, 
                      marginTop: `calc(${SIZES.ringPadding} * -2)`,
                      background: `linear-gradient(to bottom, ${step.colors[0]}, ${step.colors[1]})` 
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                    transition={{ duration: 1.5, delay: delayBase + 0.2, ease: smoothEase }}
                  />
                </div>
              ) : (
                <div className={styles.bottomNode}>
                  
                  <motion.div 
                    className={`${styles.stem} ${styles.stemBottom}`}
                    style={{ 
                      width: SIZES.stemWidth, 
                      height: SIZES.stemHeight, 
                      marginBottom: `calc(${SIZES.ringPadding} * -2)`,
                      background: `linear-gradient(to top, ${step.colors[0]}, ${step.colors[1]})` 
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                    transition={{ duration: 1.5, delay: delayBase + 0.2, ease: smoothEase }}
                  />

                  <motion.div 
                    className={styles.nodeOuterCircle}
                    style={{ 
                      width: SIZES.circle, 
                      height: SIZES.circle, 
                      padding: SIZES.ringPadding,
                      background: `linear-gradient(to top left, ${step.colors[0]}, ${step.colors[1]})`,
                      willChange: "transform, opacity",
                      WebkitBackfaceVisibility: "hidden",
                      backfaceVisibility: "hidden",
                      transformOrigin: "center center"
                    }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: delayBase + 0.4, ease: smoothEase }}
                  >
                    <div className={styles.nodeInnerCircle}>
                      <svg style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                        <text 
                          x="50%" 
                          y="50%" 
                          dominantBaseline="central"
                          textAnchor="middle" 
                          fill="#ffffff" 
                          stroke={step.colors[0]} 
                          strokeWidth="0.08em"
                          strokeLinejoin="round"
                          paintOrder="stroke fill"
                          style={{ 
                            fontFamily: 'var(--font-primary, "Montserrat", sans-serif)', 
                            fontWeight: 700, 
                            fontSize: SIZES.numberFont 
                          }}
                        >
                          {step.id}
                        </text>
                      </svg>
                    </div>
                  </motion.div>

                  <motion.div 
                    className={styles.textContentBottom}
                    style={{ width: SIZES.contentWidth }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 1, delay: delayBase + 0.6, ease: smoothEase }}
                  >
                    <h3 
                      className={styles.stepTitle}
                      style={{ 
                        fontSize: SIZES.titleFont,
                        background: `linear-gradient(to right, ${step.colors[0]}, ${step.colors[1]})`, 
                        WebkitBackgroundClip: 'text', 
                        WebkitTextFillColor: 'transparent' 
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className={styles.stepDesc} style={{ fontSize: SIZES.descFont }}>
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Milestone

