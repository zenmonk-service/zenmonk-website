'use client'

import { Poppins, Montserrat, Inter, Satisfy, Potta_One } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { useEffect, useState, Suspense, useRef } from 'react'
import { usePathname } from 'next/navigation'
import FlashScreen from '@/modules/home/flash-screen'
import StoreProvider from '@/store/store-provider'
import CustomLoader from '@/modules/loader'
import Header from '@/shared/header'
import { Footer } from '@/shared/footer-section'
import { ContactModal } from '@/shared/components/contact-modal'
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

  const isPopStateRef = useRef(false)

  useEffect(() => {
    const handlePopState = () => {
      isPopStateRef.current = true
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Immediately reset scroll when an internal navigation link is clicked.
  // This ensures the document scroll position is 0 before the page DOM shrinks,
  // preventing Firefox's layout engine from clamping the old scroll offset to the new page.
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      if (
        anchor.target === '_blank' ||
        anchor.hasAttribute('download') ||
        e.ctrlKey || e.metaKey || e.shiftKey || e.altKey
      ) return

      try {
        const url = new URL(anchor.href, window.location.href)
        if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
          window.scrollTo(0, 0)
          if (document.documentElement) document.documentElement.scrollTop = 0
          if (document.body) document.body.scrollTop = 0
        }
      } catch {
        // ignore invalid urls
      }
    }

    document.addEventListener('click', handleLinkClick, { capture: true })
    return () => document.removeEventListener('click', handleLinkClick, { capture: true })
  }, [])

  // On client route changes (not back/forward), ensure page starts at the top
  useEffect(() => {
    if (isPopStateRef.current) {
      isPopStateRef.current = false
      return
    }

    const resetScroll = () => {
      if (typeof window === 'undefined') return
      window.scrollTo(0, 0)
      if (document.documentElement) document.documentElement.scrollTop = 0
      if (document.body) document.body.scrollTop = 0
    }

    resetScroll()
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
                <GlobalContactToast />
                <Suspense fallback={null}>
                  <main className={pathname?.startsWith('/services') ? 'services-page-wrapper' : undefined}>
                    {children}
                  </main>
                  <Footer />
                </Suspense>
              </>
            </AppRouterCacheProvider>
          </StoreProvider>
        )}
      </body>
    </html>
  )
}
