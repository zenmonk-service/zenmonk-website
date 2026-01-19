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
  align: 'left' | 'center' | 'right'
  trackColor?: string
}

export const StatsCircle = ({
  percentage,
  value,
  label,
  subLabel,
  color,
  align = 'center',
  trackColor = '#E9EDF0',
}: StatsCircleProps) => {
  const isMobile = useMediaQuery('(max-width:768px)')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  const responsiveSize = (px: number, base = 1920) => {
    return isMobile ? `${px}px` : `${(px / base) * 100}vw`
  }

  // SVG geometry (KEEP PX)
  const radius = 94
  const strokeWidth = 22
  const size = 210
  const center = size / 2
  const circumference = 2 * Math.PI * radius

  const arcLengthAngle = 260
  const startAngle = 140

  const visibleStroke = (arcLengthAngle / 360) * circumference

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

  const colorDashArray = `${(currentPercent / 100) * visibleStroke} ${circumference}`

  const angleRad =
    ((startAngle + (currentPercent / 100) * arcLengthAngle) * Math.PI) / 180
  const knobX = center + radius * Math.cos(angleRad)
  const knobY = center + radius * Math.sin(angleRad)

  const getAlignment = (align: 'left' | 'center' | 'right') => {
    if (!isMobile) return { alignItems: 'center' }
    if (align === 'right') {
      return { alignItems: 'flex-end' }
    } else if (align === 'left') {
      return { alignItems: 'flex-start' }
    } else {
      return { alignItems: 'center' }
    }
  }

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: isMobile? "100%": 'max(10.9vw, 124px)',
        height: 'max(124px, 12vw)',
        display: 'flex',
        flexDirection: 'column',
        ...getAlignment(align),
        justifyContent: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <svg
        width='max(124px, 10.9vw)'
        height='max(133px, 100%)'
        viewBox={`0 0 ${size} ${size}`}
        style={{
          position: 'absolute',
          ...(isMobile && align === 'right' && { right: 0 }),
        }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={trackColor}
          strokeWidth={12}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          transform={`rotate(${startAngle} ${center} ${center})`}
        />

        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={colorDashArray}
          transform={`rotate(${startAngle} ${center} ${center})`}
        />

        <circle
          cx={knobX}
          cy={knobY}
          r={12}
          fill="white"
          stroke={color}
          strokeWidth={5}
          style={{ filter: 'drop-shadow(0 0.10vw 0.10vw rgba(0,0,0,0.1))' }}
        />
      </svg>

      <div
        style={{
          textAlign: 'center',
          zIndex: 1,
          paddingLeft: isMobile && align === 'left' ? '35px' : '0px',
          paddingRight: isMobile && align === 'right' ? '33px' : '0px',
        }}
      >
        <div
          style={{
            color: '#404040',
            fontSize: "max(1.5vw, 24px)",
            fontWeight: 700,
            lineHeight: '1',
          }}
        >
          {value}
        </div>

        <div
          style={{
            color: '#404040',
            fontSize: "max(0.83vw, 10px)",
            fontWeight: 700,
            lineHeight: 'normal',
            marginTop: isMobile ? "4px" : responsiveSize(8),
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
