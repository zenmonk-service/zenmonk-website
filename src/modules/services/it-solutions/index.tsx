'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Grid from '@mui/material/Grid2'
import { OurServices } from '@/app/(routes)/services/our-services'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import styles from './it-solution.module.scss'

const cardStyles = [
  { background: '#F0FCFF', fill: '#61DAFB' },
  { background: '#FCE6EB', fill: '#D0294E' },
  { background: '#EEF6ED', fill: '#539E43' },
  { background: '#FFF0E6', fill: '#FF6600' },
  { background: '#EBF1FD', fill: '#326CE5' },
  { background: '#F8F2FF', fill: '#B47BFF' },
]

// Custom variant that dynamically positions each card at the center of the grid.
// Percentage transforms are relative to each card's own size, making this responsive.
const cardVariants = {
  hidden: (i: number) => {
    // Determine row and column offsets to place the cards at the center of the grid.
    // Row 0 is indices 0, 1, 2; Row 1 is indices 3, 4, 5.
    let xOffset = '0%'
    let yOffset = '0%'

    // X Offset (horizontal center)
    if (i % 3 === 0) {
      xOffset = '110%' // Left card moves right to center
    } else if (i % 3 === 2) {
      xOffset = '-110%' // Right card moves left to center
    }

    // Y Offset (vertical center)
    if (i < 3) {
      yOffset = '60%' // Top row moves down to center
    } else {
      yOffset = '-60%' // Bottom row moves up to center
    }

    return {
      opacity: 0,
      scale: 0.2,
      x: xOffset,
      y: yOffset,
    }
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: '0%',
    y: '0%',
    transition: {
      delay: i * 0.15, // Smooth staggered start
      duration: 1.1,  // Slow and elegant unfolding speed
      ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out curve
    },
  }),
}

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

const ItSolutions = ({ id = 'software-development' }: { id?: string }) => {
  const serviceData = OurServices.find((service) => service.id === id)

  const ref = useRef<HTMLDivElement>(null)
  // Animation starts when the section enters 30% of the viewport.
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  if (!serviceData) {
    return null
  }

  const { services } = serviceData

  return (
    <div className={styles.wrapper} id={id} ref={ref}>
      <div className={styles.container}>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <SectionTitle
            text="Future-Ready IT Solutions for Your Business Growth"
            markText="Growth"
          />
        </motion.div>
        <motion.div
          variants={descriptionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <SectionDescription
            className={styles.subtitle}
            text="Empower your business with cutting-edge IT solutions that drive
            innovation, efficiency, and scalability. Our team delivers tailored
            strategies and state-of-the-art technology to enhance your operations."
          />
        </motion.div>

        <Grid
          container
          rowSpacing={{ xs: '14px', sm: '28px', md: '2vw' }}
          columnSpacing={{ xs: '14px', sm: '28px', md: '2vw' }}
          className={styles.containerGrid}
          sx={{ justifyContent: 'center' }}
        >
          {services.map((service, index) => {
            const { background, fill } = cardStyles[index % cardStyles.length]
            return (
              <Grid key={service.id}>
                <motion.div
                  className={styles.card}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  style={{
                    height: '100%',
                    transformOrigin: 'center center',
                    willChange: 'transform, opacity',
                  }}
                >
                  <div
                    style={{ backgroundColor: background }}
                    className={styles.left}
                  >
                    <service.icon style={{ fill }} className={styles.icon} />
                  </div>

                  <div className={styles.right}>
                    <p className={styles.title}>{service.title}</p>
                    <p className={styles.description}>{service.description}</p>
                  </div>
                </motion.div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default ItSolutions
