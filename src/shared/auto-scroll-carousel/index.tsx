'use client'

import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import './styles.scss'

interface SliderData {
  label: string
  icon: React.ComponentType<{ className?: string }>
  background?: string
}

interface AutoScrollCarouselProps {
  data: SliderData[]
  showBackground?: boolean
  isBgShadow?: boolean
  reverse?: boolean
  sliderProps?: {
    className?: string
  }
  imageProps?: {
    size?: {
      height?: number
      width?: number
    }
  }
}

const AutoScrollCarousel = ({
  data,
  showBackground,
  isBgShadow,
  reverse,
}: AutoScrollCarouselProps) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const shouldShowBackground = showBackground ?? isBgShadow ?? false

  return (
    <Marquee
      pauseOnHover
      gradient
      gradientWidth={width / 4}
      speed={width / 40}
      autoFill
      direction={reverse ? 'right' : 'left'}
    >
      {data.map(({ label, icon: Svg, background }, index) => (
        <div
          key={`${label}-${index}`}
          className="auto-scroll-container"
          style={{
            background: shouldShowBackground ? background : undefined,
          }}
        >
          <Svg className="auto-scroll-images" />
        </div>
      ))}
    </Marquee>
  )
}

export default AutoScrollCarousel
