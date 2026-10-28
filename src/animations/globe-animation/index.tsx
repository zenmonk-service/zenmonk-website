'use client'

import { AnimatePresence, motion } from 'framer-motion'
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
  const mapStageRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const map = new DottedMap({ height: 100, grid: 'diagonal' })
  const { theme } = useTheme()
  const countryPauseDuration = 2800
  const manualSelectionDuration = 5000
  const selectionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cyclePauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [animatingToIndex, setAnimatingToIndex] = useState<number | null>(null)
  const [animationCycle, setAnimationCycle] = useState(0)
  const [hoveredLocation, setHoveredLocation] = useState<Country | null>(null)
  const [isSelectionPaused, setIsSelectionPaused] = useState(false)
  const [showPaths, setShowPaths] = useState(true)
  const [isManualSelection, setIsManualSelection] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 })
  const activeLocation = locations[activeIndex] || locations[0]
  const displayedLocation = hoveredLocation || activeLocation
  const focusedLocation =
    locations[animatingToIndex ?? activeIndex] || locations[0]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)

    updateIsMobile()
    mediaQuery.addEventListener('change', updateIsMobile)
    return () => mediaQuery.removeEventListener('change', updateIsMobile)
  }, [])

  useEffect(() => {
    const mapStage = mapStageRef.current
    if (!mapStage) return

    const updateMapSize = () => {
      setMapSize({
        width: mapStage.clientWidth,
        height: mapStage.clientHeight,
      })
    }

    updateMapSize()
    const resizeObserver = new ResizeObserver(updateMapSize)
    resizeObserver.observe(mapStage)
    return () => resizeObserver.disconnect()
  }, [])

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
    if (
      !isVisible ||
      locations.length < 2 ||
      hoveredLocation ||
      isSelectionPaused
    )
      return

    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => {
        if (animatingToIndex !== null) return currentIndex

        if (currentIndex === locations.length - 1) {
          setAnimationCycle((currentCycle) => currentCycle + 1)
          setIsSelectionPaused(true)
          if (cyclePauseTimeoutRef.current) {
            clearTimeout(cyclePauseTimeoutRef.current)
          }
          setShowPaths(false)
          cyclePauseTimeoutRef.current = setTimeout(() => {
            setShowPaths(true)
            setIsSelectionPaused(false)
            cyclePauseTimeoutRef.current = null
          }, countryPauseDuration)
          return 0
        }

        setAnimatingToIndex(currentIndex + 1)
        return currentIndex
      })
    }, countryPauseDuration)

    return () => clearInterval(timer)
  }, [
    animatingToIndex,
    hoveredLocation,
    isSelectionPaused,
    isVisible,
    locations.length,
  ])

  useEffect(() => {
    if (isVisible) return

    setActiveIndex(0)
    setAnimatingToIndex(null)
    setAnimationCycle(0)
    setHoveredLocation(null)
    setIsSelectionPaused(false)
    setShowPaths(true)
    setIsManualSelection(false)
  }, [isVisible])

  useEffect(() => {
    return () => {
      if (selectionTimeoutRef.current) {
        clearTimeout(selectionTimeoutRef.current)
      }
      if (cyclePauseTimeoutRef.current) {
        clearTimeout(cyclePauseTimeoutRef.current)
      }
    }
  }, [])

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

  const mobileMapScale = 3
  const focusedPoint = focusedLocation
    ? projectPoint(
        focusedLocation.coordinates[0],
        focusedLocation.coordinates[1],
      )
    : null
  const tooltipPoint = displayedLocation
    ? projectPoint(
        displayedLocation.coordinates[0],
        displayedLocation.coordinates[1],
      )
    : null
  const tooltipPosition =
    isMobile && focusedPoint && tooltipPoint
      ? {
          left: `${
            50 +
            (((tooltipPoint.x - focusedPoint.x) / 800) * 100 * mobileMapScale)
          }%`,
          top: `${
            50 +
            (((tooltipPoint.y - focusedPoint.y) / 400) * 100 * mobileMapScale)
          }%`,
        }
      : tooltipPoint
        ? {
            left: `${(tooltipPoint.x / 800) * 100}%`,
            top: `${(tooltipPoint.y / 400) * 100}%`,
          }
        : undefined

  return (
    <div className="world-map-wrapper">
      <div ref={mapContainerRef} className="world-map">
        <motion.div
          ref={mapStageRef}
          className="world-map-stage"
          animate={{
            x:
              isMobile && focusedPoint && mapSize.width
                ? mapSize.width / 2 -
                  (focusedPoint.x / 800) * mapSize.width * mobileMapScale
                : 0,
            y:
              isMobile && focusedPoint && mapSize.height
                ? mapSize.height / 2 -
                  (focusedPoint.y / 400) * mapSize.height * mobileMapScale
                : 0,
            scale: isMobile && focusedPoint ? mobileMapScale : 1,
          }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
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
            {showPaths &&
              locations.slice(0, activeIndex).map((location, index) => {
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
              .filter(
                (location) =>
                  !isManualSelection ||
                  location.name === focusedLocation?.name,
              )
              .map((location) => {
                const point = projectPoint(location.coordinates[0], location.coordinates[1])

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
        </motion.div>

        {displayedLocation && (
          <div
            className="world-map-tooltip"
            style={{
              ...tooltipPosition,
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

      <div className="mobile-country-panel">
        <div className="mobile-country-flags" role="list">
          {locations.map((location, index) => {
            const isActive = location.name === focusedLocation?.name

            return (
              <button
                key={location.name}
                type="button"
                className={`mobile-country-flag ${isActive ? 'active' : ''}`}
                onClick={() => {
                  if (selectionTimeoutRef.current) {
                    clearTimeout(selectionTimeoutRef.current)
                  }
                  if (cyclePauseTimeoutRef.current) {
                    clearTimeout(cyclePauseTimeoutRef.current)
                    cyclePauseTimeoutRef.current = null
                  }

                  setActiveIndex(index)
                  setAnimatingToIndex(null)
                  setHoveredLocation(null)
                  setShowPaths(false)
                  setIsSelectionPaused(true)
                  setIsManualSelection(true)

                  selectionTimeoutRef.current = setTimeout(() => {
                    setActiveIndex(0)
                    setAnimatingToIndex(null)
                    setIsManualSelection(false)
                    selectionTimeoutRef.current = null

                    if (index === 0) {
                      setShowPaths(true)
                      setIsSelectionPaused(false)
                      return
                    }

                    setShowPaths(false)
                    setIsSelectionPaused(true)
                    cyclePauseTimeoutRef.current = setTimeout(() => {
                      setShowPaths(true)
                      setIsSelectionPaused(false)
                      cyclePauseTimeoutRef.current = null
                    }, countryPauseDuration)
                  }, manualSelectionDuration)
                }}
                aria-label={`Show details for ${location.name}`}
                aria-pressed={isActive}
              >
                <Image
                  src={location.icon}
                  alt={`${location.name} flag`}
                  width={48}
                  height={32}
                />
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          {focusedLocation && (
            <motion.div
              key={focusedLocation.name}
              className="mobile-country-info"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <p className="mobile-country-name">{focusedLocation.name}</p>
              <div className="mobile-country-details">
                <div className="mobile-country-detail">
                  <Location />
                  <p>
                    {focusedLocation.office?.address ||
                      focusedLocation.description}
                  </p>
                </div>
                {focusedLocation.office?.email && (
                  <div className="mobile-country-detail">
                    <Email />
                    <a href={`mailto:${focusedLocation.office.email}`}>
                      {focusedLocation.office.email}
                    </a>
                  </div>
                )}
                {focusedLocation.office?.phone && (
                  <div className="mobile-country-detail">
                    <Phone />
                    <a
                      href={`tel:${focusedLocation.office.phone.replace(/\s+/g, '')}`}
                    >
                      {focusedLocation.office.phone}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
