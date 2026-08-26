'use client'

import { useRef } from 'react'
import { useMediaQuery } from '@mui/material'
import { motion, useInView } from 'framer-motion'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import SectionImage from './image'
import { getTreeIconsByServiceId } from './service-mapper'
import styles from './tech-tree.module.scss'

interface TechnologyTreeProps {
  serviceId: string
}

const TechnologyTree = ({ serviceId }: TechnologyTreeProps) => {
  const isMobile = useMediaQuery('(max-width:700px)')
  const { treeIcons, background: BackgroundComponent } = getTreeIconsByServiceId(serviceId)
  
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
        duration: 0.5, 
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
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 0.15
      },
    },
  }

  return (
    <div className={styles.techTreeContainer} ref={ref}>
      <div className={styles.techTreeBackground}>
        <BackgroundComponent />
      </div>
      <div className={styles.techTreeRight}>
        <div className={styles.techTreeLeft}>
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <SectionTitle
              text={`Zen Tech Wonders We\nExcel In Innovation &\nExcellence`}
              markText="Excellence"
              align={isMobile ? 'center' : 'left'}
              className={styles.techTreeHeading}
            />
          </motion.div>

          <motion.div
            variants={descriptionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <SectionDescription
              className={styles.techTreeDescription}
              text="We lead the way in technological innovation, consistently delivering solutions that transform industries. Our commitment to excellence helps businesses and individuals achieve more by streamlining processes, enhancing security, and fostering sustainable growth. Through our expertise and dedication, we empower teams to navigate complex digital landscapes and unlock their full potential in an ever-evolving market."
            />
          </motion.div>
        </div>
        <div className={styles.sectionImageWrap}>
          <div className={styles.sectionImageBackground}>
            <BackgroundComponent />
          </div>
          <div className={styles.sectionImageContent}>
            <SectionImage data={treeIcons} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyTree
