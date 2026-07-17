import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material'
import EclipseSvg from '../assets/circle.svg'
import CircleSvg from '../assets/filled.svg'
import PlusSvg from '../assets/plus.svg'
import styles from './business-card.module.scss'

const Plus = motion.create(PlusSvg)
const Eclipse = motion.create(EclipseSvg)
const Circle = motion.create(CircleSvg)

interface BusinessCardProps {
  Icon: any
  title: string
  description: string
  fill: string
  background: string
}

const BusinessCard = ({
  Icon,
  title,
  description,
  fill,
  background,
}: BusinessCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }
  const isBelow1200 = useMediaQuery('(max-width:1200px)')

  const textMotion = {
    rest: {
      color: '#383838',
      x: 0,
      transition: { duration: 0.2, type: 'tween', ease: 'easeIn' },
    },
    hover: {
      color: '#FFF',
      transition: { duration: 0.2, type: 'tween', ease: 'easeOut' },
    },
  }

  const descriptionMotion = {
    rest: {
      color: '#565656',
      x: 0,
      transition: { duration: 0.2, type: 'tween', ease: 'easeIn' },
    },
    hover: {
      color: '#FFF',
      transition: { duration: 0.2, type: 'tween', ease: 'easeOut' },
    },
  }

  return (
    // Outer div: receives staggered scroll-entrance from parent whileInView
    <motion.div variants={item} className={styles.container}>
      {/* Inner div: manages hover state independently */}
      <motion.div
        whileHover="hover"
        animate="rest"
        style={{ display: 'contents' }}
      >
      <div className={styles.iconContainer}>
        <motion.div
          className={styles.icon}
          variants={{
            rest: {
              backgroundColor: background,
              boxShadow: '0px',
              transition: { type: 'tween', duration: 0.4 },
            },
            hover: {
              backgroundColor: '#fff',
              boxShadow:
                '0 max(4px, 0.2vw) max(4px, 0.2vw) rgba(0, 0, 0, 0.25)',
              transition: { duration: 0.4, type: 'tween' },
            },
          }}
        >
          <Icon style={{ fill }} />
        </motion.div>
 
        <Plus
          style={{
            position: 'absolute',
            width: 'max(12px, 0.62vw)',
            top: '14%',
            left: '3%',
            stroke: fill,
            zIndex: 2,
          }}
          variants={{
            rest: {
              top: '14%',
              left: '3%',
              stroke: fill,
            },
            hover: {
              stroke: '#fff',
              scale: 1.1,
              x: isBelow1200 ? '100px' : 'max(100px, 6.25vw)',
              y: 10,
              rotate: -360,
              transition: {
                duration: 0.8,
                type: 'spring',
              },
            },
          }}
        />
        <Plus
          style={{
            position: 'absolute',
            width: 'max(12px, 0.62vw)',
            transform: 'rotate(45deg)',
            bottom: '12%',
            left: isBelow1200 ? '100px' : 'max(100px, 29%)',
            stroke: fill,
          }}
          variants={{
            rest: {
              bottom: '12%',
              left: isBelow1200 ? '100px' : 'max(100px, 29%)',
              stroke: fill,
            },
            hover: {
              stroke: '#fff',
              x: isBelow1200 ? '64px' : 'max(64px, 4.16vw)',
              y: -15,
              rotate: -90,
              transition: {
                duration: 0.8,
                type: 'spring',
              },
            },
          }}
        />
        <Eclipse
          style={{
            position: 'absolute',
            width: 'max(12px, 0.62vw)',
            bottom: '8%',
            stroke: fill,
          }}
          variants={{
            rest: {
              width: 'max(12px, 0.62vw)',
              bottom: '8%',
              stroke: fill,
            },
            hover: {
              stroke: '#fff',
              x: isBelow1200 ? '90px' : 'max(90px, 6.25vw)',
              y: '-0.52vw',
              transition: {
                duration: 0.8,
                type: 'spring',
              },
            },
          }}
        />
        <Eclipse
          style={{
            position: 'absolute',
            width: 'max(12px, 0.62vw)',
            top: '16%',
            left: isBelow1200 ? '100px' : 'max(100px, 29%)',
            stroke: fill,
          }}
          variants={{
            rest: {
              top: '16%',
              left: isBelow1200 ? '100px' : 'max(100px, 29%)',
              stroke: fill,
            },
            hover: {
              stroke: '#fff',
              x: 'max(64px, 4.16vw)',
              y: 15,
              transition: {
                duration: 0.8,
                type: 'spring',
              },
            },
          }}
        />
        <Circle
          style={{
            position: 'absolute',
            width: 'max(8px, 0.36vw)',
            top: '50%',
            left: isBelow1200 ? '110px' : 'max(110px, 34%)',
            fill,
          }}
          variants={{
            rest: {
              top: '50%',
              left: isBelow1200 ? '110px' : 'max(110px, 34%)',
              stroke: fill,
            },
            hover: {
              x: '2.08vw',
              y: -5,
              transition: {
                duration: 0.8,
                type: 'spring',
              },
            },
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            minWidth: '0.36vw',
            height: '0.36vw',
            top: '50%',
            borderRadius: '50%',
            left: isBelow1200 ? '110px' : 'max(110px, 34%)',
            background: '#fff',
          }}
          variants={{
            rest: {
              top: '50%',
              left: isBelow1200 ? '110px' : 'max(110px, 34%)',
              opacity: 0,
            },
            hover: {
              x: '2.08vw',
              y: -5,
              opacity: 0.4,
              transition: {
                duration: 0.8,
                type: 'spring',
              },
            },
          }}
        />
      </div>
 
      <div className={styles.content}>
        <motion.h3 variants={textMotion} className={styles.title}>
          {title}
        </motion.h3>
        <motion.p variants={descriptionMotion} className={styles.description}>
          {description}
        </motion.p>
      </div>
      </motion.div>
    </motion.div>
  )
}

export default BusinessCard
