'use client'
 
import { useRef, useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import IconButton from '@mui/material/IconButton'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import CultureCard from '../card/culture-card'
import './styles.scss'
import { workCultures } from '../work-cultures'
 
const GAP_VW = 1.5
 
const WorkCultureDesktop = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [xOffset, setXOffset] = useState(0)
  const [constraints, setConstraints] = useState({ left: 0, right: 0 })
 
  const updateConstraints = () => {
    if (containerRef.current && trackRef.current) {
      const containerWidth = containerRef.current.clientWidth
      const trackWidth = trackRef.current.scrollWidth
      setConstraints({
        left: -Math.max(0, trackWidth - containerWidth),
        right: 0,
      })
    }
  }
 
  useEffect(() => {
    const timer = setTimeout(updateConstraints, 100)
    window.addEventListener('resize', updateConstraints)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateConstraints)
    }
  }, [])
 
  const handleNext = () => {
    if (trackRef.current) {
      const card = trackRef.current.firstElementChild as HTMLElement
      const gap = window.innerWidth * (GAP_VW / 100)
      const cardWidth = card ? card.offsetWidth + gap : 300
 
      const targetX = Math.max(constraints.left, xOffset - cardWidth)
      controls.start({ x: targetX, transition: { type: 'spring', stiffness: 120, damping: 20 } })
      setXOffset(targetX)
    }
  }
 
  const handlePrev = () => {
    if (trackRef.current) {
      const card = trackRef.current.firstElementChild as HTMLElement
      const gap = window.innerWidth * (GAP_VW / 100)
      const cardWidth = card ? card.offsetWidth + gap : 300
 
      const targetX = Math.min(constraints.right, xOffset + cardWidth)
      controls.start({ x: targetX, transition: { type: 'spring', stiffness: 120, damping: 20 } })
      setXOffset(targetX)
    }
  }
 
  const handleDragEnd = () => {
    if (trackRef.current) {
      const transform = window.getComputedStyle(trackRef.current).transform
      const matrix = new DOMMatrixReadOnly(transform)
      setXOffset(matrix.m41)
    }
  }
 
  return (
    <div className="work-culture-wrapper">
      <div className="work-culture-section">
        <div className="title-description-action-wrapper">
          <div className="title-description-wrapper">
            <SectionTitle
              align="left"
              text="Healthy Work Culture"
              className="work-culture-title"
              markText="Culture"
            />
            <SectionDescription
              className="work-culture-description"
              text="State burst think end are its. Arrived off she elderly beloved him affix ed noisier yet. Course regard to up he hardly elder noisier. state burst think end are its."
            />
          </div>
          <div className="action-button-wrapper">
            <IconButton
              className="action-button"
              onClick={handlePrev}
              centerRipple
            >
              <NavigateBeforeIcon fontSize="inherit" />
            </IconButton>
            <IconButton className="action-button" onClick={handleNext}>
              <NavigateNextIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>
 
        <div ref={containerRef} className="work-cultures-mask">
          <motion.div
            ref={trackRef}
            className="work-cultures-track"
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.15}
            animate={controls}
            onDragEnd={handleDragEnd}
            style={{ x: xOffset }}
          >
            {[...workCultures, ...workCultures].map((culture, i) => (
              <CultureCard key={`${culture.title}-${i}`} details={culture} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
 
export default WorkCultureDesktop
