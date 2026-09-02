'use client'

import { motion, type MotionProps } from 'framer-motion'
import './styles.scss'

interface SectionDescriptionProps extends MotionProps {
  text?: string
  children?: React.ReactNode
  className?: string
  maxWidth?: string | number
}

const SectionDescription = (props: SectionDescriptionProps) => {
  const { text, children, className, maxWidth, style, ...others } = props

  return (
    <motion.p
      {...others}
      style={{
        maxWidth,
        ...style, // allow override if needed
      }}
      className={`custom-section-description ${className ?? ''}`}
    >
      {children || text}
    </motion.p>
  )
}

export { SectionDescription }
