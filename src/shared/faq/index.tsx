'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { SectionTitle } from '../typography'
import FAQ_IMAGE from './assets/faq.svg'
import MINUS from './assets/minus.svg'
import MOBILE from './assets/mobile.svg'
import PLUS from './assets/plus.svg'
import UI from './assets/ui.svg'
import WEBSITE from './assets/website.svg'
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
]

const FAQ = () => {
  const [visibleAnswers, setVisibleAnswers] = useState<any>({})

  const toggleAnswer = (index: any) => {
    setVisibleAnswers((prev: any) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className="faq">
      <div className="images">
        <FAQ_IMAGE />
        <div className="bg-orange"></div>
      </div>

      <div className="content">
        <div className="section-heading">
          {/* <SectionTitle title='From simple queries to complex ones, we’re here to help you every step of the way!' highlightedText='were here to help you' text={''} /> */}
          From simple queries to complex ones,{' '}
          <span>we’re here to help you </span> every step of the way!
        </div>

        {/* <div className="questions-category">
          <div className="question-category">

            <Image src={MOBILE} alt="mobile" />
            <p className="category-heading">Questions about</p>
            <p className="category-name">Mobile app development</p>
          </div>

          <div className="question-category">
            <Image src={WEBSITE} alt="website" />
            <p className="category-heading">Questions about</p>
            <p className="category-name">Website development</p>
          </div>

          <div className="question-category">
            <Image src={UI} alt="ui design" />
            <p className="category-heading">Questions about</p>
            <p className="category-name">UI Design</p>
          </div>
        </div> */}

        <p className="section-sub-heading">Top questions</p>

        <div className="questions-wrapper">
          {questions.map((item, index) => (
            <div key={index} className="question-wrapper">
              <div>
                <p className="question" onClick={() => toggleAnswer(index)}>
                  {item.question}
                </p>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    visibleAnswers[index]
                      ? { height: 'auto', opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="answer-wrapper"
                >
                  {visibleAnswers[index] && (
                    <p className="answer">{item.answer}</p>
                  )}
                </motion.div>
              </div>

              <div>
                {visibleAnswers[index] ? (
                  <MINUS
                    onClick={() => toggleAnswer(index)}
                    className="toggle-icon"
                  />
                ) : (
                  <PLUS
                    alt="plus"
                    onClick={() => toggleAnswer(index)}
                    className="toggle-icon"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
