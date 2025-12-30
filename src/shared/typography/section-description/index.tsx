'use client'

import { motion, type MotionProps } from 'framer-motion'
import './styles.scss'

interface SectionDescriptionProps extends MotionProps {
  text: string
  className?: string
}

const SectionDescription = (props: SectionDescriptionProps) => {
  const { text, className, ...others } = props
  return (
    <motion.p
      {...others}
      className={`custom-section-description ${className ?? ''}`}
    >
      {text}
    </motion.p>
  )
}

export { SectionDescription }
