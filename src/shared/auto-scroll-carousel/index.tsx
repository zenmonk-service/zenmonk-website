'use client'

import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import './styles.scss'

interface SliderData {
  label: string
  icon: any
  background?: string
}

interface AutoScrollCarouselProps {
  data: SliderData[]
  showBackground?: boolean
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

const AutoScrollCarousel = (props: AutoScrollCarouselProps) => {
  const { data, showBackground, reverse } = props
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
    }
  }, [])

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
          style={{ background: showBackground ? background : undefined }}
          className="auto-scroll-container"
          key={label + index}
        >
          <Svg className="auto-scroll-images" />
        </div>
      ))}
    </Marquee>
  )
}

export default AutoScrollCarousel
