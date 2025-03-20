'use client'

import { motion } from 'framer-motion'

interface AnimatedDivProps {
  children: React.ReactNode
  delay?: number
  duration?: number
}

const AnimatedDiv = ({
  children,
  delay = 0.2,
  duration = 0.8,
}: AnimatedDivProps) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration,
      ease: [0.33, 1, 0.68, 1],
      delay,
    }}
    viewport={{ once: true, amount: 0.1 }}
  >
    {children}
  </motion.div>
)

export default AnimatedDiv
