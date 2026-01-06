'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import FlashScreen from '@/modules/home/flash-screen'
import './globals.css'
import StoreProvider from '@/store/storeProvider'

export default function FlashScreenLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [showFlashScreen, setShowFlashScreen] = useState(true)
  const page = usePathname()

  useEffect(() => {
    const hasVisited = localStorage.getItem('zenmonk_visited')
    if (hasVisited) {
      setShowFlashScreen(false)
    }
  }, [])

  const handleCloseScreen = () => {
    localStorage.setItem('zenmonk_visited', 'true')
    setShowFlashScreen(false)
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={showFlashScreen && page === '/' ? 'no-scroll' : ''}>
        {showFlashScreen && page === '/' ? (
          <FlashScreen closeScreen={handleCloseScreen} />
        ) : (
          <StoreProvider>{children}</StoreProvider>
        )}
      </body>
    </html>
  )
}
