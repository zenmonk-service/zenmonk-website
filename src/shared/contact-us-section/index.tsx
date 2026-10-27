'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import GlobeSection from '@/animations/globe-animation'
import { Email, Location, Phone } from '@/assets/icons/contact-us/contact'
import { ContactForm } from '../../modules/about-us/components/contact-form'
import { SectionTitle } from '../typography'
import Polygon from './assets/polygon.svg'
import styles from './contact-us-section.module.scss'
import { countries } from './countries'

interface ContactUsSectionProps {
  isCareerPage?: boolean
  showFlagsOnly?: boolean
  isContactPage?: boolean
}

export const ContactUsSection = ({
  isCareerPage = false,
  showFlagsOnly = false,
  isContactPage = false,
}: ContactUsSectionProps) => {
  const showFlags = isCareerPage || showFlagsOnly
  const [formCountry, setFormCountry] = useState(countries[0])
  const formIndexRef = useRef(1)
  const formTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isFormInteractedRef = useRef<boolean>(false)
  const formInactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const startFormTimer = () => {
    if (!showFlags) return
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <div className="w-full flex flex-col">
      <div className={`${styles.aboutUsContactUsSection} ${isContactPage ? styles.contactPageSpacing : ''}`}>
        <Image
          src="/contact-us-bg.svg"
          className={styles.contactUsBg}
          alt="contact-us-bg"
          fill
        />

        <div className={styles.contactUs}>
          <div className={styles.leftContainer}>
            <SectionTitle text="We're Just a Message Away" highlightedText="Message" align="left" />

            {showFlags && (
              <div className={`${styles.globeFlagsContainer} ${showFlagsOnly ? styles.aboutUsFlags : ''}`} style={{ marginTop: '20px', marginBottom: '20px' }}>
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

            <div className={styles.formCountryDetailsWrapper}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={formCountry.name}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className={styles.formCountryDetailsInner}
                >
                  {/* Container 1: Country Title */}
                  <div className={styles.addressContainer}>
                    <SectionTitle
                      text={formCountry.name.toUpperCase()}
                      align="left"
                      className={styles.selectedCountryTitle}
                    />
                  </div>

                  {/* Container 2: Country Address & Contact Details */}
                  <div className={styles.contactDetailsRow}>
                    <div className={`${styles.labelContainer} ${styles.locationContainer}`}>
                      <div className={styles.iconContainer}>
                        <Location />
                      </div>
                      <p className={styles.contactDetailText}>
                        {formCountry.office?.address || formCountry.description}
                      </p>
                    </div>

                    <div
                      className={styles.labelContainer}
                      style={{
                        visibility: formCountry.office?.email ? 'visible' : 'hidden',
                        pointerEvents: formCountry.office?.email ? 'auto' : 'none',
                      }}
                    >
                      <div className={styles.iconContainer}>
                        <Email />
                      </div>
                      <a
                        href={formCountry.office?.email ? `mailto:${formCountry.office.email}` : undefined}
                        className={styles.contactDetailText}
                      >
                        {formCountry.office?.email || 'admin@zenmonk.tech'}
                      </a>
                    </div>

                    <div
                      className={styles.labelContainer}
                      style={{
                        visibility: formCountry.office?.phone ? 'visible' : 'hidden',
                        pointerEvents: formCountry.office?.phone ? 'auto' : 'none',
                      }}
                    >
                      <div className={styles.iconContainer}>
                        <Phone />
                      </div>
                      <a
                        href={formCountry.office?.phone ? `tel:${formCountry.office.phone.replace(/\s+/g, '')}` : undefined}
                        className={styles.contactDetailText}
                      >
                        {formCountry.office?.phone || '+91 9012345678'}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className={styles.rightContainer}>
            <ContactForm />
          </div>
        </div>

        <Polygon className={styles.polygon} />
      </div>

      {!showFlags && <GlobeSection />}
    </div>
  )
}
