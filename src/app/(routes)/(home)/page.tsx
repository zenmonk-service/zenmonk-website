'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import Statistics from '@/modules/home/sections/statistics'
import {
  ServiceSection,
  HeroSection,
  TechSolutionSection,
  WhyChooseUsSection,
  ClientSatisfaction,
} from '@/modules/home/sections'
import Testimony from '@/modules/home/testimony'
import FAQ from '@/shared/faq'
import SectionWrapper from '@/shared/wrapper'
import { toggleHeader } from '@/store/features/header/header-slice'
import { useAppDispatch } from '@/store/hooks'
import OurProjects from '@/modules/home/sections/our-projects'
import Globe from '@/animations/globe-animation'

const HomePage = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.create({
        trigger: '.services-right-container',
        pin: true,
        endTrigger: '.services-left-container',
        start: '+=0',
        end: `bottom+=${window.innerWidth * 0.119} bottom`,
      })
    },
    {
      scope: container,
    }
  )
  const dispatch = useAppDispatch()
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    let allowScroll = true
    const scrollTimeout = gsap
      .delayedCall(1, () => (allowScroll = true))
      .pause()
    let currentIndex = 0
    const swipePanels = gsap.utils.toArray('.swipe-section .panel')

    gsap.set(swipePanels, { zIndex: (i) => swipePanels.length - i })

    // create an observer and disable it to start
    const intentObserver = ScrollTrigger.observe({
      type: 'wheel,touch',
      onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
      onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
      tolerance: 1,
      preventDefault: true,
      lockAxis: true,
      onEnable(self) {
        allowScroll = false
        scrollTimeout.restart(true)
        // when enabling, we should save the scroll position and freeze it. This fixes momentum-scroll on Macs, for example.
        const savedScroll = self.scrollY()
        self._restoreScroll = () => self.scrollY(savedScroll) // if the native scroll repositions, force it back to where it should be
        document.addEventListener('scroll', self._restoreScroll, {
          passive: false,
        })
      },
      onDisable: (self) =>
        document.removeEventListener('scroll', self._restoreScroll),
    })
    intentObserver.disable()

    ScrollTrigger.normalizeScroll(true)

    // handle the panel swipe animations
    function gotoPanel(index: number, isScrollingDown: boolean) {
      dispatch(toggleHeader())
      // return to normal scroll if we're at the end or back up to the start
      if (
        (index === swipePanels.length && isScrollingDown) ||
        (index === -1 && !isScrollingDown)
      ) {
        intentObserver.disable() // resume native scroll
        return
      }
      allowScroll = false
      scrollTimeout.restart(true)

      const target: any = isScrollingDown
        ? swipePanels[currentIndex]
        : swipePanels[index]
      gsap.to(target, {
        yPercent: isScrollingDown ? -100 : 0,
        duration: 0.75,
      })

      currentIndex = index
    }

    // pin swipe section and initiate observer
    ScrollTrigger.create({
      trigger: '.swipe-section',
      pin: true,
      start: 'top top',
      end: `+=${window.innerWidth * 0.1041}`, // just needs to be enough to not risk vibration where a user's fast-scroll shoots way past the end
      onEnter: (self) => {
        if (intentObserver.isEnabled) {
          return
        } // in case the native scroll jumped past the end and then we force it back to where it should be.
        self.scroll(self.start + 1) // jump to just one pixel past the start of this section so we can hold there.
        intentObserver.enable() // STOP native scrolling
      },
      onEnterBack: (self) => {
        if (intentObserver.isEnabled) return
        self.scroll(self.end - 1) // jump to one pixel before the end of this section so we can hold there.
        intentObserver.enable() // STOP native scrolling
      },
    })
  })
  return (
    <div ref={container}>
      <HeroSection />
      <ServiceSection />
      <div className="swipe-section">
          <TechSolutionSection />
        <OurProjects />
      </div>
      <div style={{ overflow: 'hidden' }}>
        <SectionWrapper>
          <WhyChooseUsSection />
        </SectionWrapper>
        <Statistics />
      </div>
      <ClientSatisfaction />
      <Testimony />
      <Globe />
      <FAQ />
    </div>
  )
}

export default HomePage
