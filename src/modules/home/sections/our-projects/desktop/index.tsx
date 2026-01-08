'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { projects } from '@/modules/home/sections/our-projects/projects'
import { useScrollSmoother } from '@/shared/scroll-smoother/scroll-context'
import { setHeaderVisibility } from '@/store/features/header/header-slice'
import { useAppDispatch } from '@/store/hooks'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import InfiniteScroll from './infinite-scroll'
import './styles.scss'

/** px → vw helper (1920 base) */
const pxToVw = (px: number) => `${(px / 1920) * 100}vw`

const OurProjectsDesktop = () => {
  const [projectIndex, setProjectIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const smootherRef = useScrollSmoother()
  const current = smootherRef?.current
  const dispatch = useAppDispatch()

  useGSAP(() => {
    if (!sectionRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${projects.length * 100}%`,
      pin: true,
      scrub: 1,
      onEnter: () => dispatch(setHeaderVisibility(true)),
      onLeave: () => dispatch(setHeaderVisibility(false)),
      onEnterBack: () => dispatch(setHeaderVisibility(true)),
      onLeaveBack: () => dispatch(setHeaderVisibility(false)),
      onUpdate: (self) => {
        const index = Math.min(
          Math.floor(self.progress * projects.length),
          projects.length - 1
        )
        setProjectIndex(index)
      },
    })

    return () => {
      trigger.kill()
      dispatch(setHeaderVisibility(false))
    }
  }, { scope: sectionRef })

  const handleSkip = () => {
    if (current && sectionRef.current) {
      const triggers = ScrollTrigger.getAll()
      const myTrigger = triggers.find(t => t.trigger === sectionRef.current)
      if (myTrigger) {
        current.scrollTo(myTrigger.end + 1, true)
      }
    }
  }

  const project = projects[projectIndex] || projects[0]

  return (
    <section
      ref={sectionRef}
      className="our-projects-section-wrapper"
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1100,
      }}
    >
      <div
        className="our-work-container"
        style={{
          background: `url(${project?.imageUrl}) center / cover no-repeat`,
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <div className="shadow" />

        <div className="exit-fullscreen-container">
          <button className="exit-button" onClick={handleSkip}>
            Skip Projects
            <svg
              width={pxToVw(20)}
              height={pxToVw(20)}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={`index-${projectIndex}`}
            initial={{ opacity: 0, y: 2.6 }}  // 50px → vw-relative motion
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="our-work-card-count"
          >
            {String(project?.index).padStart(2, '0')}
          </motion.p>
        </AnimatePresence>

        <div className="project-detail-content">
          <AnimatePresence mode="wait">
            <motion.p
              key={`title-${projectIndex}`}
              initial={{ opacity: 0, x: -1.56 }} // 30px
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 1.56 }}
              transition={{ duration: 0.5 }}
              className="our-work-card-title"
            >
              {project.title}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${projectIndex}`}
              initial={{ opacity: 0, y: 1.04 }} // 20px
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -1.04 }}
              transition={{ duration: 0.5 }}
              className="our-work-card-description"
            >
              {project.description}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="our-work-card-images">
          <InfiniteScroll
            projects={projects}
            projectIndex={projectIndex}
            setProjectIndex={setProjectIndex}
          />
        </div>
      </div>
    </section>
  )
}

export default OurProjectsDesktop
