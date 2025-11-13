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

export default function Testimony() {
  const [coordinates, setCoordinates] = useState<string[]>([
    '0vw, 0.5208vw', // 0px, 10px
    '-31.25vw, -7.8125vw', // -600px, -150px
    '31.25vw, -7.8125vw', // 600px, -150px
    '-36.4583vw, 5.2083vw', // -700px, 100px
    '36.4583vw, 5.2083vw', // 700px, 100px
    '31.25vw, 18.2291vw', // 600px, 350px
    '-31.25vw, 18.2291vw', // -600px, 350px
  ])

  const getNextIndex = (index: number) => (index + 1) % coordinates.length

  const getPrevIndex = (index: number) =>
    (coordinates.length + index - 1) % coordinates.length

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  function handleOnPrev() {
    setCoordinates((data) => {
      const coordinates = [...data]

      const prevIndex = getPrevIndex(currentIndex)

      const value = coordinates[prevIndex]

      coordinates[currentIndex] = value
      coordinates[prevIndex] = '0vw, 0.5208vw' // 0px, 10px

      return coordinates
    })

    setCurrentIndex(getPrevIndex(currentIndex))
  }

  function handleOnNext() {
    setCoordinates((data) => {
      const coordinates = [...data]

      const nextIndex = getNextIndex(currentIndex)

      const value = coordinates[nextIndex]

      coordinates[currentIndex] = value
      coordinates[nextIndex] = '0vw, 0.5208vw' // 0px, 10px

      return coordinates
    })

    setCurrentIndex(getNextIndex(currentIndex))
  }

  function handleOnImageClick(coordinate: string) {
    setCoordinates((prevCoordinates) => {
      const newCoordinates = [...prevCoordinates]

      const hoveredIndex = newCoordinates.indexOf(coordinate)
      const targetIndex = newCoordinates.indexOf('0vw, 0.5208vw') // 0px, 10px

      newCoordinates[hoveredIndex] = '0vw, 0.5208vw' // 0px, 10px
      newCoordinates[targetIndex] = coordinate
      setCurrentIndex(newCoordinates.indexOf('0vw, 0.5208vw')) // 0px, 10px

      return newCoordinates
    })
  }

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
            {coordinates.map((coordinate, index) => (
              <Image
                key={index}
                style={{
                  transform: `translate(${coordinate})`,
                  scale: coordinate == '0vw, 0.5208vw' ? 1.5 : 0.7, // 0px, 10px
                }}
                src={ClientReviews[index].imageUrl}
                fill
                alt={`image-${index + 1}`}
                onClick={() => handleOnImageClick(coordinate)}
              />
            ))}
          </div>

          <div className="review">{ClientReviews[currentIndex].review}</div>
          <div
            style={{
              marginTop: '0.5208vw', // 10px = 0.5208vw
              marginBottom: '1.0416vw', //20px = 1.0416vw
            }}
          >
            <div className="title">{ClientReviews[currentIndex].by}</div>
            <div className="description">
              {ClientReviews[currentIndex].position}
            </div>
          </div>
          <div className="controls">
            <ArrowLeft onClick={handleOnPrev} />
            <ArrowRight onClick={handleOnNext} />
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
              <Image src={ClientReviews[currentIndex].imageUrl} fill alt="" />
            </div>

            <div className="review">{ClientReviews[currentIndex].review}</div>

            <div
              style={{
                marginBottom: '200px',
              }}
            >
              <div className="title">{ClientReviews[currentIndex].by}</div>
              <div className="description">
                {ClientReviews[currentIndex].position}
              </div>
            </div>
            <div className="controls">
              <ALL onClick={handleOnPrev} />
              <ALR onClick={handleOnNext} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
