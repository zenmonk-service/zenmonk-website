'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import useMediaQuery from '@mui/material/useMediaQuery'

interface StatsCircleProps {
  percentage: number
  value: string
  label: string
  subLabel: string
  color: string
  trackColor?: string
}

export const StatsCircle = ({
  percentage,
  value,
  label,
  subLabel,
  color,
  trackColor = '#E9EDF0',
}: StatsCircleProps) => {
  const isMobile = useMediaQuery('(max-width:768px)')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  const responsiveSize = (px: number, base = 1920) => {
    return isMobile ? `${px}px` : `${(px / base) * 100}vw`
  }

  // SVG geometry (KEEP PX)
  const radius = 80
  const strokeWidth = 14
  const size = 188
  const center = size / 2
  const circumference = 2 * Math.PI * radius

  const arcLengthAngle = 360
  const startAngle = 140

  const visibleStroke = (arcLengthAngle / 360) * circumference
  const gapStroke = circumference - visibleStroke

  const [currentPercent, setCurrentPercent] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 1500
    const startTime = performance.now()

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCurrentPercent(percentage * ease)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, percentage])

  const strokeDasharray = `${visibleStroke} ${gapStroke}`
  const colorDashArray = `${(currentPercent / 100) * visibleStroke} ${circumference}`

  const angleRad =
    ((startAngle + (currentPercent / 100) * arcLengthAngle) * Math.PI) / 180
  const knobX = center + radius * Math.cos(angleRad)
  const knobY = center + radius * Math.sin(angleRad)

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: responsiveSize(size),
        height: responsiveSize(size),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        style={{
          position: 'absolute',
          inset: 0,
          transform: isMobile ? 'rotate(18deg)' : 'rotate(0deg)',
        }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth - 8}
          fill="none"
        />

        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth + 8}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={colorDashArray}
          transform={`rotate(${startAngle} ${center} ${center})`}
        />

        <circle
          cx={knobX}
          cy={knobY}
          r={10}
          fill="white"
          stroke={color}
          strokeWidth={8}
          style={{ filter: 'drop-shadow(0 0.10vw 0.10vw rgba(0,0,0,0.1))' }}
        />
      </svg>

      <div
        style={{
          textAlign: 'center',
          zIndex: 1,
          transform: isMobile ? 'rotate(18deg)' : 'rotate(0deg)',
        }}
      >
        <div
          style={{
            color: '#404040',
            fontSize: responsiveSize(28),
            fontWeight: 700,
            lineHeight: '1',
          }}
        >
          {value}
        </div>

        <div
          style={{
            color: '#404040',
            fontSize: responsiveSize(15),
            fontWeight: 700,
            lineHeight: 'normal',
            marginTop: responsiveSize(7),
          }}
        >
          {label}
          <br />
          {subLabel}
        </div>
      </div>
    </div>
  )
}
