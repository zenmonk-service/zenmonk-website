'use client'

import { Poppins, Montserrat, Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { useEffect, useState, Suspense } from 'react'
import { usePathname } from 'next/navigation'
import FlashScreen from '@/modules/home/flash-screen'
import StoreProvider from '@/store/storeProvider'
import CustomLoader from '@/modules/loader'
import { Footer } from '@/shared/footer-section'
import Header from '@/shared/header'
import SmoothScroller from '@/shared/scroll-smoother'
import ScrollProvider from '@/shared/scroll-smoother/scroll-provider'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
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

  const handleCloseScreen = () => {
    localStorage.setItem('zenmonk_visited', 'true')
    setShowFlashScreen(false)
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
        {showFlashScreen ? (
          <FlashScreen closeScreen={handleCloseScreen} />
        ) : (
          <StoreProvider>
            <AppRouterCacheProvider>
              <ScrollProvider>
                <Header />
                <CustomLoader />
                <SmoothScroller>
                  <Suspense fallback={null}>
                    {children}
                  </Suspense>
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
