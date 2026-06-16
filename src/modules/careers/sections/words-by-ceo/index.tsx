'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ZenmonkLogo as Logo, Board, Ceo } from '../../assets/ceo-section'
import Details from './ceo-details'
import './styles.scss'

const text = "The harder you work for something, the greater you'll feel when you achieve it."
const wordsArray = text.split(" ")

const baseSpeed = 0.08 

let currentDelay = 0;
const wordsData = wordsArray.map((word) => {
  const duration = word.length * baseSpeed;
  const delay = currentDelay;
  currentDelay += duration;
  return { word, duration, delay };
});

const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
}

const wordGroupVariants = {
  hidden: {},
  visible: {} 
}

const wordWipeVariants = {
  hidden: {
    width: "0%",
    opacity: 0, 
  },
  visible: (custom: { duration: number, delay: number }) => ({
    width: "calc(110% + 20px)",
    opacity: [0, 1, 1], 
    transition: {
      width: { type: 'tween', ease: 'linear', duration: custom.duration, delay: custom.delay },
      opacity: { times: [0, 0.01, 1], duration: custom.duration, delay: custom.delay }
    },
  }),
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
            viewport={{ once: true, amount: 0.5 }}
            className="words-container"
          >
            {wordsData.map((data, index) => (
              <span key={index}>
                <motion.span custom={data} variants={wordGroupVariants} className="word-wrapper">
                  
                  <span className="word-placeholder">
                    {data.word}
                  </span>
                  
                  <motion.span 
                    custom={data} 
                    variants={wordWipeVariants} 
                    className="word-wipe-mask"
                  >
                    <span className="word-visible-text">{data.word}</span>
                  </motion.span>
                  

                </motion.span>
                {index !== wordsData.length - 1 && "\u00A0"}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="ceo-details">
          <Details image={Ceo} designation='Cheif Executive Officer' name='Aman Singh' />
        </div>
      </div>
      <div className="ceo-section-logo">
        <Logo />
      </div>
    </div>
  )
}

export default WordsByCEO
