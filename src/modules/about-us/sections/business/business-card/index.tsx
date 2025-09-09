import { motion } from 'framer-motion'
import CircleHollow from '../assets/circle.svg'
import CircleFilled from '../assets/filled.svg'
import Plus from '../assets/plus.svg'
import './styles.scss'

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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  }

  const textMotion = {
    rest: {
      color: '#383838',
      x: 0,
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeIn',
      },
    },
    hover: {
      color: '#FFF',
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeOut',
      },
    },
  }

  const descriptionMotion = {
    rest: {
      color: '#565656',
      x: 0,
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeIn',
      },
    },
    hover: {
      color: '#FFF',
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      transition={{
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 100,
        duration: 1,
      }}
      variants={item}
      whileHover="hover"
      animate="rest"
      className="about-us-business-card-container"
    >
      <div className="business-card-icon-container">
        <motion.div
          className="icon"
          variants={{
            rest: {
              backgroundColor: background,
              boxShadow: 'none',
              transition: {
                ease: 'easeInOut',
                type: 'tween',
                duration: 0.4,
              },
            },
            hover: {
              backgroundColor: '#fff',
              boxShadow: '0 4% 4% rgba(0, 0, 0, 0.25)',
              transition: {
                duration: 0.4,
                type: 'tween',
                ease: 'easeIn',
              },
            },
          }}
        >
          <Icon style={{ fill }} />
        </motion.div>
        <Plus
          style={{
            position: 'absolute',
            width: '0.62vw',
            top: '14%',
            left: '3%',
            stroke: fill,
          }}
        />
        <Plus
          style={{
            position: 'absolute',
            width: '0.62vw',
            transform: 'rotate(45deg)',
            bottom: '12%',
            left: '29.5%',
            stroke: fill,
          }}
        />
        <CircleHollow
          style={{
            position: 'absolute',
            width: '0.62vw',
            bottom: '8%',
            stroke: fill,
          }}
        />
        <CircleHollow
          style={{
            position: 'absolute',
            width: '0.62vw',
            top: '16%',
            left: '29%',
            stroke: fill,
          }}
        />
        <CircleFilled
          style={{
            position: 'absolute',
            width: '0.36vw',
            top: '50%',
            left: '32%',
          }}
        />
      </div>
      <div className="business-card-content">
        <motion.h3 variants={textMotion} className="business-card-title">
          {title}
        </motion.h3>
        <motion.p
          variants={descriptionMotion}
          className="business-card-description"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default BusinessCard
