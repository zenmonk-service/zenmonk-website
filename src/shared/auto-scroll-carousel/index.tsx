'use client'

import React, { CSSProperties, ReactNode, useMemo } from 'react'
import './styles.scss'

export interface SliderData {
  background?: string
}

export interface AutoScrollCarouselProps<T> {
  data: T[]
  renderItem: (item: T, index: number) => ReactNode

  showBackground?: boolean
  isBgShadow?: boolean
  reverse?: boolean

  /** Space between items in DESIGN px (based on 1920) */
  space?: number

  sliderProps?: {
    className?: string
    style?: CSSProperties
  }

  /** DESIGN px width of a single slide item (based on 1920) */
  itemWidth?: number

  /** DESIGN px height of a single slide item (based on 1920) */
  itemHeight?: number

  /** animation duration in seconds */
  duration?: number

  bgColor?: string
}

/** px → vw based on 1920 */
const pxToVw = (px: number) => `${(px / 1920) * 100}vw`

export default function AutoScrollCarousel<T extends SliderData>({
  data,
  renderItem,
  showBackground = false,
  isBgShadow = false,
  reverse = false,
  space = 40,
  sliderProps,
  itemWidth = 320,
  itemHeight,
  duration = 40,
  bgColor,
}: AutoScrollCarouselProps<T>) {
  const items = useMemo(() => {
    if (!data || data.length === 0) return []
    return [...data, ...data]
  }, [data])

  if (items.length === 0) return null

  const trackStyle: CSSProperties = {
    animationDuration: `${duration}s`,
    animationDirection: reverse ? 'reverse' : 'normal',
    width: 'max-content',
    ['--item-width' as any]: pxToVw(itemWidth),
    ['--item-padding' as any]: pxToVw(space / 2),
  }

  return (
    <div
      className={`slider ${showBackground ? 'slider-bg' : ''} ${isBgShadow ? 'slider-shadow' : ''
        } ${sliderProps?.className || ''}`}
      style={sliderProps?.style}
    >
      <div className="slide-track" style={trackStyle}>
        {items.map((item, index) => (
          <div
            key={index}
            className="slide-item"
          >
            <div
              className="slide-content-wrapper"
              style={{
                background: showBackground
                  ? bgColor || (item as SliderData).background
                  : undefined,
                height: itemHeight ? pxToVw(itemHeight) : undefined,
                position: 'relative',
              }}
            >
              {renderItem(item, index)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function InfiniteSlider<T extends SliderData>(
  props: AutoScrollCarouselProps<T>
) {
  return <AutoScrollCarousel {...props} />
}
