'use client'

import type { Metadata } from 'next'
import { Poppins, Montserrat, Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import FlashScreen from '@/modules/home/flash-screen'
import './globals.css'
import StoreProvider from '@/store/storeProvider'
import CustomLoader from '@/modules/loader'
import { Footer } from '@/shared/footer-section'
import Header from '@/shared/header'
import SmoothScroller from '@/shared/scroll-smoother'
import ScrollProvider from '@/shared/scroll-smoother/scroll-provider'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})


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

  useEffect(() => {
    // Ensuring scroll is unlocked when component unmounts or loading finishes
    // if (!showFlashScreen) {
    //   document.body.style.overflow = ''
    // }
  }, [showFlashScreen])

  const handleCloseScreen = () => {
    localStorage.setItem('zenmonk_visited', 'true')
    setShowFlashScreen(false)
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable} ${montserrat.variable}`}>
        {showFlashScreen ? (
          <FlashScreen closeScreen={handleCloseScreen} />
        ) : (
          <StoreProvider>
            <AppRouterCacheProvider>
              <ScrollProvider>
                <Header />
                <CustomLoader />
                <SmoothScroller>
                  {children}
                  <Footer />
                </SmoothScroller>
              </ScrollProvider>
            </AppRouterCacheProvider>
          </StoreProvider>
        )}
      </body>
    </html>
  )
}
