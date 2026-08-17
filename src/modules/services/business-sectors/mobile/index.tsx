'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Collapse, Divider } from '@mui/material'
import ArrowDownward from '../assets/shared/arrow-down.svg'
import { sectorsList } from '../sectors-list'
import styles from './mobile.module.scss'

const ArrowDown = motion.create(ArrowDownward)

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const SectorsMobile = () => {
  const [indices, setIndices] = useState<number[]>([])

  const handleOpen = (index: number) => {
    if (indices.includes(index)) {
      setIndices((prev) => prev.filter((idx) => idx !== index))
    } else {
      setIndices((prev) => [...prev, index])
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectorList}>
        {sectorsList.map(({ id, image: Icon, sector, services }, index) => {
          const isSelected = indices.includes(index)
          return (
            <motion.div
              key={id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className={`${styles.card} ${isSelected ? styles.expanded : ''}`}
            >
              <div
                className={styles.cardHeader}
                onClick={() => {
                  handleOpen(index)
                }}
              >
                <div className={styles.headerLeft}>
                  <div className={styles.iconContainer}>
                    <Icon className={styles.icon} />
                  </div>
                  <p className={styles.cardTitle}>{sector}</p>
                </div>
                <ArrowDown
                  animate={{ rotate: isSelected ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className={styles.arrow}
                />
              </div>
              <Collapse
                className={styles.expandedSectionContainer}
                in={isSelected}
                timeout="auto"
                unmountOnExit
              >
                {services.map(({ title, image: ServiceIcon, background }) => {
                  return (
                    <div key={title}>
                      <Divider />
                      <div key={title} className={styles.expandedSection}>
                        <div
                          className={styles.expandedSectionIconContainer}
                          style={{ background }}
                        >
                          <ServiceIcon className={styles.expandedSectionIcon} />
                        </div>
                        <p className={styles.expandedSectionTitle}>{title}</p>
                      </div>
                    </div>
                  )
                })}
              </Collapse>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SectorsMobile
