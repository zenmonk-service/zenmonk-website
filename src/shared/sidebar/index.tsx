'use client'

import { motion, useCycle } from 'framer-motion'
import { useRef } from 'react'
import { MenuToggle } from './menu-toggle'
import { Navigation } from './navigation'
import './styles.css'
import { useDimensions } from './use-dimensions'

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef<any>(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className="navigation-bar"
    >
      <motion.div
        className="background"
        variants={{
          open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
            transition: {
              type: 'spring',
              stiffness: 20,
              restDelta: 2,
            },
          }),
          closed: {
            clipPath: 'circle(15px at calc(100% - 40px) 22px)',
            transition: {
              delay: 0.5,
              type: 'spring',
              stiffness: 400,
              damping: 40,
            },
          },
        }}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
