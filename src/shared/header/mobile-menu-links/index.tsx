'use client'

import { AnimatePresence } from 'framer-motion'
import Navigation from '@/shared/sidebar/menu'
import { MenuToggle } from '@/shared/sidebar/menu-toggle'
import styles from './mobile-menu-links.module.scss'

interface Props {
  isOpen: boolean
  toggle: () => void
}

const MobileMenuLink = ({ isOpen, toggle }: Props) => {
  return (
    <div className={styles.container}>
      <AnimatePresence>
        {isOpen && <Navigation toggle={toggle} />}
      </AnimatePresence>
      <div className={styles.menuToggleContainer} />
      <MenuToggle
        className={styles.menuToggleButton}
        toggle={toggle}
        isOpen={isOpen}
      />
    </div>
  )
}

export default MobileMenuLink
