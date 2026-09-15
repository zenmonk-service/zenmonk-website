'use client'

import { useEffect } from 'react'

/**
 * Custom hook to lock window/body scrolling without modifying html/body overflow or position,
 * preventing any unwanted scroll-to-top layout jumps while completely blocking background scroll.
 *
 * @param isLocked Whether scroll locking is active
 * @param allowSelector Optional CSS selector for containers whose internal scroll should be allowed
 */
export const useScrollLock = (isLocked: boolean, allowSelector?: string) => {
  useEffect(() => {
    if (!isLocked || typeof window === 'undefined') return

    const handleWheel = (e: WheelEvent) => {
      if (allowSelector) {
        const target = e.target as HTMLElement | null
        const scrollable = target?.closest(allowSelector) as HTMLElement | null
        if (scrollable && scrollable.scrollHeight > scrollable.clientHeight) {
          // Allow internal scrolling inside the allowed container
          return
        }
      }

      if (e.cancelable) {
        e.preventDefault()
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (allowSelector) {
        const target = e.target as HTMLElement | null
        const scrollable = target?.closest(allowSelector) as HTMLElement | null
        if (scrollable && scrollable.scrollHeight > scrollable.clientHeight) {
          // Allow internal touch scroll inside the allowed container
          return
        }
      }

      if (e.cancelable) {
        e.preventDefault()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']
      if (scrollKeys.includes(e.key)) {
        const activeTag = (document.activeElement?.tagName || '').toLowerCase()
        if (['input', 'textarea', 'select'].includes(activeTag)) {
          return
        }

        if (allowSelector) {
          const activeEl = document.activeElement as HTMLElement | null
          const target = e.target as HTMLElement | null
          const scrollable = (activeEl?.closest(allowSelector) || target?.closest(allowSelector)) as HTMLElement | null
          if (scrollable && scrollable.scrollHeight > scrollable.clientHeight) {
            return
          }
        }

        if (e.cancelable) {
          e.preventDefault()
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('keydown', handleKeyDown, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLocked, allowSelector])
}
