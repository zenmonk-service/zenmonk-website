'use client'

import { useEffect } from 'react'
import { useLinkStatus } from 'next/link'
import { toggleLoader } from '@/store/features/header/header-slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

export default function LoadingIndicator() {
  const { pending } = useLinkStatus()
  const dispatch = useAppDispatch()
  const isPageLoading = useAppSelector((state) => state.header.isLoading)

  useEffect(() => {
    dispatch(toggleLoader(pending))
  }, [pending])
  return null
}
