'use client'

import { motion } from 'framer-motion'
import ZenmonkLogo from '../assets/zenmonk-logo.svg'
import styles from './flash-screen.module.scss'

interface FlashScreenProps {
  closeScreen: () => void
}
const FlashScreen = ({ closeScreen }: FlashScreenProps) => {
  const text = 'ZENMONK'
  return (
    <html>
      <body>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.5,
            }}
            className={styles.word}
          >
            {text.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: i % 2 === 0 ? '-5vw' : '5vw', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: 'easeOut',
                }}
                className={styles.letter}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 2,
            }}
            className={styles.logoContainer}
          >
            <motion.div
              initial={{
                x: '-50%',
                y: '-50%',
                scale: 1,
                top: '50%',
                left: '50%',
                position: 'absolute',
              }}
              animate={{ top: '7%', left: '10%', scale: 0.25 }}
              transition={{
                delay: 3.8,
                duration: 1.2,
                ease: 'easeInOut',
              }}
              onAnimationComplete={() => closeScreen()}
              className={styles.logoWrapper}
            >
              <ZenmonkLogo className={styles.logo} />
            </motion.div>
          </motion.div>
        </div>
      </body>
    </html>
  )
}

export default FlashScreen
