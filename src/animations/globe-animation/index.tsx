'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import DottedMap from 'dotted-map'
import { useTheme } from 'next-themes'
import { Email, Location, Phone } from '@/assets/icons/contact-us/contact'
import { countries } from '@/shared/contact-us-section/countries'
import { SectionTitle } from '@/shared/typography'
import './styles.scss'

type Country = (typeof countries)[number]

interface MapProps {
  locations?: Country[]
  lineColor?: string
}

const mapLocations = [
  countries[0],
  countries[1],
  countries[2],
  countries[6],
  countries[3],
  countries[5],
  countries[4],
]

function WorldMap({ locations = [], lineColor = '#0ea5e9' }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const map = new DottedMap({ height: 100, grid: 'diagonal' })
  const { theme } = useTheme()
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [animatingToIndex, setAnimatingToIndex] = useState<number | null>(null)
  const [animationCycle, setAnimationCycle] = useState(0)
  const [hoveredLocation, setHoveredLocation] = useState<Country | null>(null)
  const activeLocation = locations[activeIndex] || locations[0]
  const displayedLocation = hoveredLocation || activeLocation

  useEffect(() => {
    const mapContainer = mapContainerRef.current
    if (!mapContainer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    observer.observe(mapContainer)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible || locations.length < 2 || hoveredLocation) return

    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => {
        if (animatingToIndex !== null) return currentIndex

        if (currentIndex === locations.length - 1) {
          setAnimationCycle((currentCycle) => currentCycle + 1)
          return 0
        }

        setAnimatingToIndex(currentIndex + 1)
        return currentIndex
      })
    }, 1600)

    return () => clearInterval(timer)
  }, [animatingToIndex, hoveredLocation, isVisible, locations.length])

  useEffect(() => {
    if (isVisible) return

    setActiveIndex(0)
    setAnimatingToIndex(null)
    setAnimationCycle(0)
    setHoveredLocation(null)
  }, [isVisible])

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === 'dark' ? '#FFFFFF40' : '#00000040',
    shape: 'circle',
    backgroundColor: theme === 'dark' ? 'black' : 'white',
  })

  const projectPoint = (lat: number, lng: number) => ({
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180),
  })

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number },
  ) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 50
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  return (
    <div ref={mapContainerRef} className="world-map">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="world-map-image"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="world-map-overlay"
        aria-hidden="true"
      >
        {locations.slice(0, activeIndex).map((location, index) => {
          const nextLocation = locations[index + 1]

          return (
            <path
              key={`${animationCycle}-${location.name}-${nextLocation.name}`}
              d={createCurvedPath(
                projectPoint(location.coordinates[0], location.coordinates[1]),
                projectPoint(nextLocation.coordinates[0], nextLocation.coordinates[1]),
              )}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              pathLength="1"
            />
          )
        })}

        {animatingToIndex !== null && (
          <motion.path
            key={`${animationCycle}-${activeIndex}-${animatingToIndex}`}
            d={createCurvedPath(
              projectPoint(
                locations[activeIndex].coordinates[0],
                locations[activeIndex].coordinates[1],
              ),
              projectPoint(
                locations[animatingToIndex].coordinates[0],
                locations[animatingToIndex].coordinates[1],
              ),
            )}
            fill="none"
            stroke="url(#path-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            onAnimationComplete={() => {
              setActiveIndex(animatingToIndex)
              setAnimatingToIndex(null)
            }}
          />
        )}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {locations
          .slice(0, activeIndex + 1)
          .map((location) => {
            const point = projectPoint(location.coordinates[0], location.coordinates[1])
            const left = (point.x / 800) * 100
            const top = (point.y / 400) * 100

            return (
              <foreignObject
                key={location.name}
                x={point.x - 11}
                y={point.y - 11}
                width="22"
                height="22"
                className="world-map-marker-foreign-object"
              >
                <button
                  type="button"
                  className={`world-map-marker ${displayedLocation?.name === location.name ? 'active' : ''
                    }`}
                  onMouseEnter={() => setHoveredLocation(location)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onFocus={() => setHoveredLocation(location)}
                  onBlur={() => setHoveredLocation(null)}
                  aria-label={`Show details for ${location.name}`}
                >
                  <Image
                    src={location.icon}
                    alt={`${location.name} location`}
                    width={16}
                    height={16}
                    className="world-map-marker-flag"
                  />
                </button>
              </foreignObject>
            )
          })}
      </svg>

      {displayedLocation && (
        <div
          className="world-map-tooltip"
          style={{
            left: `${((displayedLocation.coordinates[1] + 180) / 360) * 100}%`,
            top: `${((90 - displayedLocation.coordinates[0]) / 180) * 100}%`,
          }}
        >
          <div>
            <p className="world-map-tooltip-name">{displayedLocation.name}</p>
            <div className="world-map-tooltip-details">
              <div className="world-map-tooltip-detail">
                <Location />
                <p>
                  {displayedLocation.office?.address ||
                    displayedLocation.description}
                </p>
              </div>
              {displayedLocation.office?.email && (
                <div className="world-map-tooltip-detail">
                  <Email />
                  <a href={`mailto:${displayedLocation.office.email}`}>
                    {displayedLocation.office.email}
                  </a>
                </div>
              )}
              {displayedLocation.office?.phone && (
                <div className="world-map-tooltip-detail">
                  <Phone />
                  <a
                    href={`tel:${displayedLocation.office.phone.replace(/\s+/g, '')}`}
                  >
                    {displayedLocation.office.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function GlobeSection() {
  return (
    <section className="our-office-section">
      <div className="our-office-container">
        <div className="our-office-header">
          <p className="contact-title">Contact Us</p>

          <SectionTitle
            align="center"
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

        <div className="world-map-container">
          <WorldMap locations={mapLocations} lineColor="#eb7c0d" />
        </div>
      </div>
    </section>
  )
}
