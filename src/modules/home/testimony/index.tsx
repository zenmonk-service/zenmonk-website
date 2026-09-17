'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SectionTitle } from '@/shared/typography'
import ALL from './assets/ALL.svg'
import ALR from './assets/ALR.svg'
import ArrowLeft from './assets/arrowLeft.svg'
import ArrowRight from './assets/arrowRIght.svg'
import GRADIENTBALL from './assets/gradientBall.png'
import Quote from './assets/quote.svg'
import { ClientReviews } from './client-reviews'
import './style.css'

const POSITIONS = [
  '0vw, 0.5208vw', // Slot 0: Center
  '-31.25vw, -7.8125vw', // Slot 1: Top-Left (Position 1)
  '31.25vw, -7.8125vw', // Slot 2: Top-Right (Position 2)
  '-36.4583vw, 5.2083vw', // Slot 3: Mid-Left (Position 3)
  '36.4583vw, 5.2083vw', // Slot 4: Mid-Right (Position 4)
  '-31.25vw, 18.2291vw', // Slot 5: Bottom-Left (Position 5)
  '31.25vw, 18.2291vw', // Slot 6: Bottom-Right (Position 6)
]

export default function Testimony() {
  // slotToReview[slotIndex] = reviewIndex
  const [slotToReview, setSlotToReview] = useState<number[]>([0, 1, 2, 3, 4, 5, 6])
  const [currentSlot, setCurrentSlot] = useState<number>(0)

  const swapToSlot = (targetSlot: number) => {
    if (targetSlot === 0) return

    setSlotToReview((prev) => {
      const next = [...prev]
      const currentCenterReview = next[0]
      const targetReview = next[targetSlot]

      next[0] = targetReview
      next[targetSlot] = currentCenterReview

      return next
    })

    setCurrentSlot(targetSlot)
  }

  const handleOnNext = () => {
    // Sequence through physical location slots: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 1
    const nextSlot = currentSlot === 0 ? 1 : currentSlot === 6 ? 1 : currentSlot + 1
    swapToSlot(nextSlot)
  }

  const handleOnPrev = () => {
    // Sequence through physical location slots: 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 6
    const prevSlot = currentSlot === 0 ? 6 : currentSlot === 1 ? 6 : currentSlot - 1
    swapToSlot(prevSlot)
  }

  const activeReviewIndex = slotToReview[0]
  const currentReview = ClientReviews[activeReviewIndex]

  return (
    <>
      <div className="testimony desktop">
        <div
          style={{
            paddingTop: '0px',
          }}
          className="section-header-wrapper"
        >
          <div className="section-header-container">
            <SectionTitle
              text="Real Results, Real People"
              markText="People"
              align="center"
              className="title"
            />
            <Quote className="quote quote-up" />
            <Quote className="quote quote-down" />
          </div>
          <div style={{ height: '2.0833vw' }} />
        </div>

        <div className="testimony-content">
          <div className="review-images">
            {ClientReviews.map((review, reviewIndex) => {
              const slot = slotToReview.indexOf(reviewIndex)
              const coordinate = POSITIONS[slot]
              const isCenter = slot === 0

              return (
                <Image
                  key={review.imageUrl}
                  style={{
                    transform: `translate(${coordinate})`,
                    scale: isCenter ? 1.5 : 0.7,
                    zIndex: isCenter ? 10 : 1,
                  }}
                  src={review.imageUrl}
                  fill
                  alt={review.by}
                  onClick={() => swapToSlot(slot)}
                />
              )
            })}
          </div>

          <div className="review">&ldquo;{currentReview.review}&rdquo;</div>
          <div
            style={{
              marginTop: '0.5208vw', // 10px = 0.5208vw
              marginBottom: '1.0416vw', //20px = 1.0416vw
            }}
          >
            <div className="title">{currentReview.by}</div>
            <div className="description">{currentReview.position}</div>
          </div>
          <div className="controls">
            <ArrowLeft
              onClick={handleOnPrev}
              onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
            />
            <ArrowRight
              onClick={handleOnNext}
              onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
            />
          </div>
        </div>
        <Image
          className="gradient-ball gradient-ball-first"
          src={GRADIENTBALL}
          width={25}
          alt="gradient_ball"
        />
        <Image
          width={20}
          className="gradient-ball gradient-ball-second"
          src={GRADIENTBALL}
          alt="gradient_ball"
        />
        <Image
          width={20}
          className="gradient-ball gradient-ball-third"
          src={GRADIENTBALL}
          alt="gradient_ball"
        />
        <Image
          width={40}
          className="gradient-ball gradient-ball-fourth"
          src={GRADIENTBALL}
          alt="gradient_ball"
        />
      </div>

      <div className="testimony-mb mobile">
        <SectionTitle
          text="We deliver what we promise"
          markText="promise"
          align="center"
          className="title"
        />

        <div className="testimony-container">
          <div className="testimony-content">
            <div className="reviwer-image">
              <Image src={currentReview.imageUrl} fill alt="" />
            </div>

            <div className="review">&ldquo;{currentReview.review}&rdquo;</div>

            <div>
              <div className="title">{currentReview.by}</div>
              <div className="description">{currentReview.position}</div>
            </div>
            <div className="controls">
              <ALL
                onClick={handleOnPrev}
                onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
              />
              <ALR
                onClick={handleOnNext}
                onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
