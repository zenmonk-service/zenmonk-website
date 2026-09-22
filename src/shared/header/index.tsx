'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Monk from '@/assets/icons/monk.svg'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { toggleLoader } from '@/store/features/header/header-slice'
import { useScrollLock } from '@/hooks/use-scroll-lock'
import LoadingIndicator from '../loader/detector'
import ActionLinks from './action-links'
import styles from './header.module.scss'

const Navbar = () => {
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  // Auto-close mobile navbar whenever user navigates
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const [hiddenByScroll, setHiddenByScroll] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const atTop = latest <= 5;
    setIsAtTop(atTop);
    if (latest > previous && latest > 150) {
      setHiddenByScroll(true);
    } else if (latest < previous || atTop) {
      setHiddenByScroll(false);
    }
  });

  const isHeaderHidden = useAppSelector((state) => state.header.hide)
  const isContactModalOpen = useAppSelector((state) => state.header.isContactModalOpen)
  const isApplicationModalOpen = useAppSelector((state) => state.applications.isModalOpen)
  const isAnyModalOpen = isContactModalOpen || isApplicationModalOpen

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (document.querySelector('.MuiDialog-root, .MuiModal-root, [role="dialog"]')) {
        setIsHovered(false)
        return
      }
      if (e.clientY <= 80) {
        setIsHovered(true)
      } else {
        const isOverMenu = (e.target as Element)?.closest?.('.MuiPopover-root, [class*="servicesMenuContainer"], [class*="appBarContainer"]')
        if (!isOverMenu) {
          setIsHovered(false)
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useScrollLock(isOpen, '[class*="sideBarMenu"]')

  const isHidden = (!isAtTop && hiddenByScroll && !isHovered) || isAnyModalOpen

  return (
    <motion.nav
      initial={false}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={(isHidden && !isOpen) || isHeaderHidden || isAnyModalOpen ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`${styles.appBarContainer} ${isOpen ? styles.open : ''} ${isAtTop && !isOpen ? styles.transparent : ''}`}
      onMouseEnter={() => {
        if (!isAnyModalOpen && !document.querySelector('.MuiDialog-root, .MuiModal-root, [role="dialog"]')) {
          setIsHovered(true)
        }
      }}
      onMouseLeave={(e) => {
        if (e.clientY > 80 || isAnyModalOpen) {
          setIsHovered(false)
        }
      }}
    >
      <Link
        href="/"
        className={styles.appBarIconContainer}
        prefetch={true}
        onClick={(e) => {
          if (isOpen) {
            toggleOpen()
          }
          if (pathname === '/') {
            e.preventDefault()
            return
          }
          dispatch(toggleLoader(true))
        }}
      >
        <LoadingIndicator targetHref="/" />
        <Monk />
      </Link>
      <ActionLinks isOpen={isOpen} toggle={toggleOpen} closeMenu={closeMenu} />
      <Link
        href="/contact"
        prefetch={true}
        className={`${styles.appBarContactButton} ${pathname === '/contact' ? styles.active : ''}`}
        onClick={(e) => {
          if (pathname === '/contact') {
            e.preventDefault()
            return
          }
          dispatch(toggleLoader(true))
        }}
      >
        <LoadingIndicator targetHref="/contact" />
        Contact Us
      </Link>
    </motion.nav>
  )
}

export default Navbar
