'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Email, Phone } from '@/assets/icons/contact-us/contact'
import { ContactForm } from '../../modules/about-us/components/contact-form'
import { SectionDescription, SectionTitle } from '../typography'
import Polygon from './assets/polygon.svg'
import styles from './contact-us-section.module.scss'
import { countries } from './countries'

const ThreeGlobe = dynamic(() => import('./three-globe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin mb-2" />
      <p className="text-gray-500 text-sm font-medium">
        Initializing realistic globe...
      </p>
    </div>
  ),
})

interface ContactUsSectionProps {
  isCareerPage?: boolean
}

export const ContactUsSection = ({ isCareerPage = false }: ContactUsSectionProps) => {
  const [formCountry, setFormCountry] = useState(countries[0])
  const formIndexRef = useRef(1)
  const formTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isFormInteractedRef = useRef<boolean>(false)
  const formInactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const startFormTimer = () => {
    if (formTimerRef.current) clearInterval(formTimerRef.current)

    formTimerRef.current = setInterval(() => {
      if (isFormInteractedRef.current) return
      setFormCountry(countries[formIndexRef.current])
      formIndexRef.current = (formIndexRef.current + 1) % countries.length
    }, 4000)
  }

  useEffect(() => {
    startFormTimer()
    return () => {
      if (formTimerRef.current) clearInterval(formTimerRef.current)
      if (formInactivityTimeoutRef.current) clearTimeout(formInactivityTimeoutRef.current)
    }
  }, [])

  const handleFormCountrySelect = (
    selected: (typeof countries)[0],
    index: number
  ) => {
    isFormInteractedRef.current = true
    if (formInactivityTimeoutRef.current) clearTimeout(formInactivityTimeoutRef.current)
    if (formTimerRef.current) clearInterval(formTimerRef.current)
    
    setFormCountry(selected)
    formIndexRef.current = (index + 1) % countries.length

    formInactivityTimeoutRef.current = setTimeout(() => {
      isFormInteractedRef.current = false
      const nextCountry = countries[formIndexRef.current]
      setFormCountry(nextCountry)
      formIndexRef.current = (formIndexRef.current + 1) % countries.length
      startFormTimer()
    }, 5000)
  }

  const globeCountries = countries.slice(0, 6)
  const [globeCountry, setGlobeCountry] = useState(globeCountries[0])
  const [globeTrigger, setGlobeTrigger] = useState(0)
  const globeIndexRef = useRef(1)
  const globeTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isInteractedRef = useRef<boolean>(false)
  const globeInactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const startGlobeTimer = () => {
    if (globeTimerRef.current) clearInterval(globeTimerRef.current)

    globeTimerRef.current = setInterval(() => {
      if (isInteractedRef.current) return
      const nextCountry = globeCountries[globeIndexRef.current]
      setGlobeCountry(nextCountry)
      globeIndexRef.current =
        (globeIndexRef.current + 1) % globeCountries.length
    }, 5000)
  }

  useEffect(() => {
    startGlobeTimer()
    return () => {
      if (globeTimerRef.current) clearInterval(globeTimerRef.current)
      if (globeInactivityTimeoutRef.current) clearTimeout(globeInactivityTimeoutRef.current)
    }
  }, [])

  const handleGlobeCountrySelect = (
    selected: (typeof countries)[0],
    index: number
  ) => {
    isInteractedRef.current = true 
    if (globeInactivityTimeoutRef.current) clearTimeout(globeInactivityTimeoutRef.current)
    if (globeTimerRef.current) clearInterval(globeTimerRef.current)

    setGlobeCountry(selected)
    globeIndexRef.current = (index + 1) % globeCountries.length
    setGlobeTrigger(prev => prev + 1)

    globeInactivityTimeoutRef.current = setTimeout(() => {
      isInteractedRef.current = false
      const nextCountry = globeCountries[globeIndexRef.current]
      setGlobeCountry(nextCountry)
      globeIndexRef.current = (globeIndexRef.current + 1) % globeCountries.length
      startGlobeTimer()
    }, 5000)
  }

  return (
    <div className="w-full flex flex-col">
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

            {isCareerPage && (
              <div className={styles.globeFlagsContainer} style={{ marginTop: '20px', marginBottom: '20px' }}>
                {countries.map((c, index) => {
                  const isActive = c.name === formCountry.name

                  return (
                    <motion.button
                      key={c.name}
                      className={`${styles.globeFlag} ${
                        isActive ? styles.globeFlagActive : ''
                      }`}
                      whileHover={{ scale: 1.08 }}
                      animate={{ scale: isActive ? 1.08 : 1 }}
                      onClick={() => handleFormCountrySelect(c, index)}
                      title={c.name}
                    >
                      <Image
                        src={c.icon}
                        alt={`${c.name} flag`}
                        width={72}
                        height={48}
                        className={styles.globeFlagImage}
                      />
                    </motion.button>
                  )
                })}
              </div>
            )}

            <SectionTitle
              text={formCountry.name}
              align="left"
              className={styles.selectedCountryTitle}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={formCountry.name}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <SectionDescription
                  text={formCountry.description}
                  style={{
                    minHeight: 'max(3.125vw, 60px)',
                    maxHeight: 'max(3.125vw, 60px)',
                  }}
                  className={styles.selectedCountryDescription}
                />

                <div className={styles.contactDetailsRow}>
                  <div className={styles.labelContainer}>
                    <div className={styles.iconContainer}>
                      <Email />
                    </div>
                    <p
                      className={styles.selectedCountryDescription}
                      style={{ marginTop: 0 }}
                    >
                      {formCountry.office.email}
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
                      {formCountry.office.phone}
                    </p>
                  </div>
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

      {!isCareerPage && (
        <section className={styles.globeSection}>
          <div className={styles.globeSectionContainer}>
            <div className={styles.globeLeftContainer}>
              <p className={styles.globeLabel}>Contact Us</p>
              <h2 className={styles.globeTitle}>Lets fire up your business!</h2>
              <p className={styles.globeSubtitle}>
                Team up with us today for an unforgettable experience
              </p>

              <div className={styles.globeFlagsContainer}>
                {globeCountries.map((c, index) => {
                  const isActive = c.name === globeCountry.name

                  return (
                    <motion.button
                      key={c.name}
                      className={`${styles.globeFlag} ${
                        isActive ? styles.globeFlagActive : ''
                      }`}
                      whileHover={{ scale: 1.08 }}
                      animate={{ scale: isActive ? 1.08 : 1 }}
                      onClick={() => handleGlobeCountrySelect(c, index)}
                      title={c.name}
                    >
                      <Image
                        src={c.icon}
                        alt={`${c.name} flag`}
                        width={72}
                        height={48}
                        className={styles.globeFlagImage}
                      />
                    </motion.button>
                  )
                })}
              </div>

              <div className={styles.globeActiveCountryDetails}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={globeCountry.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className={styles.globeActiveCountryName}>
                      {globeCountry.name}
                    </p>
                    <p className={styles.globeActiveCountryAddress}>
                      {globeCountry.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className={styles.globeRightContainer}>
              <ThreeGlobe
                lat={globeCountry.coordinates[0]}
                lng={globeCountry.coordinates[1]}
                trigger={globeTrigger}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
