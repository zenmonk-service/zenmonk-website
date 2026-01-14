import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { projects } from '@/modules/home/sections/our-projects/projects'
import { useScrollSmoother } from '@/shared/scroll-smoother/scroll-context'
import { setHeaderVisibility } from '@/store/features/header/header-slice'
import { useAppDispatch } from '@/store/hooks'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import './styles.scss'

const OurProjectsDesktop = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [bgStack, setBgStack] = useState<number[]>([0])

  const sectionRef = useRef<HTMLDivElement>(null)
  const smootherRef = useScrollSmoother()
  const dispatch = useAppDispatch()

  useGSAP(() => {
    if (!sectionRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onEnter: () => dispatch(setHeaderVisibility(true)),
      onLeave: () => dispatch(setHeaderVisibility(false)),
      onEnterBack: () => dispatch(setHeaderVisibility(true)),
      onLeaveBack: () => dispatch(setHeaderVisibility(false)),
    })

    return () => {
      trigger.kill()
      dispatch(setHeaderVisibility(false))
    }
  }, { scope: sectionRef })

  const project = projects[activeIndex]

  const MAX_STACK = 5

  const handleSelect = (index: number) => {
    setBgStack(prev => {
      const filtered = prev.filter(i => i !== index)
      return [index, ...filtered].slice(0, MAX_STACK)
    })

    setActiveIndex(index)
  }

  // Calculate the next projects to show in the deck
  const deckItems = projects
    .map((_, i) => projects[(activeIndex + i + 1) % projects.length])
    .slice(0, projects.length - 1)

  return (
    <section
      ref={sectionRef}
      className="our-projects-section-wrapper"
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1100,
      }}
    >
      <div className="our-work-container">
        {/* ✅ BACKGROUND STACK */}
        <div className="background-stack">
          {bgStack.map((index, layer) => {
            const isTop = layer === 0

            return (
              <motion.div
                key={`${index}-${layer}`}
                className="background"
                layoutId={isTop ? `project-${index}` : undefined}
                style={{ zIndex: bgStack.length - layer }}
                initial={isTop ? { scale: 0.8, opacity: 0 } : false}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1], // fluid ease-out
                }}
              >
                <Image
                  src={projects[index].imageUrl}
                  alt=""
                  fill
                  priority={isTop}
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            )
          })}
        </div>


        <div className="shadow" />

        <motion.p
          key={`index-${activeIndex}`}
          initial={{ opacity: 0, y: 2.6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="our-work-card-count"
        >
          {String(project.index).padStart(2, '0')}
        </motion.p>

        <div className="project-detail-content">
          <motion.p
            key={`title-${activeIndex}`}
            initial={{ opacity: 0, x: -1.56 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="our-work-card-title"
          >
            {project.title}
          </motion.p>

          <motion.p
            key={`desc-${activeIndex}`}
            initial={{ opacity: 0, y: 1.04 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="our-work-card-description"
          >
            {project.description}
          </motion.p>
        </div>

        {/* DECK */}
        <div className="deck">
          <AnimatePresence mode="popLayout">
            {deckItems.map((project) => {
              const originalIndex = projects.findIndex(p => p.index === project.index)

              return (
                <motion.div
                  key={project.index}
                  layout
                  layoutId={`project-${originalIndex}`}
                  className="card"
                  initial={{ scale: 0.8, opacity: 0, x: 100 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut'
                  }}
                  onClick={() => handleSelect(originalIndex)}
                  style={{ marginRight: '1.25vw' }}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default OurProjectsDesktop
