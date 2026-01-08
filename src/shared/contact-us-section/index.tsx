'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Email, Phone, Location } from '@/assets/icons/contact-us/contact'
import { ContactForm } from '../../modules/about-us/components/contact-form'
import { countries } from './countries'
import './styles.scss'
import Image from 'next/image'

export const ContactUsSection = () => {
  const [country, setCountry] = useState(countries[0])
  const indexRef = useRef(1)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      setCountry(countries[indexRef.current])
      indexRef.current = (indexRef.current + 1) % countries.length
    }, 3000)
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
    <div className="about-us-contact-us-section">
        <Image src="/contact-us-bg.svg" className='contact-us-bg' alt="contact-us-bg" fill />
      <div className="contact-us">
        <div className="left-container">
          <h1 className="section-title">
            We&apos;re Just a <br />
            <span>Message</span> Away
          </h1>
          <div className="countries-flags-container" style={{ display: 'flex', gap: '1.25vw', marginTop: '1.25vw' }}>
            {countries.map(({ name, img }, index) => {
              const isSelected = name === country.name
              return (
                <motion.div
                  key={name}
                  animate={{ scale: isSelected ? 1.2 : 1 }}
                  transition={{ type: 'easeInOut', stiffness: 300 }}
                  onMouseEnter={() => handleMouseEnter(countries[index], index)}
                  onMouseLeave={() => handleMouseLeave()}
                  style={{
                    backgroundImage: `url(${img})`,
                    ...(isSelected && {
                      boxShadow: `0px 0px 33px 1px #FFC878`,
                    }),
                  }}
                  className="country-flag"
                />
              )
            })}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={`index-${country.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="selected-country-title">{country.name}</p>
              <p className="selected-country-description">
                {country.description}
              </p>
              <div className="label-container">
                <Email className="icon" />
                <p className="selected-country-description label">
                  {country.office.email}
                </p>
              </div>
              <div className="label-container">
                <Location className="icon" />
                <p className="selected-country-description label">
                  {country.office.address}
                </p>
              </div>
              <div className="label-container">
                <Phone className="icon" />
                <p className="selected-country-description label">
                  {country.office.phone}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="right-container">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
