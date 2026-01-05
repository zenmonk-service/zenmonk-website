'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { countries } from '@/shared/contact-us-section/countries'
import { SectionTitle } from '@/shared/typography'
import Globe from './globe'
import './styles.scss'
import { Box } from '@mui/material'

export default function GlobeSection() {
  const clickRef = useRef<boolean>(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [country, setCountry] = useState(countries[0])

  const indexRef = useRef(1)

  const onClick = (countryData: typeof countries[0]) => {
    clickRef.current = true

    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      clickRef.current = false
    }, 2000)

    setCountry(countryData)
    // Update indexRef so auto-rotation continues from here
    indexRef.current = (countries.indexOf(countryData) + 1) % countries.length
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (clickRef.current) return // Don't auto-rotate if user just clicked

      const nextCountry = countries[indexRef.current]
      setCountry(nextCountry)
      indexRef.current = (indexRef.current + 1) % countries.length
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="our-office-section">
      <div className="our-office-container">
        <div className="our-office-header">
          <p className="contact-title">Contact Us</p>

          <SectionTitle
            align="left"
            text="Lets fire up your business!"
            markText="business!"
            markTextProps={{
              rotate: 5,
              style: { marginTop: '-0.45vw' },
            }}
          />

          <p className="contact-description">
            Team up with us today for an unforgettable experience
          </p>
        </div>

        <div className="globe-container">
          <div className="glow-background" />
          <div className="globe-shadow" />
          <Globe
            clickRef={clickRef}
            coordinates={country.coordinates as [number, number]}
            activeCountryName={country.name}
          />
        </div>

        <Box className="our-office-country-flag-container">
          <div className="flags-container">
            {countries.map((countryData) => {
              const { name, img } = countryData
              const active = name === country.name

              return (
                <motion.div
                  key={name}
                  className={`our-office-country-flag ${active ? 'selected' : ''}`}
                  whileHover={{ scale: 1.1 }}
                  animate={{ scale: active ? 1.15 : 1 }}
                  transition={{ type: 'spring', stiffness: 260 }}
                  onClick={() => onClick(countryData)}
                  style={{
                    backgroundImage: `url(${img})`,
                  }}
                />
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={country.name}
              className="country-info"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="country-name">{country.name}</p>
              <p className="country-address">{country.office.address}</p>
            </motion.div>
          </AnimatePresence>
        </Box>
      </div>
    </section>
  )
}
