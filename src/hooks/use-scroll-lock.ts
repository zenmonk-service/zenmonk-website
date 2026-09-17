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

    const isElementScrollable = (el: HTMLElement, deltaY?: number): boolean => {
      if (!allowSelector) return false

      const allowedContainer = el.closest(allowSelector) as HTMLElement | null
      if (!allowedContainer) return false

      let current: HTMLElement | null = el
      while (current && current !== document.body && current !== document.documentElement) {
        const style = window.getComputedStyle(current)
        const overflowY = style.overflowY
        if (
          (overflowY === 'auto' || overflowY === 'scroll') &&
          current.scrollHeight > current.clientHeight
        ) {
          if (deltaY !== undefined) {
            const isAtTop = current.scrollTop <= 0 && deltaY < 0
            const isAtBottom = current.scrollTop + current.clientHeight >= current.scrollHeight - 1 && deltaY > 0
            if (!isAtTop && !isAtBottom) {
              return true
            }
          } else {
            return true
          }
        }

        if (current === allowedContainer) break
        current = current.parentElement
      }

      if (allowedContainer.scrollHeight > allowedContainer.clientHeight) {
        if (deltaY !== undefined) {
          const isAtTop = allowedContainer.scrollTop <= 0 && deltaY < 0
          const isAtBottom = allowedContainer.scrollTop + allowedContainer.clientHeight >= allowedContainer.scrollHeight - 1 && deltaY > 0
          if (!isAtTop && !isAtBottom) {
            return true
          }
        } else {
          return true
        }
      }

      return false
    }

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null
      if (target && isElementScrollable(target, e.deltaY)) {
        return
      }

      if (e.cancelable) {
        e.preventDefault()
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null
      if (target && isElementScrollable(target)) {
        return
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

        const activeEl = document.activeElement as HTMLElement | null
        const target = e.target as HTMLElement | null
        if ((activeEl && isElementScrollable(activeEl)) || (target && isElementScrollable(target))) {
          return
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
