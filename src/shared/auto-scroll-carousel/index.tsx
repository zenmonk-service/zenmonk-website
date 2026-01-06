'use client'

import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import './styles.scss'

interface SliderData {
  label: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
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
  space?: number;
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
  imageProps,
  sliderProps,
  space = 24,
}: AutoScrollCarouselProps) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const shouldShowBackground = showBackground ?? isBgShadow ?? false

  return (
    <Marquee
      className={sliderProps?.className}
      pauseOnHover
      gradient
      gradientWidth={width / 10}
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
            marginRight: space,
          }}
        >
          <Svg
            className="auto-scroll-images"
            style={{
              width: imageProps?.size?.width,
              height: imageProps?.size?.height,
            }}
          />
        </div>
      ))}
    </Marquee>
  )
}

export default AutoScrollCarousel
