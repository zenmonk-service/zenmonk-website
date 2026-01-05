'use client'

import { motion, useCycle } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import Monk from '@/assets/icons/monk.svg'
import { useScrollSmoother } from '@/shared/scroll-smoother/scroll-context'
import { useAppSelector } from '@/store/hooks'
import LoadingIndicator from '../loader/detector'
import ActionLinks from './action-links'
import styles from './header.module.scss'

const Navbar = () => {
  const { push } = useRouter()
  const pathname = usePathname()
  const navigateToHome = () => push('/')
  const [isOpen, toggleOpen] = useCycle(false, true)
  const smootherRef = useScrollSmoother()
  const current = smootherRef?.current

  useEffect(() => {
    if (current) {
      current.paused(isOpen)
    }
  }, [current, isOpen])

  const isPageLoading = useAppSelector((state) => state.header.isLoading)

  return (
    <motion.nav
      initial={false}
      variants={{
        open: { y: 0 },
        closed: { y: 0 },
        hidden: { y: '-100%', opacity: 0 },
      }}
      // animate={isPageLoading ? 'hidden' : isOpen ? 'open' : 'closed'}
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
