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
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
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
  }, [current, isOpen])

  const isHeaderHidden = useAppSelector((state) => state.header.hide)

  return (
    <motion.nav
      initial={false}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden || isHeaderHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={styles.appBarContainer}
    >
      <Link href="/" className={styles.appBarIconContainer} prefetch={false}>
        <LoadingIndicator />
        <Monk />
      </Link>
      <ActionLinks isOpen={isOpen} toggle={toggleOpen} />
      <Link
        href="/contact"
        prefetch={false}
        className={`${styles.appBarContactButton} ${pathname === '/contact' ? styles.active : ''}`}
      >
        <LoadingIndicator />
        Contact Us
      </Link>
    </motion.nav>
  )
}

export default Navbar
