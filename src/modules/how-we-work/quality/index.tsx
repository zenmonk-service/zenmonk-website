'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import DashedArrow from './assets/arrow.svg'
import Quotes from './assets/animated_path.svg'
import Background from './assets/background.svg'
import { StatsCircle } from './components/stats-circle'
import './styles.scss'

const Quality = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })
  return (
    <div ref={sectionRef} className="quality-hero-section-wrapper">
      <Background className="quality-background" />
      <div className="first-section">
        <div className="first-section-content">
          <SectionTitle
            align="left"
            className="quality-title"
            text="Our Promise of Quality Analysis"
            markText="Analysis"
            markTextProps={{
              style: {
                marginTop: '-0.4vw',
              },
            }}
          />
          <SectionDescription
            className="subheading"
            text="We deliver Zen-inspired precise, mindful solutions by integrating deep
            expertise with client collaboration— prioritizing transparency,
            innovation, and purposeful development to innovate impactful
            technology."
          />
        </div>

        <div className="stats-img-container">
          <StatsCircle
            percentage={70}
            value="350"
            label="Daily"
            subLabel="Stand-ups"
            color="#5CD65F"
            align="left"
          />
          <StatsCircle
            percentage={78}
            value="350"
            label="Sprint"
            subLabel="Planning"
            color="#6DD4DC"
            align="center"
          />
          <StatsCircle
            percentage={50}
            value="350"
            label="Backlog"
            subLabel="Refinement"
            color="#637BFF"
            align="right"
          />
        </div>
      </div>
      <div className="quality-img-container">
        <DashedArrow className="quality-img-dashed-arrow" />
        <motion.div
          initial={{ transform: 'rotateZ(0deg)', opacity: 1 }}
          animate={
            isInView
              ? { transform: 'rotateZ(-16deg)', opacity: 1 }
              : { transform: 'rotateZ(0deg)', opacity: 1 }
          }
          className="quality-img-1-container"
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: 'easeOut',
          }}
        >
          <Quotes className="quality-img-quotes" />
          <div className="quality-img-1" />
        </motion.div>
        <motion.div
          initial={{ transform: 'rotateZ(0deg)', opacity: 0 }}
          animate={
            isInView
              ? { transform: 'rotateZ(16deg)', opacity: 1 }
              : { transform: 'rotateZ(0deg)', opacity: 0 }
          }
          className="quality-img-2"
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: 'easeOut',
          }}
        />
      </div>
    </div>
  )
}

export default Quality
