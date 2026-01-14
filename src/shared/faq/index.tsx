'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FAQ_IMAGE from './assets/faq.svg'
import MINUS from './assets/minus.svg'
import PLUS from './assets/plus.svg'
import './styles.scss'

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

  const toggleAnswer = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="faq">
      <div className="images">
        <FAQ_IMAGE />
        <div className="bg-orange"></div>
      </div>

      <div className="content">
        <div className="section-heading">
          From simple queries to complex ones,{' '}
          <span>we’re here to help you </span> every step of the way!
        </div>

        <p className="section-sub-heading">Top questions</p>

        <div className="questions-wrapper">
          {questions.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="question-wrapper">
                <div style={{ flex: 1 }}>
                  <p className="question" onClick={() => toggleAnswer(index)}>
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
                        <p className="answer">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  onClick={() => toggleAnswer(index)}
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  {isOpen ? (
                    <MINUS className="toggle-icon" />
                  ) : (
                    <PLUS className="toggle-icon" />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FAQ
