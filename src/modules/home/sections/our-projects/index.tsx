'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import CardSwap, { Card } from '@/animations/card-swap/card-swap'
import { projects } from '@/modules/home/sections/our-projects/projects'
import './styles.scss'

const OurProjects = () => {
  const [project, setProject] = useState(projects[0])
  let index = 1

  useEffect(() => {
    const interval = setInterval(() => {
      setProject(projects[index])
      index = (index + 1) % projects.length
    }, 5000)

    return () => clearInterval(interval) // cleanup
  }, [])

  return (
    <section className="panel" style={{ position: 'absolute', width: '100%' }}>
      <div
        className="our-work-container"
        style={{ background: `url(${project.imageUrl})`, position: 'relative' }}
      >
        <div className="shadow" style={{ zIndex: 1 }} />
        <AnimatePresence mode="wait">
          <motion.p
            style={{ zIndex: 0 }}
            key={`index-${project.index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="our-work-card-count"
          >
            {String(project.index).padStart(2, '0')}
          </motion.p>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={`index-${project.index}`}
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
            key={`index-${project.index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="our-work-card-description"
          >
            {project.description}
          </motion.p>
        </AnimatePresence>
        <CardSwap>
          <Card
            customClass="our-work-card"
            style={{
              background: 'url(/our-work/04.webp)',
            }}
          />
          <Card
            customClass="our-work-card"
            style={{
              background: 'url(/our-work/01.webp)',
            }}
          />
          <Card
            customClass="our-work-card"
            style={{
              background: 'url(/our-work/02.webp)',
            }}
          />
          <Card
            customClass="our-work-card"
            style={{
              background: 'url(/our-work/03.webp)',
            }}
          />
        </CardSwap>
      </div>
    </section>
  )
}

export default OurProjects
