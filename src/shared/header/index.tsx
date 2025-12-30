'use client'

import { motion, useCycle } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Monk from '@/assets/icons/monk.svg'
import { useScrollSmoother } from '@/shared/scroll-smoother/scroll-context'
import { useAppSelector } from '@/store/hooks'
import LoadingIndicator from '../loader/detector'
import ActionLinks from './action-links'
import styles from './header.module.scss'

const Navbar = () => {
  const { push } = useRouter()
  const navigateToHome = () => push('/')
  const hide = useAppSelector((state) => state.header.hide)
  const [isOpen, toggleOpen] = useCycle(false, true)
  const smootherRef = useScrollSmoother()
  const current = smootherRef?.current

  useEffect(() => {
    if (current) {
      current.paused(isOpen)
    }
  }, [current])

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={styles.appBarContainer}
    >
      <div className={styles.appBarIconContainer}>
        <Monk onClick={navigateToHome} />
      </div>
      <ActionLinks isOpen={isOpen} toggle={toggleOpen} />
      <Link href="/contact" className={styles.appBarContactButton}>
        <LoadingIndicator />
        Contact Us
      </Link>
    </motion.nav>
  )
}

export default Navbar
