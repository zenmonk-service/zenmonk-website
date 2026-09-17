'use client'

import { motion, useCycle, useScroll, useMotionValueEvent } from 'framer-motion'
import React, { useState } from 'react'
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
  const [isOpen, toggleOpen] = useCycle(false, true)

  const [hidden, setHidden] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setIsAtTop(latest <= 5)
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  useScrollLock(isOpen, '[class*="sideBarMenu"]')

  const isHeaderHidden = useAppSelector((state) => state.header.hide)

  return (
    <motion.nav
      initial={false}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={(hidden && !isOpen) || isHeaderHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`${styles.appBarContainer} ${isOpen ? styles.open : ''} ${isAtTop && !isOpen ? styles.transparent : ''}`}
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
      {!pathname?.includes('/track-application/') && (
        <>
          <ActionLinks isOpen={isOpen} toggle={toggleOpen} />
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
        </>
      )}
    </motion.nav>
  )
}

export default Navbar
