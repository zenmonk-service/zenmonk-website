'use client'

import React, { useState, useEffect } from 'react'
import { projects } from '@/modules/home/sections/our-projects/projects'
import Image from 'next/image'
import { useMediaQuery } from '@mui/material'
import './styles.scss'

const OurProjectsDesktop = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [prevActiveIndex, setPrevActiveIndex] = useState<number | null>(null)
  const [morphActiveIndex, setMorphActiveIndex] = useState<number>(0)
  const [morphState, setMorphState] = useState<'full' | 'thumb'>('full')
  
  const isTablet = useMediaQuery('(min-width: 700px) and (max-width: 1024px)')

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % projects.length
      handleSelect(nextIndex)
    }, 5000)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex])

  useEffect(() => {
    if (morphState === 'thumb') {
      const raf = requestAnimationFrame(() => {
        setMorphState('full')
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [morphState])

  const handleSelect = (index: number) => {
    if (index === activeIndex) return
    setPrevActiveIndex(activeIndex)
    setMorphActiveIndex(index)
    setMorphState('thumb')
    setActiveIndex(index)
  }

  const baseWidth = isTablet ? 14 : 9
  const baseHeight = baseWidth * 1.25
  const gap = 1.25

  const getThumbRight = (index: number) => {
    return `calc(4vw + ${(3 - index) * (baseWidth + gap)}vw)`
  }

  return (
    <section className="our-projects-section-wrapper">
      <div className="our-work-container">
        {/* Previous Backdrop (static behind the morphing card to avoid blank space) */}
        {prevActiveIndex !== null && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 4,
            }}
          >
            <Image
              src={projects[prevActiveIndex].imageUrl}
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="shadow" style={{ position: 'absolute', inset: 0, zIndex: 5 }} />
          </div>
        )}

        {/* Morphing Active Card */}
        <div
          key={morphActiveIndex}
          style={{
            position: 'absolute',
            right: morphState === 'thumb' ? getThumbRight(morphActiveIndex) : 0,
            bottom: morphState === 'thumb' ? '4vw' : 0,
            width: morphState === 'thumb' ? `${baseWidth}vw` : '100%',
            height: morphState === 'thumb' ? `${baseHeight}vw` : '100%',
            minWidth: morphState === 'thumb' ? `${baseWidth}vw` : '100%',
            minHeight: morphState === 'thumb' ? `${baseHeight}vw` : '100%',
            borderRadius: morphState === 'thumb' ? '12px' : '0px',
            zIndex: 10,
            transition: 'all 2s cubic-bezier(0.16, 1, 0.3, 1)',
            overflow: 'hidden',
          }}
        >
          <Image
            src={projects[morphActiveIndex].imageUrl}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div
            className="shadow"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 11,
              pointerEvents: 'none',
              opacity: morphState === 'thumb' ? 0 : 1,
              transition: 'opacity 2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>

        {/* Text details */}
        <div className="project-details-container" style={{ zIndex: 500 }}>
          <div key={`count-${activeIndex}`} className="our-work-card-count">
            {projects[activeIndex].index.toString().padStart(2, '0')}
          </div>
          <div key={`content-${activeIndex}`} className="project-detail-content">
            <h2 className="our-work-card-title">{projects[activeIndex].title}</h2>
            <p className="our-work-card-description">{projects[activeIndex].description}</p>
          </div>
        </div>

        {/* Thumbnails Deck */}
        <div className="deck">
          <div
            style={{
              position: 'absolute',
              right: '4vw',
              bottom: '4vw',
              display: 'flex',
              gap: `${gap}vw`,
              pointerEvents: 'auto',
              alignItems: 'flex-end',
              zIndex: 1000,
            }}
          >
            {projects.map((project, idx) => {
              const isActive = idx === activeIndex

              return (
                <div
                  key={project.title}
                  className="card"
                  style={{
                    width: `${baseWidth}vw`,
                    height: `${baseHeight}vw`,
                    minWidth: `${baseWidth}vw`,
                    minHeight: `${baseHeight}vw`,
                    borderRadius: '12px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    opacity: 1,
                    transform: isActive ? 'scale(1.06)' : 'scale(1)',
                    outline: isActive ? '3px solid #eb7c0d' : '3px solid transparent',
                    outlineOffset: '2px',
                  }}
                  onClick={() => handleSelect(idx)}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="20vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${(activeIndex + 1) * 25}%` }} />
        </div>
      </div>
    </section>
  )
}

export default OurProjectsDesktop
