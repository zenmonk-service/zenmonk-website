'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { toggleLoader } from '@/store/features/header/header-slice'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import FullScreenLoading from '@/shared/lazy-section-wrapper/loader'

const CustomLoader = () => {
  const dispatch = useAppDispatch()
  const pathname = usePathname()
  const isPageLoading = useAppSelector((state) => state.header.isLoading)

  useEffect(() => {
    // Force reset loader on navigation
    dispatch(toggleLoader(false))
  }, [pathname, dispatch])

  return isPageLoading ? <FullScreenLoading /> : null
}

export default CustomLoader

