'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ZenmonkLogo as Logo, Board, Ceo } from '../../assets/ceo-section'
import Details from './ceo-details'
import './styles.scss'

const text = "The harder you work for something, the greater you'll feel when you achieve it."
const wordsArray = text.split(" ")

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const letterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
}

const WordsByCEO = () => {
  return (
    <div className="ceo-section-wrapper">
      <div className="ceo-section">
        <Image src={Board} alt="ceo-word-image" fill />
        <div className="words-by-ceo">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="words-container"
          >
            {wordsArray.map((word, wordIndex) => (
              <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.28em' }}>
                {word.split('').map((char, charIndex) => (
                  <motion.span key={charIndex} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="ceo-details">
          <Details image={Ceo} designation='Chief Executive Officer' name='Aman Singh' />
        </div>
      </div>
      <div className="ceo-section-logo">
        <Logo />
      </div>
    </div>
  )
}

export default WordsByCEO
