'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Email, Phone } from '@/assets/icons/contact-us/contact'
import { ContactForm } from '../../modules/about-us/components/contact-form'
import { SectionDescription, SectionTitle } from '../typography'
import Polygon from './assets/polygon.svg'
import styles from './contact-us-section.module.scss'
import { countries } from './countries'

export const ContactUsSection = () => {
  const [country, setCountry] = useState(countries[0])
  const indexRef = useRef(1)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      setCountry(countries[indexRef.current])
      indexRef.current = (indexRef.current + 1) % countries.length
    }, 4000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handleMouseEnter = (
    hoveredCountry: (typeof countries)[number],
    idx: number
  ) => {
    if (timerRef.current) clearInterval(timerRef.current)
    setCountry(hoveredCountry)
    indexRef.current = (idx + 1) % countries.length
  }

  const handleMouseLeave = () => {
    startTimer()
  }

  return (
    <div className={styles.aboutUsContactUsSection}>
      <Image
        src="/contact-us-bg.svg"
        className={styles.contactUsBg}
        alt="contact-us-bg"
        fill
      />

      <div className={styles.contactUs}>
        <div className={styles.leftContainer}>
          <SectionTitle text="We're Just a" align="left" />
          <SectionTitle text="Message Away" highlightedText="Message" />

          <div className={styles.countriesFlagsContainer}>
            {countries.map(({ name, icon: Icon }, index) => {
              const isSelected = name === country.name

              return (
                <motion.div
                  key={name}
                  animate={{ scale: isSelected ? 1.2 : 1 }}
                  transition={{ duration: 0.1, ease: 'easeInOut' }}
                  onMouseEnter={() => handleMouseEnter(countries[index], index)}
                  onMouseLeave={() => handleMouseLeave()}
                  style={{
                    boxShadow: isSelected ? "0 0 max(14px, 0.72vw) max(2px, 0.1vw) rgba(255, 220, 150, 0.9)" : "none"
                  }}
                  className={`${styles.countryFlag} ${
                    isSelected ? styles.countryFlagSelected : ''
                  }`}
                >
                  <Icon />
                </motion.div>
              )
            })}
          </div>

          <SectionTitle
            text={country.name}
            align="left"
            className={styles.selectedCountryTitle}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={country.name}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <SectionDescription
                text={country.description}
                style={{
                  minHeight: 'max(3.125vw, 60px)',
                  maxHeight: 'max(3.125vw, 60px)',
                }}
                className={styles.selectedCountryDescription}
              />

              <div className={styles.labelContainer}>
                <div className={styles.iconContainer}>
                  <Email />
                </div>
                <p
                  className={styles.selectedCountryDescription}
                  style={{ marginTop: 0 }}
                >
                  {country.office.email}
                </p>
              </div>

              <div className={styles.labelContainer}>
                <div className={styles.iconContainer}>
                  <Phone />
                </div>
                <p
                  className={styles.selectedCountryDescription}
                  style={{ marginTop: 0 }}
                >
                  {country.office.phone}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.rightContainer}>
          <ContactForm />
        </div>
      </div>

      <Polygon className={styles.polygon} />
    </div>
  )
}
