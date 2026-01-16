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

  const [isResetting, setIsResetting] = useState(false)

  const handleSelect = (id: number) => {
    if (isResetting || id !== deck[0]) return

    if (id === 0 && bgStack.length === projects.length) {
      setIsResetting(true)

      // Step A: Project 4 returns
      setBgStack(prev => prev.filter(v => v !== 3))
      setDeck([3])

      setTimeout(() => {
        // Step B: Project 3 returns
        setBgStack(prev => prev.filter(v => v !== 2))
        setDeck([2, 3])

        setTimeout(() => {
          // Step C: Project 2 returns, reset to base state
          setBgStack([0])
          setDeck([1, 2, 3])
          setIsResetting(false)
        }, 1200)
      }, 1000)
      return
    }

    // 3️⃣ Normal Selection
    const nextDeck = deck.slice(1)

    if (nextDeck.length === 1 && nextDeck[0] === projects.length - 1) {
      setDeck([projects.length - 1, 0])
    } else {
      setDeck(nextDeck)
    }

    setBgStack(prev => {
      if (prev.includes(id)) return prev
      return [...prev, id]
    })
  }

  return (
    <section className="our-projects-section-wrapper">
      <div className="our-work-container">

        <AnimatePresence mode="popLayout">
          {bgStack.map((index, i) => (
            <motion.div
              key={index}
              className="shared-bg"
              layoutId={`project-${index}`}
              animate={{
                opacity: 1,
                scale: 1 - (bgStack.length - 1 - i) * 0.05,
                filter: `brightness(${1 - (bgStack.length - 1 - i) * 0.1})`
              }}
              exit={{
                x: isResetting ? 0 : '-100%',
                y: 0,
                opacity: 0,
                scale: isResetting ? 0 : 1,
                zIndex: isResetting ? 100 : i,
                transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] }
              }}
              style={{ zIndex: i }}
              transition={{
                duration: 1.2,
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
          <AnimatePresence mode="popLayout">
            {deck.map((id, index) => (
              <motion.div
                key={id}
                layoutId={`project-${id}`}
                className="card"
                onClick={() => handleSelect(id)}
                initial={{ opacity: 0, x: -200 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{
                  duration: 2.0,
                  ease: [0.16, 1, 0.3, 1],
                  // Stagger only used for initial appearance
                  delay: isResetting ? 0 : index * 0.1
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
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default OurProjectsDesktop
