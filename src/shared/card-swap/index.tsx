'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { projects } from '@/modules/home/sections/our-work-section/project-list'
import './style.scss'
import CardSwap, { Card } from './swap'

const index = () => {
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
    <section style={{ position: 'relative' }}>
      <div
        className="our-work-container"
        style={{ background: `url(/01.png)` }}
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
        <CardSwap cardDistance={30} verticalDistance={70}>
          <Card customClass="one">
            <Box className="single-card-container">
              <Typography style={{ fontSize: '32px', color: 'white' }}>
                E-commerce
              </Typography>
            </Box>
            <h3 style={{ color: 'white', fontSize: 72 }}>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card customClass="2">
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>
    </section>
  )
}

export default index
