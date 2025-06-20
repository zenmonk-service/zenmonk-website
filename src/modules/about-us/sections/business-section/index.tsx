'use client'

import { motion } from 'framer-motion'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'
import BusinessCard from '../../components/card/business-card'
import { businesses } from './business'
import './styles.scss'

export const BusinessSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }
  return (
    <div className="business-container">
      <SectionTitle
        text="We Are The Complete For Your Business Success"
        markText="Success"
        markTextProps={{
          rotate: 2,
        }}
        align="center"
        className="heading"
      />
      <SectionDescription
        className="description"
        text="We offer exceptional services, quality customer experience and loyal
        support to our clients by ensuring high success rates. We aim is to
        deliver outstanding results with the help of top-notch services."
      />

      <AboutSectionWrapper>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 1, once: true }}
          variants={container}
          className="business-card-container"
        >
          {businesses.map((business, index) => {
            return (
              <BusinessCard
                key={index}
                description={business.description}
                name={business.name}
                title={business.title}
                Icon={business.icon}
              />
            )
          })}
        </motion.div>
      </AboutSectionWrapper>
    </div>
  )
}
