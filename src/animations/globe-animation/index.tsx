'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { countries } from '@/shared/contact-us-section/countries'
import { SectionTitle } from '@/shared/typography'
import GlobeShadowImg from "./globe-shadow.svg?url"
import './styles.scss'

const ThreeGlobe = dynamic(() => import('@/shared/contact-us-section/three-globe'), {
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

export default function GlobeSection() {
  const clickRef = useRef<boolean>(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const [country, setCountry] = useState(countries[0])
  const [trigger, setTrigger] = useState(0)

  const indexRef = useRef(1)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      if (clickRef.current) return
      const nextCountry = countries[indexRef.current]
      setCountry(nextCountry)
      indexRef.current = (indexRef.current + 1) % countries.length
    }, 3000)
  }

  const onClick = (countryData: typeof countries[0]) => {
    clickRef.current = true

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (timerRef.current) clearInterval(timerRef.current)

    setCountry(countryData)
    indexRef.current = (countries.indexOf(countryData) + 1) % countries.length
    setTrigger(prev => prev + 1)

    timeoutRef.current = setTimeout(() => {
      clickRef.current = false
      const nextCountry = countries[indexRef.current]
      setCountry(nextCountry)
      indexRef.current = (indexRef.current + 1) % countries.length
      startTimer()
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
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
          <ThreeGlobe
            lat={country.coordinates[0]}
            lng={country.coordinates[1]}
            trigger={trigger}
          />
          <div className="globe-shadow-wrapper" style={{ position: 'absolute', bottom: '-20px', width: '60%', height: '40px', zIndex: -1 }}>
            <Image src={GlobeShadowImg} alt="globe shadow" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>

        <div className="our-office-country-flag-container">
          <div className="flags-container">
            {countries.map((countryData) => {
              const { name, icon } = countryData
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
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={icon}
                    alt={`${name} flag`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
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
              <p className="country-address">{country.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
