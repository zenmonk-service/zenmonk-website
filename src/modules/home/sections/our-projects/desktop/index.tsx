'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { projects } from '@/modules/home/sections/our-projects/projects'
import useOnScreen from '@/shared/hooks/use-on-screen'
import { useScrollSmoother } from '@/shared/scroll-smoother/scroll-context'
import InfiniteScroll from './infinite-scroll'
import './styles.scss'

const OurProjectsDesktop = () => {
  const [projectIndex, setProjectIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const smootherRef = useScrollSmoother()
  const current = smootherRef?.current

  const isVisible = useOnScreen(sectionRef as any)

  useEffect(() => {
    if (isVisible && sectionRef.current) {
      if (current) {
        console.log(current)
        current.scrollTo(sectionRef.current, true, 'center center')
      }
    }
    setProjectIndex(0)
  }, [isVisible])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const atFirst = projectIndex === 0
      const atLast = projectIndex === projects.length - 1

      if ((e.deltaY > 0 && !atLast) || (e.deltaY < 0 && !atFirst)) {
        e.preventDefault()
        setProjectIndex((prev) => (e.deltaY > 0 ? prev + 1 : prev - 1))
      }
    }

    const sectionEl = sectionRef.current
    sectionEl?.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      sectionEl?.removeEventListener('wheel', handleWheel)
    }
  }, [projectIndex])

  const project = projects[projectIndex] || projects[0]

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        height: '100vh', // always full viewport
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1100,
      }}
    >
      <div
        className="our-work-container"
        style={{
          background: `url(${project?.imageUrl}) center/cover no-repeat`,
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <div className="shadow" />
        <AnimatePresence mode="wait">
          <motion.p
            key={`index-${project?.index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="our-work-card-count"
          >
            {String(project?.index).padStart(2, '0')}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={`title-${project.index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="our-work-card-title"
          >
            {project.title}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${project.index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="our-work-card-description"
          >
            {project.description}
          </motion.p>
        </AnimatePresence>

        <div className="our-work-card-images">
          <InfiniteScroll
            projects={projects}
            projectIndex={projectIndex}
            setProjectIndex={setProjectIndex}
          />
        </div>
      </div>
    </section>
  )
}

export default OurProjectsDesktop
