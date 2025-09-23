'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import FlashScreen from '@/modules/home/flash-screen'
import './globals.css'

export default function FlashScreenLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [showFlashScreen, setShowFlashScreen] = useState(true)
  const page = usePathname()
  return showFlashScreen && page === '/' ? (
    <FlashScreen closeScreen={() => setShowFlashScreen(false)} />
  ) : (
    children
  )
}
