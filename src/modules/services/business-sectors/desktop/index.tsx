'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Typography } from '@mui/material'
import { sectorsList } from '../sectors-list'
import styles from './selectors.module.scss'

const SectorsListDesktop = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [topValue, setTopValue] = useState(0)

  const handleClick = (height: number, index: number) => {
    const current = index - selectedIndex
    setTopValue((prev) => prev + current * height)
    setSelectedIndex(index)
  }

  return (
    <div className={styles.sectors}>
      <div className={styles.leftSection}>
        {sectorsList.map((sector, index) => {
          const isSelected = selectedIndex === index
          return (
            <Typography
              key={index}
              className={`${styles.sector}`}
              onClick={(e) => {
                handleClick(e.currentTarget.clientHeight, index)
              }}
              sx={{
                color: isSelected ? '#eb7c0d' : 'GrayText',
                zIndex: 1200,
                background: 'transparent',
                '&:hover': !isSelected
                  ? { color: 'var(--global-color-secondary)' }
                  : {},
              }}
            >
              {sector.sector}
            </Typography>
          )
        })}
        <motion.div
          className={`${styles.sector} ${styles.selected}`}
          style={{ position: 'absolute', zIndex: 1 }}
          animate={{ y: topValue }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          &nbsp;
        </motion.div>
      </div>
      <motion.div
        className={styles.rightSection}
        key={selectedIndex}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.25,
              delayChildren: 0.15,
            },
          },
        }}
      >
        {sectorsList[selectedIndex]?.services.map(
          ({ image: Icon, title, background }, index) => (
            <motion.div
              key={index}
              className={styles.services}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
            >
              <div className={styles.iconContainer} style={{ background }}>
                <Icon className={styles.icon} />
              </div>
              <p className={styles.serviceTitle}>{title}</p>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  )
}

export default SectorsListDesktop
