'use client'
 
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { toggleLoader } from '@/store/features/header/header-slice'
import FullScreenLoading from '@/shared/lazy-section-wrapper/loader'
 
const CustomLoader = () => {
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const isPageLoading = useAppSelector((state) => state.header.isLoading)
  const prevPathnameRef = useRef(pathname)

  // When pathname changes, keep the monk loader visible for a brief window (350ms)
  // to allow the new page DOM, fonts, and scroll-to-top to settle before revealing the page.
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname
      const timer = setTimeout(() => {
        dispatch(toggleLoader(false))
      }, 350)
      return () => clearTimeout(timer)
    }
  }, [pathname, dispatch])

  // Safety fallback: Never allow the monk loader to remain visible for more than 2.5s
  useEffect(() => {
    if (!isPageLoading) return

    const fallbackTimer = setTimeout(() => {
      dispatch(toggleLoader(false))
    }, 2500)

    return () => clearTimeout(fallbackTimer)
  }, [isPageLoading, dispatch])
 
  return isPageLoading ? <FullScreenLoading /> : null
}
 
export default CustomLoader
