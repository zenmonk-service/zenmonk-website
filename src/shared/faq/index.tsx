'use client'

import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import FAQ_IMAGE from './assets/faq.svg'
import MINUS from './assets/minus.svg'
import PLUS from './assets/plus.svg'
import styles from './faq.module.scss'

const questions = [
  {
    question: 'How can I get started with mobile app development?',
    answer:
      "Start by defining your app's purpose, target audience, and core features. Then choose a tech stack and begin development with frameworks like React Native or Flutter.",
  },
  {
    question: 'What is the best approach for website development?',
    answer:
      'Begin with wireframing your site structure, then use popular frameworks like Next.js or React for faster development and improved performance.',
  },
  {
    question: 'What tools are recommended for UI design?',
    answer:
      'Tools like Figma, Sketch, and Adobe XD are popular for designing modern and intuitive user interfaces.',
  },
  {
    question: 'How can I ensure my website is SEO-friendly?',
    answer:
      'Focus on fast loading times, mobile responsiveness, and well-structured content using appropriate HTML tags and meta descriptions.',
  },
  {
    question: 'What are the best practices for improving app performance?',
    answer:
      "Optimize image sizes, minimize API calls, and implement caching strategies to boost your app's performance.",
  },
  {
    question: 'What are the best practices for improving app performance?',
    answer:
      "Optimize image sizes, minimize API calls, and implement caching strategies to boost your app's performance.",
  },
  {
    question: 'What are the best practices for improving app performance?',
    answer:
      "Optimize image sizes, minimize API calls, and implement caching strategies to boost your app's performance.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: '2.6vw',
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.0, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      },
    },
  }

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: '2.6vw',
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.0, 
        ease: [0.25, 0.1, 0.25, 1.0],
        delay: 1.0
      },
    },
  }

  const toggleAnswer = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className={styles.faq} ref={ref}>
      <div className={styles.images}>
        <FAQ_IMAGE />
        <div className={styles.bgOrange}></div>
      </div>

      <div className={styles.content}>
        <div>
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className={styles.sectionHeading}>
              From simple queries to complex ones,{' '}
              <span>we’re here to help you </span> every step of the way!
            </div>
          </motion.div>

          <motion.div
            variants={descriptionVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <p className={styles.sectionSubHeading}>Top questions</p>
          </motion.div>
        </div>

        <motion.div
          className={styles.questionsWrapper}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 1.2, // wait for title + subtitle to finish first
              },
            },
          }}
        >
          {questions.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                className={styles.questionWrapper}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    className={styles.question}
                    onClick={() => toggleAnswer(index)}
                  >
                    {item.question}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className={styles.answer}>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  onClick={() => toggleAnswer(index)}
                  className={styles.toggleIconContainer}
                >
                  {isOpen ? (
                    <MINUS className={styles.toggleIcon} />
                  ) : (
                    <PLUS className={styles.toggleIcon} />
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ
