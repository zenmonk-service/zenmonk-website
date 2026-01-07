'use client'

import Marquee from 'react-fast-marquee'

export interface SliderData {
  background?: string
}

interface AutoScrollCarouselProps<T extends SliderData> {
  data: T[]
  showBackground?: boolean
  isBgShadow?: boolean
  reverse?: boolean
  sliderProps?: {
    className?: string
  }
  space?: number
  renderItem: (item: T, index: number) => React.ReactNode
}

export default function AutoScrollCarousel<T extends SliderData>({
  data,
  showBackground,
  isBgShadow,
  reverse = false,
  sliderProps,
  space = 24,
  renderItem,
}: AutoScrollCarouselProps<T>) {
  const shouldShowBackground = showBackground ?? isBgShadow ?? false

  return (
    <Marquee
      className={sliderProps?.className}
      speed={40}
      pauseOnHover
      gradient={false}
      autoFill   // ✅ REQUIRED for infinite illusion
      direction={reverse ? 'right' : 'left'}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="auto-scroll-container"
          style={{
            marginRight: space,
            background: shouldShowBackground ? item.background : undefined,
          }}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </Marquee>
  )
}
