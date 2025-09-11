import { motion } from 'framer-motion'
import { useState } from 'react'
import { Collapse } from '@mui/material'
import ArrowDown from '../assets/arrow.svg'
import HomeWork from '../assets/home-work.svg'
import School from '../assets/school.svg'
import Settings from '../assets/settings.svg'
import Work from '../assets/work.svg'
import styles from './menu.module.scss'

const services = [
  'Software Development',
  'Growth & Marketing',
  'Mobile App Development',
  'IT Training & Workshops',
  'Product Development',
  'Industry Specific Solutions',
  'IT & Business Consultations',
  'Cloud Development',
  'UI/UX Design',
  'AI Based Softwares',
]

const items = [
  {
    title: 'About Us',
    icon: HomeWork,
  },
  {
    title: 'Careers',
    icon: School,
  },
  {
    title: 'How we work',
    icon: Work,
  },
]
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const ItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const Arrow = motion.create(ArrowDown)
const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <motion.ul
      key="nav"
      initial="closed"
      animate="open"
      exit="closed"
      className={styles.sideBarMenu}
      variants={variants}
    >
      <motion.li
        variants={ItemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={styles.sideBarMenuItem}
        onClick={() => {
          setIsOpened((prev) => !prev)
        }}
      >
        <div className={styles.iconPlaceholder}>
          <Settings />
        </div>
        <p className={styles.menuItemTitle}>Services</p>
        <Arrow
          animate={{ rotate: isOpened ? 0 : 180 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ marginLeft: 'auto' }}
        />
      </motion.li>
      <Collapse
        className={styles.collapsable}
        in={isOpened}
        timeout="auto"
        unmountOnExit
      >
        {services.map((title) => (
          <div className={styles.collapsableService} key={title}>
            <p className={styles.collapsableTitle}>{title}</p>
          </div>
        ))}
      </Collapse>
      {items.map(({ title, icon: Icon }) => (
        <motion.li
          key={title}
          variants={ItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={styles.sideBarMenuItem}
        >
          <div className={styles.iconPlaceholder}>
            <Icon />
          </div>
          <p className={styles.menuItemTitle}>{title}</p>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default Navigation
