'use client'

import { motion, useCycle, useScroll, useMotionValueEvent } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Monk from '@/assets/icons/monk.svg'
import { useScrollSmoother } from '@/shared/scroll-smoother/scroll-context'
import { useAppSelector } from '@/store/hooks'
import LoadingIndicator from '../loader/detector'
import ActionLinks from './action-links'
import styles from './header.module.scss'

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, toggleOpen] = useCycle(false, true)
  const smootherRef = useScrollSmoother()
  const current = smootherRef?.current

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

  useEffect(() => {
    if (current) {
      current.paused(isOpen)
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [current, isOpen])

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
      <Link href="/" className={styles.appBarIconContainer} prefetch={false}>
        <LoadingIndicator />
        <Monk />
      </Link>
      {!pathname?.includes('/track-application/') && (
        <>
          <ActionLinks isOpen={isOpen} toggle={toggleOpen} />
          <Link
            href="/contact"
            prefetch={false}
            className={`${styles.appBarContactButton} ${pathname === '/contact' ? styles.active : ''}`}
          >
            <LoadingIndicator />
            Contact Us
          </Link>
        </>
      )}
    </motion.nav>
  )
}

export default Navbar
