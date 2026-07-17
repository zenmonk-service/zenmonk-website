'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMediaQuery } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import styles from './business-sectors.module.scss'
import SectorsListDesktop from './desktop'
import SectorsMobile from './mobile'

const BusinessSectors = () => {
  const isMobile = useMediaQuery('(max-width:1020px)')
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: '2.6vw',
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.0, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      },
    },
  }

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: '2.6vw',
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.0, 
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 1.0
      },
    },
  }

  return (
    <div className={styles.businessSectorContainer} ref={ref}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div className={styles.businessSectorTitleWrapper}>
            <SectionTitle
              className={styles.businessSectorTitle}
              text="Empowering Businesses Across Multiple Sectors"  
              markText="Sectors"
            />
          </div>
        </motion.div>
        <motion.div
          variants={descriptionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <SectionDescription
            className={styles.businessSectorDescription}
            text=" We deliver innovative software solutions across industries, empowering
            businesses to overcome challenges, drive growth, and achieve success"
          />
        </motion.div>
      </div>
      {isMobile ? <SectorsMobile /> : <SectorsListDesktop />}
    </div>
  )
}

export default BusinessSectors
