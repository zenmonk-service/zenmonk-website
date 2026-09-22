'use client'

import { Poppins, Montserrat, Inter, Satisfy, Potta_One } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { useEffect, useState, Suspense } from 'react'
import { usePathname } from 'next/navigation'
import FlashScreen from '@/modules/home/flash-screen'
import StoreProvider from '@/store/store-provider'
import CustomLoader from '@/modules/loader'
import Header from '@/shared/header'
import { Footer } from '@/shared/footer-section'
import { ContactModal } from '@/shared/components/contact-modal'
import { GlobalApplicationToast } from '@/shared/components/global-application-toast'
import { GlobalContactToast } from '@/shared/components/global-contact-toast'
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
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
      if (document.documentElement) document.documentElement.scrollTop = 0
      if (document.body) document.body.scrollTop = 0
    }

    resetScroll()
    const frameId = requestAnimationFrame(resetScroll)
    const t1 = setTimeout(resetScroll, 50)
    const t2 = setTimeout(resetScroll, 150)
    const t3 = setTimeout(resetScroll, 350)
    const t4 = setTimeout(resetScroll, 600)

    return () => {
      cancelAnimationFrame(frameId)
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [pathname, showFlashScreen])

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
                <ContactModal />
                <GlobalApplicationToast />
                <GlobalContactToast />
                <Suspense fallback={null}>
                  <main className={pathname?.startsWith('/services') ? 'services-page-wrapper' : undefined}>
                    {children}
                  </main>
                  {showFooter && <Footer />}
                </Suspense>
              </>
            </AppRouterCacheProvider>
          </StoreProvider>
        )}
      </body>
    </html>
  )
}
