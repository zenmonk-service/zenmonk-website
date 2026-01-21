'use client'

import React, { useRef, useState, useEffect } from 'react'
import { projects } from '@/modules/home/sections/our-projects/projects'
import Image from 'next/image'
import './styles.scss'

const OurProjectsDesktop = () => {
  const [deck, setDeck] = useState<number[]>(projects.map((_, i) => i))
  const [selectedIds, setSelectedIds] = useState<number[]>([0])
  const deckRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!deckRef.current) return
    deckRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  }, [deck])

  useEffect(() => {
    const interval = setInterval(() => {
      if (deck.length > 1) {
        handleSelect(deck[1])
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [deck, selectedIds])

  const handleSelect = (id: number) => {
    const clickedIdx = deck.indexOf(id)
    if (clickedIdx === -1) return

    // Standard rotation: the clicked item becomes the first (active) item
    const nextDeck = [...deck.slice(clickedIdx), ...deck.slice(0, clickedIdx)]

    setDeck(nextDeck)
    setSelectedIds((prev) => [...prev, id].slice(-2))
  }

  const activeId = deck[0]
  const prevId = selectedIds.length > 1 ? selectedIds[selectedIds.length - 2] : null

  return (
    <section className="our-projects-section-wrapper">
      <div className="our-work-container">
        {/* Backdrop: Stays full screen to prevent gaps during 3s transition */}
        {prevId !== null && prevId !== activeId && (
          <div
            className="card prev-backdrop"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 5,
              width: '100vw',
              height: '100vh',
            }}
          >
            <Image
              src={projects[prevId].imageUrl}
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="shadow" style={{ position: 'absolute', inset: 0, zIndex: 2 }} />
          </div>
        )}

        <div className="project-details-container" style={{ zIndex: 500 }}>
          <div key={`count-${activeId}`} className="our-work-card-count">
            {projects[activeId].index.toString().padStart(2, '0')}
          </div>
          <div key={`content-${activeId}`} className="project-detail-content">
            <h2 className="our-work-card-title">{projects[activeId].title}</h2>
            <p className="our-work-card-description">{projects[activeId].description}</p>
          </div>
        </div>

        <div ref={deckRef} className="deck">
          {deck.map((id, index) => {
            const isActive = index === 0
            const thumbRight = `calc(4vw + ${(deck.length - 1 - index) * (12 + 1.25)}vw)`

            return (
              <div
                key={id}
                className={`card ${isActive ? 'active-card' : ''}`}
                style={{
                  position: 'absolute',
                  right: isActive ? 0 : thumbRight,
                  bottom: isActive ? 0 : '4vw',
                  width: isActive ? '100vw' : '12vw',
                  height: isActive ? '100vh' : '14.4vw',
                  zIndex: isActive ? 15 : 100 + index,
                  borderRadius: isActive ? 0 : '12px',
                  cursor: isActive ? 'default' : 'pointer',
                  transformOrigin: 'bottom right',
                  transition: 'all 3s cubic-bezier(0.16, 1, 0.3, 1)',
                  overflow: 'hidden',
                }}
                onClick={() => !isActive && handleSelect(id)}
              >
                <Image
                  src={projects[id].imageUrl}
                  alt=""
                  fill
                  priority={isActive}
                  sizes={isActive ? '100vw' : '25vw'}
                  style={{ objectFit: 'cover' }}
                />
                <div
                  className="shadow"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 2,
                    pointerEvents: 'none',
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurProjectsDesktop
