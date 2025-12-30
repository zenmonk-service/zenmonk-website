'use client'

import { createContext, useContext } from 'react'
import type { ScrollSmoother } from 'gsap/ScrollSmoother'

export const ScrollContext =
  createContext<React.RefObject<ScrollSmoother | null> | null>(null)

export function useScrollSmoother() {
  const ctx = useContext(ScrollContext)
  return ctx
}
