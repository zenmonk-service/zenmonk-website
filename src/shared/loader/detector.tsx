'use client'

import { useEffect } from 'react'
import { useLinkStatus } from 'next/link'
import { toggleLoader } from '@/store/features/header/header-slice'
import { useAppDispatch } from '@/store/hooks'

export default function LoadingIndicator() {
  const { pending } = useLinkStatus()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(toggleLoader(pending))
  }, [pending])
  return null
}
