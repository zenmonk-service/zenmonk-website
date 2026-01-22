'use client'

import React, { CSSProperties, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HeroSection } from '@/shared/hero-section'
import innerIcons from './icon-positions/inner-icons'
import outerIcons from './icon-positions/outer-icons'
import { degToRad } from './icon-positions/icons-positions'
import './styles.scss'

const pxToVw = (px: number, base = 1920) => `${(px / base) * 100}vw`

const SoftwareDevelopmentHeroSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [scale, setScale] = useState(1.1)

  const getValue = (px: number) => {
    if (isMobile) {
      return `${px * 0.5}px`
    }
    return pxToVw(px)
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScale(1.1)
        setIsMobile(true)
      } else {
        setIsMobile(false)
        const s = 1.0 + ((width - 768) / (1920 - 768)) * 0.4
        setScale(Math.min(Math.max(s, 1.0), 1))
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className="software-development-hero-container software-development-hero"
      style={{
        backgroundImage: `url("/services/software-background.png")`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <HeroSection
        title="Reliable & Scalable <br /> Software Development"
        highlightedText="Software Development"
        description="Zenmonk delivers scalable and secure enterprise software, providing end-to-end support from legacy modernization to deployment. We ensure optimal performance with solutions tailored to your business needs."
        url="/services/software-development/engineer.png"
        imageStyle={{
          position: 'relative',
          zIndex: 10, // Person in the middle
          scale: 1.1,
          marginLeft: isMobile ? '-5%' : '-5%',
          marginTop: isMobile ? '-10%' : '-8%'
        }}
      >
        <div className="doodle-container" style={{ transform: `scale(${scale})` }}>
          <div className="glow-circle-wrapper" style={{ zIndex: 1 }}>
            <Image
              src="/services/software-development/filled-circle.svg"
              className="glow-circle"
              width={500}
              height={500}
              alt="glow"
            />
          </div>
          <div className="dashed-circles-wrapper" style={{ zIndex: 2 }}>
            <Image
              src="/services/software-development/hollow.svg"
              className="dashed-circles"
              width={680}
              height={680}
              alt="dashed"
            />
          </div>

          {/* Icons - High Z-index with translateZ for 3D depth */}
          {innerIcons.map((icon, i) => {
            const angleRad = degToRad(icon.angle)

            const r = icon.radius
            const x = Math.cos(angleRad) * r
            const y = -Math.sin(angleRad) * r

            return (
              <motion.div
                key={icon.id}
                className="orbit-icon"
                initial={{ scale: 0, opacity: 0, z: 200, x: '-50%', y: '-50%' }}
                animate={{ scale: 1, opacity: 1, z: 0, x: '-50%', y: '-50%' }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                style={{
                  left: getValue(x),
                  top: getValue(y),
                  zIndex: 5,
                  '--x': getValue(x),
                  '--y': getValue(y),
                } as CSSProperties}
              >
                <div className="icon-bg floating" style={{ animationDelay: `${i * 0.4}s` }}>
                  <Image src={icon.src} alt={icon.name} width={40} height={40} />
                </div>
              </motion.div>
            )
          })}


          {outerIcons.map((icon, i) => {
            const angleRad = degToRad(icon.angle)

            const r = isMobile ? 340 : icon.radius
            const x = Math.cos(angleRad) * r
            const y = -Math.sin(angleRad) * r

            return (
              <motion.div
                key={icon.id}
                className="orbit-icon"
                initial={{ scale: 0, opacity: 0, z: 200, x: '-50%', y: '-50%' }}
                animate={{ scale: 1, opacity: 1, z: 0, x: '-50%', y: '-50%' }}
                transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
                style={{
                  left: getValue(x),
                  top: getValue(y),
                  zIndex: 5,
                  '--x': getValue(x),
                  '--y': getValue(y),
                } as React.CSSProperties}
              >
                <div className="icon-bg floating" style={{ animationDelay: `${i * 0.3 + 0.2}s` }}>
                  <Image src={icon.src} alt={icon.name} width={40} height={40} />
                </div>
              </motion.div>
            )
          })}

        </div>
      </HeroSection>
    </div>
  )
}

export default SoftwareDevelopmentHeroSection
