'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import './styles.scss'

const Loader = () => {
  const [showText, setShowText] = useState(false)
  const [animateOut, setAnimateOut] = useState(false)

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 2000) // text shows after logo fades in
    const endTimer = setTimeout(() => {
      setAnimateOut(true)
    }, 5000) // total animation duration

    return () => {
      clearTimeout(textTimer)
      clearTimeout(endTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {/* {!animateOut && (
        <motion.div
          className="loader"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="logo-wrapper">
            <motion.img
              src="/logo.svg"
              alt="Logo"
              className="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layout={'preserve-aspect'}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              layoutId="logo"
            />
          </div>

          <AnimatePresence>
            {showText && (
              <motion.div
                className="company-name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Zenmonk
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )} */}
    </AnimatePresence>
  )
}

export default Loader
