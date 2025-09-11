'use client'

import { useRef } from 'react'
import type { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollContext } from './scroll-context'

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const smootherRef = useRef<ScrollSmoother | null>(null)

  return (
    <ScrollContext.Provider value={smootherRef}>
      {children}
    </ScrollContext.Provider>
  )
}
