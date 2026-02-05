import { motion } from 'framer-motion'
import { useState } from 'react'
import { Collapse } from '@mui/material'
import ArrowDown from '../assets/arrow.svg'
import HomeWork from '../assets/home-work.svg'
import School from '../assets/school.svg'
import Settings from '../assets/settings.svg'
import Work from '../assets/work.svg'
import styles from './menu.module.scss'

import Link from 'next/link'
import LoadingIndicator from '@/shared/loader/detector'
import { usePathname } from 'next/navigation'
import { services } from '@/static/services'

const items = [
  {
    title: 'About Us',
    icon: HomeWork,
    href: '/about-us',
  },
  {
    title: 'Careers',
    icon: School,
    href: '/careers',
  },
  {
    title: 'How we work',
    icon: Work,
    href: '/how-we-work',
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
const Navigation = ({ toggle }: { toggle: () => void }) => {
  const [isOpened, setIsOpened] = useState(false)
  const pathname = usePathname()

  const isServiceActive = (route: string) => pathname.includes(route)

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
        {services.map((service) => (
          <Link
            href={`/services/${service.route}`}
            className={`${styles.collapsableService} ${isServiceActive(service.route) ? styles.active : ''}`}
            key={service.route}
            prefetch={false}
            onClick={(e) => {
              if (isServiceActive(service.route)) {
                e.preventDefault()
              } else {
                toggle()
              }
            }}
          >
            <LoadingIndicator />
            <p className={styles.collapsableTitle}>{service.name}</p>
          </Link>
        ))}
      </Collapse>
      {items.map(({ title, icon: Icon, href }) => {
        const isActive = pathname.startsWith(href)
        return (
          <Link
            href={href}
            key={title}
            prefetch={false}
            className={`${styles.sideBarMenuItemLink} ${isActive ? styles.active : ''}`}
            onClick={toggle}
          >
            <LoadingIndicator />
            <motion.li
              variants={ItemVariants}
              className={styles.sideBarMenuItem}
            >
              <div className={styles.iconPlaceholder}>
                <Icon />
              </div>
              <p className={styles.menuItemTitle}>{title}</p>
            </motion.li>
          </Link>
        )
      })}
    </motion.ul>
  )
}

export default Navigation
