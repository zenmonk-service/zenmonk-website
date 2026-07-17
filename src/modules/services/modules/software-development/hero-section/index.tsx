'use client'

import React, { CSSProperties, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HeroSection } from '@/shared/hero-section'
import innerIcons from './icon-positions/inner-icons'
import outerIcons from './icon-positions/outer-icons'
import './styles.scss'
const SoftwareDevelopmentHeroSection = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      let newScale = 0.7

      if (width >= 1024) {
        newScale = 0.53 + ((width - 1024) / (1920 - 1024)) * 0.47
      } else if (width >= 600) {
        newScale = 0.4 + ((width - 600) / (1024 - 600)) * 0.13
      } else if (width >= 380) {
        // Range between 380px and 600px
        newScale = 0.55
      } else {
        newScale = 0.5
      }

      setScale(newScale)
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
        position: 'relative',
        '--doodle-scale': scale,
      } as any}
    >
      <HeroSection
        title="Reliable & Scalable Software Development"
        highlightedText="Software Development"
        description="Zenmonk delivers scalable and secure enterprise software, providing end-to-end support from legacy modernization to deployment. We ensure optimal performance with solutions tailored to your business needs."
        url="/services/software-development/hero-graphic.svg"
        imageStyle={{
          position: 'relative',
          zIndex: 10,
          scale: 1,
          margin: '0 auto',
        }}
      >
        <div className="doodle-container">
          <div className="glow-circle" />
          <div className="dashed-circle-inner" />
          <div className="dashed-circle-outer" />
          {innerIcons.map((icon, i) => (
            <motion.div
              key={icon.id}
              className="orbit-icon"
              initial={{ scale: 0, opacity: 0, z: 200, x: '-50%', y: '-50%' }}
              animate={{ scale: 1, opacity: 1, z: 0, x: '-50%', y: '-50%' }}
              transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              style={{
                left: icon.x,
                top: icon.y,
                zIndex: parseFloat(icon.y) > 0 ? 15 : 5,
                '--x': icon.x,
                '--y': icon.y,
              } as CSSProperties}
            >
              <div className="icon-bg floating" style={{ animationDelay: `${i * 0.4}s` }}>
                <Image src={icon.src} alt={icon.name} width={40} height={40} />
              </div>
            </motion.div>
          ))}

          {outerIcons.map((icon, i) => (
            <motion.div
              key={icon.id}
              className="orbit-icon"
              initial={{ scale: 0, opacity: 0, z: 200, x: '-50%', y: '-50%' }}
              animate={{ scale: 1, opacity: 1, z: 0, x: '-50%', y: '-50%' }}
              transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
              style={{
                left: icon.x,
                top: icon.y,
                zIndex: parseFloat(icon.y) > 0 ? 15 : 5,
                '--x': icon.x,
                '--y': icon.y,
              } as React.CSSProperties}
            >
              <div className="icon-bg floating" style={{ animationDelay: `${i * 0.3 + 0.2}s` }}>
                <Image src={icon.src} alt={icon.name} width={40} height={40} />
              </div>
            </motion.div>
          ))}
        </div>
      </HeroSection>
    </div>
  )
}

export default SoftwareDevelopmentHeroSection
