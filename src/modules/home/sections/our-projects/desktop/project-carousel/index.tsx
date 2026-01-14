'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './project-carousel.module.scss'

interface Project {
  imageUrl: string
  title: string
  description: string
}

interface Props {
  projects: Project[]
}

export default function ProjectCarousel({ projects }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className={styles.container}>
      {/* BACKGROUND */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            key={activeIndex}
            layoutId={`project-${activeIndex}`}
            className={styles.background}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={projects[activeIndex].imageUrl}
              alt=""
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* DECK */}

    </div>
  )
}
