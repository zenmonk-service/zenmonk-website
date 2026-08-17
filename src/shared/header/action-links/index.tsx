'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LoadingIndicator from '@/shared/loader/detector'
import MobileMenuLink from '../mobile-menu-links'
import styles from './action-link.module.scss'
import { navLinks } from './links'
import ServiceLink from './service'

interface ActionLinksProp {
  isOpen: boolean
  toggle: () => void
}

const ActionLinks = (props: ActionLinksProp) => {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleClick = () => {
    if (containerRef.current) {
      setAnchorEl(containerRef.current)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <div className={styles.actionLinksContainer} ref={containerRef}>
        <Link
          href="/"
          className={`${styles.actionLink} ${pathname === '/' ? styles.active : ''}`}
          prefetch={false}
        >
          <LoadingIndicator />
          Home
        </Link>
        <ServiceLink
          anchorEl={anchorEl}
          handleClick={handleClick}
          handleClose={handleClose}
        />
        {navLinks.map(({ href, name }) => (
          <Link
            href={href}
            className={`${styles.actionLink} ${pathname === href ? styles.active : ''}`}
            prefetch={false}
            key={name}
          >
            <LoadingIndicator />
            {name}
          </Link>
        ))}
      </div>
      <MobileMenuLink {...props} />
    </div>
  )
}

export default ActionLinks
