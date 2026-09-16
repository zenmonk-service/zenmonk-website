'use client'

import { useEffect } from 'react'
import { useLinkStatus } from 'next/link'
import { usePathname } from 'next/navigation'
import { toggleLoader } from '@/store/features/header/header-slice'
import { useAppDispatch } from '@/store/hooks'

export default function LoadingIndicator({ targetHref }: { targetHref?: string }) {
  const { pending } = useLinkStatus()
  const pathname = usePathname()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (pending) {
      if (targetHref && pathname === targetHref) {
        return
      }
      dispatch(toggleLoader(true))
    }
  }, [pending, targetHref, pathname, dispatch])

  return null
}
