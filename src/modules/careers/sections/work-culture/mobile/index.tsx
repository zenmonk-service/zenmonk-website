import { motion, PanInfo } from 'motion/react'
import { useEffect, useState, useRef } from 'react'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { workCultures } from '../work-cultures'
import styles from './mobile.module.scss'

export interface CarouselItem {
  title: string
  description: string
  id: number
  icon: React.ReactElement
}

const DRAG_BUFFER = 0
const VELOCITY_THRESHOLD = 500
const GAP = 16
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 }

const WorkCultureMobile = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isResetting, setIsResetting] = useState<boolean>(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const resetRef = useRef<NodeJS.Timeout | null>(null)

  const totalLength = workCultures.length
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(0)

  const playNext = () => {
    return setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev === totalLength - 1) {
          return prev
        }
        return prev + 1
      })
    }, 3000)
  }

  const resetTrack = () => {
    return setTimeout(() => {
      if (currentIndex === totalLength - 1) {
        setIsResetting(true)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setCurrentIndex(0)
        setTimeout(() => setIsResetting(false), 50)
      }
    }, 3000)
  }

  useEffect(() => {
    if (itemRef.current && width !== itemRef.current.clientWidth) {
      setWidth(itemRef.current.clientWidth)
    }

    timeoutRef.current = playNext()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentIndex])

  const effectiveTransition = isResetting ? { duration: 1 } : SPRING_OPTIONS

  const handleAnimationComplete = () => {
    resetRef.current = resetTrack()
  }

  const handleDragEnd = (_, info: PanInfo): void => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (resetRef.current) clearTimeout(resetRef.current)
    const offset = info.offset.x
    const velocity = info.velocity.x
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, totalLength - 1))
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }
  }

  const onTouchStart = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (resetRef.current) clearTimeout(resetRef.current)
  }

  const onTouchEnd = () => {
    if (currentIndex === totalLength - 1) {
      resetRef.current = resetTrack()
    } else {
      timeoutRef.current = playNext()
    }
  }

  const handleSlideChange = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (resetRef.current) clearTimeout(resetRef.current)
    setCurrentIndex(index)
  }

  return (
    <div ref={containerRef} className={styles.container}>
      <SectionTitle
        align="left"
        text="Zen Focused Work Environment"
        className={styles.title}
        markText="Environment"
        markTextProps={{
          rotate: 2,
        }}
      />
      <SectionDescription
        className={styles.description}
        text="At Zenmonk, we cultivate serenity and growth, balancing
          professional success with personal well-being. Blending
          mindfulness with innovation, we nurture a supportive community
          where continuous learning and creative fulfillment prosper."
      />
      <motion.div
        className={styles.track}
        drag="x"
        dragConstraints={{
          left: -(width + 16) * (totalLength - 1),
          right: 0,
        }}
        style={{
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * (width + 16) + width / 2}px 50%`,
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * (width + 16)) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {workCultures.map((item, index) => (
          <motion.div
            key={index}
            ref={index ? undefined : itemRef}
            className={styles.carouselItem}
            transition={effectiveTransition}
            style={{ backgroundImage: `url(${item.image.src})` }}
          >
            <div className={styles.card}>
              <h1 className={styles.cardTitle}>{item.title}</h1>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className={styles.indicatorsContainer}>
        <div className={styles.indicators}>
          {workCultures.map((_, index) => (
            <motion.div
              key={index}
              className={styles.indicator}
              style={{
                ...(currentIndex % totalLength === index
                  ? {
                      borderRadius: '10px',
                      width: '12px',
                      background:
                        'linear-gradient(97deg, #eb7c0d 175.24%, #ffa750 270.03%)',
                    }
                  : {
                      borderRadius: '50%',
                      background: '#e2e2e2',
                    }),
              }}
              animate={{
                scale: currentIndex % totalLength === index ? 1.2 : 1,
              }}
              onClick={() => handleSlideChange(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkCultureMobile
