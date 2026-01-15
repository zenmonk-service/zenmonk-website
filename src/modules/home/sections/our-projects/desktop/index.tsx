'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React, { useRef, useState, useEffect } from 'react'
import { projects } from '@/modules/home/sections/our-projects/projects'
import Image from 'next/image'
import './styles.scss'

const OurProjectsDesktop = () => {
  const [deck, setDeck] = useState<number[]>(
    projects.map((_, i) => i).slice(1)
  )

  const [bgStack, setBgStack] = useState<number[]>([0])

  const historyRef = useRef<number[]>([])
  const deckRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!deckRef.current) return
    deckRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  }, [deck])

  const handleSelect = (index: number) => {
    // 1️⃣ Remove clicked card first (CRITICAL)
    setDeck(prev => prev.filter(i => i !== index))

    // 2️⃣ Promote card to background (keep last 2 for overlap)
    setBgStack(prev => {
      const newStack = [...prev, index]
      // Keep only the last 2 items to prevent DOM bloat, 
      // but ensure the *previous* BG stays while *new* one animates in.
      return newStack.slice(-2)
    })
    historyRef.current.push(index)

    // 3️⃣ Scroll deck after DOM update
    // 3️⃣ Scroll deck handled by useEffect

    // 4️⃣ Last card logic → refill deck
    if (deck.length === 1) {
      requestAnimationFrame(() => {
        const refill = projects.map((_, i) => i).filter(i => i !== index)
        historyRef.current = []
        setDeck(refill)
        // Scroll handled by useEffect
      })
    }
  }

  return (
    <section className="our-projects-section-wrapper">
      <div className="our-work-container">

        {/* ===== FULLSCREEN BACKGROUND STACK ===== */}
        <AnimatePresence mode="popLayout">
          {bgStack.map((index, i) => (
            <motion.div
              key={index}
              className="shared-bg"
              layoutId={`project-${index}`}
              style={{ zIndex: i }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src={projects[index].imageUrl}
                alt=""
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="shadow" />

        {/* ===== CONTENT ===== */}
        <div className="project-details-container">
          <AnimatePresence mode="wait">
            {bgStack.length > 0 && (
              <motion.div
                key={bgStack[bgStack.length - 1]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="our-work-card-count">
                  {projects[bgStack[bgStack.length - 1]].index.toString().padStart(2, '0')}
                </div>
                <div className="project-detail-content">
                  <h2 className="our-work-card-title">{projects[bgStack[bgStack.length - 1]].title}</h2>
                  <p className="our-work-card-description">{projects[bgStack[bgStack.length - 1]].description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ===== DECK ===== */}
        <div ref={deckRef} className="deck">
          {deck.map((id, index) => (
            <motion.div
              key={id}
              layout
              layoutId={`project-${id}`}
              className="card"
              onClick={() => handleSelect(id)}
              initial={{ opacity: 0, x: '100%' }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: (deck.length - 1 - index) * 0.1,
                  duration: 0.8,
                  ease: 'backOut',
                },
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src={projects[id].imageUrl}
                alt=""
                fill
                sizes="25vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OurProjectsDesktop
