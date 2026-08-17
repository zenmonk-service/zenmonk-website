import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
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
  const menuRef = useRef<HTMLUListElement>(null)
  const touchStartRef = useRef({ x: 0, y: 0 })
  const touchStartScrollTopRef = useRef(0)
  const touchStartTimeRef = useRef(0)
  const hasMovedRef = useRef(false)

  const isServiceActive = (route: string) => pathname.includes(route)

  const handleTouchStart = (e: React.TouchEvent) => {
    hasMovedRef.current = false
    touchStartTimeRef.current = Date.now()
    touchStartScrollTopRef.current = menuRef.current?.scrollTop || 0

    const touch = e.touches?.[0] || e.changedTouches?.[0]
    if (touch) {
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
      }
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches?.[0] || e.changedTouches?.[0]
    if (touch) {
      const deltaX = Math.abs(touch.clientX - touchStartRef.current.x)
      const deltaY = Math.abs(touch.clientY - touchStartRef.current.y)
      if (deltaX > 4 || deltaY > 4) {
        hasMovedRef.current = true
      }
    }
  }

  const handleTouchCancel = () => {
    // When browser native scroll takes over, WebKit emits touchcancel
    hasMovedRef.current = true
  }

  const handleTouchEnd = () => {
    const currentScrollTop = menuRef.current?.scrollTop || 0
    const scrollDelta = Math.abs(currentScrollTop - touchStartScrollTopRef.current)
    if (scrollDelta > 2) {
      hasMovedRef.current = true
    }
  }

  const isScrollGesture = () => {
    const currentScrollTop = menuRef.current?.scrollTop || 0
    const scrollDelta = Math.abs(currentScrollTop - touchStartScrollTopRef.current)
    const touchDuration = Date.now() - touchStartTimeRef.current

    return hasMovedRef.current || scrollDelta > 2 || touchDuration > 300
  }

  const handleServicesHeaderClick = (e: React.MouseEvent) => {
    if (isScrollGesture()) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
    setIsOpened((prev) => !prev)
  }

  const handleLinkClick = (e: React.MouseEvent, route: string, isStatic = false) => {
    if (isScrollGesture()) {
      e.preventDefault()
      e.stopPropagation()
      return
    }

    if (isStatic) {
      toggle()
    } else {
      if (isServiceActive(route)) {
        e.preventDefault()
      } else {
        toggle()
      }
    }
  }

  return (
    <motion.ul
      key="nav"
      ref={menuRef}
      initial="closed"
      animate="open"
      exit="closed"
      className={styles.sideBarMenu}
      variants={variants}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchCancel={handleTouchCancel}
      onTouchEnd={handleTouchEnd}
    >
      <motion.li
        variants={ItemVariants}
        className={`${styles.sideBarMenuItem} ${isOpened ? styles.active : ''}`}
        onClick={handleServicesHeaderClick}
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
      <div
        className={`${styles.collapsable} ${isOpened ? styles.collapsableOpen : ''}`}
      >
        {services.map((service) => (
          <Link
            href={`/services${service.route}`}
            className={`${styles.collapsableService} ${isServiceActive(service.route) ? styles.active : ''}`}
            key={service.route}
            prefetch={false}
            onClick={(e) => handleLinkClick(e, service.route)}
          >
            <LoadingIndicator />
            <p className={styles.collapsableTitle}>{service.name}</p>
          </Link>
        ))}
      </div>
      {items.map(({ title, icon: Icon, href }) => {
        const isActive = pathname.startsWith(href)
        return (
          <Link
            href={href}
            key={title}
            prefetch={false}
            className={`${styles.sideBarMenuItemLink} ${isActive ? styles.active : ''}`}
            onClick={(e) => handleLinkClick(e, href, true)}
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
