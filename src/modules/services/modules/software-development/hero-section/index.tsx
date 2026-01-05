'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HeroSection } from '@/shared/hero-section'
import './styles.scss'
import innerIcons from './icon-positions/inner-icons'
import outerIcons from './icon-positions/outer-icons'
import { degToRad } from './icon-positions/icons-positions'

const pxToVw = (px: number, base = 1920) => `${(px / base) * 100}vw`

const SoftwareDevelopmentHeroSection = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  const getValue = (px: number) => {
    if (isMobile) {
      return `${px * 0.5}px`
    }
    return pxToVw(px)
  }

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
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
        title="Software<br/>Development"
        highlightedText="Software"
        description="Zenmonk delivers scalable and secure enterprise software, providing end-to-end support from legacy modernization to deployment. We ensure optimal performance with solutions tailored to your business needs."
        url="/services/software-development/engineer.png"
        imageStyle={{
          position: 'relative',
          zIndex: 10, // Person in the middle
          maxWidth: isMobile ? '350px' : '37.5vw',
          marginLeft: isMobile ? '0' : '-1vw',
          transform: isMobile
            ? 'scale(1.2) translateY(5%)'
            : 'scale(2) translateY(10%)',
        }}
      >
        <div className="doodle-container">
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
                initial={{ scale: 0, opacity: 0, z: 200 }}
                animate={{ scale: 1, opacity: 1, z: 0 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                style={{
                  left: getValue(x),
                  top: getValue(y),
                  zIndex: 5,
                  '--x': getValue(x),
                  '--y': getValue(y),
                } as React.CSSProperties}
              >
                <div className="icon-bg floating" style={{ animationDelay: `${i * 0.4}s` }}>
                  <Image src={icon.src} alt={icon.name} width={40} height={40} />
                </div>
              </motion.div>
            )
          })}


          {outerIcons.map((icon, i) => {
            const angleRad = degToRad(icon.angle)

            const r = icon.radius
            const x = Math.cos(angleRad) * r
            const y = -Math.sin(angleRad) * r

            return (
              <motion.div
                key={icon.id}
                className="orbit-icon"
                initial={{ scale: 0, opacity: 0, z: 200 }}
                animate={{ scale: 1, opacity: 1, z: 0 }}
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
