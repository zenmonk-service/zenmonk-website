'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { countries } from '@/shared/contact-us-section/countries'
import { SectionTitle } from '@/shared/typography'
import Globe from './globe'
import './styles.scss'

export default function Cobe() {
  const clickRef = useRef(false)
  const focusRef = useRef([0, 0])
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [country, setCountry] = useState(countries[0])
  let index = 1

  const onClick = ([lat, long]: number[]) => {
    clickRef.current = true
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      clickRef.current = false
    }, 2000)

    focusRef.current = [
      Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
      (lat * Math.PI) / 180,
    ]
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCountry(countries[index])
      index = (index + 1) % countries.length
    }, 3000)

    return () => clearInterval(interval) // cleanup
  }, [])

  return (
    <div className="our-office-container">
      <div className="our-office-content">
        <p className="contact-title">Contact Us</p>
        <SectionTitle
          align="left"
          text="Lets fire up your business!"
          markText="business!"
          markTextProps={{
            rotate: 2,
          }}
        />
        <p className="contact-description">
          Team up with us today for an unforgettable experience
        </p>
        <div className="flags-container">
          {countries.map((countryData) => {
            const { name, img, coordinates } = countryData
            return (
              <motion.div
                key={name}
                className="our-office-country-flag"
                whileHover={{ scale: 1.1 }}
                animate={{ scale: name === country.name ? 1.2 : 1 }}
                onClick={() => {
                  onClick(coordinates)
                }}
                transition={{ type: 'easeInOut', stiffness: 300 }}
                style={{
                  backgroundImage: `url(${img})`,
                  ...(name === country.name && {
                    boxShadow: `0 0 0.26vw 0.26vw rgba(255, 168, 80, 0.4)`,
                  }),
                }}
              />
            )
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={`index-${country.name}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="country-name">{country.name}</p>
            <p key={`index-${country.name}`} className="country-address">
              {country.office.address}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="globe-container">
        <div className="glow-background"></div>
        <Globe clickRef={clickRef} focusRef={focusRef} />
      </div>
    </div>
  )
}
