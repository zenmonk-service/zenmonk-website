import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import ArrowDown from '../assets/arrow.svg'
import HomeIcon from '../assets/home.svg'
import HomeWork from '../assets/home-work.svg'
import School from '../assets/school.svg'
import Settings from '../assets/settings.svg'
import Work from '../assets/work.svg'
import ContactIcon from '../assets/contact.svg'
import styles from './menu.module.scss'

import Link from 'next/link'
import LoadingIndicator from '@/shared/loader/detector'
import { usePathname } from 'next/navigation'
import { useAppDispatch } from '@/store/hooks'
import { toggleLoader } from '@/store/features/header/header-slice'
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
  {
    title: 'Contact Us',
    icon: ContactIcon,
    href: '/contact',
  },
]
const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.04,
      delayChildren: 0.03,
    },
  },
  closed: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
}

const ItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.05,
      ease: 'easeIn',
    },
  },
}

const Arrow = motion.create(ArrowDown)
const Navigation = ({ toggle, closeMenu }: { toggle: () => void; closeMenu?: () => void }) => {
  const [isOpened, setIsOpened] = useState(false)
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const menuRef = useRef<HTMLUListElement>(null)

  const isServiceActive = (route: string) => pathname === `/services${route}` || pathname.includes(route)

  const handleServicesHeaderClick = (e: React.MouseEvent) => {
    setIsOpened((prev) => !prev)
  }

  const handleLinkClick = (e: React.MouseEvent, route: string, isStatic = false) => {
    // Immediately and unconditionally close the mobile navbar
    if (closeMenu) {
      closeMenu()
    } else {
      toggle()
    }

    if (isStatic) {
      if (pathname === route) {
        e.preventDefault()
        return
      }
      dispatch(toggleLoader(true))
    } else {
      if (isServiceActive(route)) {
        e.preventDefault()
        return
      }
      dispatch(toggleLoader(true))
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
    >
      <Link
        href="/"
        prefetch={true}
        className={`${styles.sideBarMenuItemLink} ${pathname === '/' ? styles.active : ''}`}
        onClick={(e) => handleLinkClick(e, '/', true)}
      >
        <LoadingIndicator targetHref="/" />
        <motion.li
          variants={ItemVariants}
          className={styles.sideBarMenuItem}
        >
          <div className={styles.iconPlaceholder}>
            <HomeIcon />
          </div>
          <p className={styles.menuItemTitle}>Home</p>
        </motion.li>
      </Link>

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
            prefetch={true}
            onClick={(e) => handleLinkClick(e, service.route)}
          >
            <LoadingIndicator targetHref={`/services${service.route}`} />
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
            prefetch={true}
            className={`${styles.sideBarMenuItemLink} ${isActive ? styles.active : ''}`}
            onClick={(e) => handleLinkClick(e, href, true)}
          >
            <LoadingIndicator targetHref={href} />
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
