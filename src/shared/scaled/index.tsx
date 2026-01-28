'use client'

import React, { useEffect, useState, useRef } from 'react'

interface ScaledProps {
  children: React.ReactNode
  baseWidth?: number
  minScale?: number
  maxScale?: number
  mobileBreakpoint?: number
}

const Scaled: React.FC<ScaledProps> = ({
  children,
  baseWidth = 1920,
  minScale = 0.5,
  maxScale = 1,
  mobileBreakpoint = 768,
}) => {
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState<string | number>('auto')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth
      if (width <= mobileBreakpoint || width >= baseWidth) {
        setScale(1)
        return
      }

      const newScale = Math.min(Math.max(width / baseWidth, minScale), maxScale)
      setScale(newScale)
    }

    const updateHeight = () => {
      const width = window.innerWidth
      if (contentRef.current && width > mobileBreakpoint && width < baseWidth) {
        const currentScale = Math.min(Math.max(width / baseWidth, minScale), maxScale)
        setHeight(contentRef.current.offsetHeight * currentScale)
      } else {
        setHeight('auto')
      }
    }

    const handleResize = () => {
      updateScale()
      updateHeight()
    }

    // Initial calculation
    updateScale()

    // Use ResizeObserver to catch height changes in children
    const resizeObserver = new ResizeObserver(() => {
      updateHeight()
    })

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
    }
  }, [baseWidth, minScale, maxScale, mobileBreakpoint])

  return (
    <div
      style={{
        width: '100%',
        height: height,
        overflow: 'clip', // clip is safer than hidden as it still allows ResizeObserver to work but doesn't create scrollbars
        position: 'relative',
      }}
    >
      <div
        ref={contentRef}
        style={{
          width: '100%',
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          position: typeof height === 'number' ? 'absolute' : 'relative',
          top: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Scaled
