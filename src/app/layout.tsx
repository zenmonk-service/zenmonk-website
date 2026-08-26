'use client'

import { Poppins, Montserrat, Inter, Satisfy, Potta_One } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { useEffect, useState, Suspense } from 'react'
import { usePathname } from 'next/navigation'
import FlashScreen from '@/modules/home/flash-screen'
import StoreProvider from '@/store/store-provider'
import CustomLoader from '@/modules/loader'
import { Footer } from '@/shared/footer-section'
import Header from '@/shared/header'
import './globals.css'


const satisfy = Satisfy({
  variable: '--font-satisfy',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const pottaOne = Potta_One({
  variable: '--font-potta-one',
  subsets: ['latin'],
  weight: ['400'],
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
  const pathname = usePathname()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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

  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    setShowFooter(false)
    const timer = setTimeout(() => {
      setShowFooter(true)
    }, 150)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable} ${satisfy.variable} ${pottaOne.variable}`}>
        {showFlashScreen ? (
          <FlashScreen closeScreen={handleCloseScreen} />
        ) : (
          <StoreProvider>
            <AppRouterCacheProvider>
              <>
                <Header />
                <CustomLoader />
                <Suspense fallback={null}>
                  {children}
                  {showFooter && <Footer />}
                </Suspense>
                {pathname === '/how-we-work' && (
                  <div className="how-we-work-scroll-spacer" />
                )}
              </>
            </AppRouterCacheProvider>
          </StoreProvider>
        )}
      </body>
    </html>
  )
}
