'use client'

import { useState } from 'react'
import Image from 'next/image'
import Title from '@/shared/title'
import { SectionTitle } from '@/shared/typography'
import first from './assets/1.png'
import second from './assets/2.png'
import third from './assets/3.png'
import fourth from './assets/4.png'
import fivth from './assets/5.png'
import sixth from './assets/6.png'
import seventh from './assets/7.png'
import ArrowLeft from './assets/arrowLeft.svg'
import ArrowRight from './assets/arrowRIght.svg'
import GRADIENTBALL from './assets/gradientBall.png'
import Quote from './assets/quote.svg'
import './style.css'

export default function Testimony() {
  const images = [first, second, third, fourth, fivth, sixth, seventh]

  const review = [
    {
      review:
        'This is a premier mobile app development firm in India, recognized for our skilled team, cutting-edge technology, and customer-focused approach. We execute exceptional projects promptly and provide extensive services from design to support, backed by industry accolades and honors.',
      by: 'Michael Anderson',
      position: 'Chief Technology Officer',
    },
    {
      review:
        'We are a leading mobile app development agency in India, celebrated for our talented team, innovative technological solutions, and client-first philosophy. We deliver outstanding projects on schedule and offer full services from design to upkeep, supported by industry awards and achievements.',
      by: 'Jessica Collins',
      position: 'Project Manager',
    },
    {
      review:
        'This is a top-tier mobile app development studio in India, known for our proficient team, creative use of technology, and client-oriented strategy. We produce high-quality projects on time and provide complete services from design to maintenance, endorsed by industry awards and recognition.',
      by: 'Daniel Brooks',
      position: 'Lead Developer',
    },
    {
      review:
        'We are a prominent mobile app development organization in India, acknowledged for our expert team, advanced technology, and client-focused methodology. We deliver superior projects on time and offer all-inclusive services from design to upkeep, reinforced by industry awards.',
      by: 'Emily Harris',
      position: 'Marketing Director',
    },
    {
      review:
        'This is a distinguished mobile app development company in India. We deliver excellent projects on schedule and offer comprehensive services from design to maintenance, validated by industry awards and recognition.',
      by: 'Nathan Reed',
      position: 'UI/UX Designer',
    },
    {
      review:
        'We are a notable mobile app development enterprise in India, acclaimed for our skilled team, pioneering technology, and client-oriented strategy. We provide high-quality projects on time and offer extensive services from design to support, supported by industry awards and honors.',
      by: 'Olivia Martinez',
      position: 'Business Analyst',
    },
    {
      review:
        'This is a renowned mobile app development business in India, famous for our talented team, creative use of technology, and customer-focused approach. We accomplish high-quality projects promptly and offer comprehensive services from design to maintenance.',
      by: 'Christopher Johnson',
      position: 'Quality Assurance Lead',
    },
  ]

  const [coordinates, setCoordinates] = useState<string[]>([
    '0vw, 0.5208vw', // 0px, 10px
    '-31.25vw, -7.8125vw', // -600px, -150px
    '31.25vw, -7.8125vw', // 600px, -150px
    '-36.4583vw, 5.2083vw', // -700px, 100px
    '36.4583vw, 5.2083vw', // 700px, 100px
    '31.25vw, 18.2291vw', // 600px, 350px
    '-31.25vw, 18.2291vw', // -600px, 350px
  ])

  function getNextIndex(index: number) {
    return (index + 1) % coordinates.length
  }

  function getPrevIndex(index: number) {
    return (coordinates.length + index - 1) % coordinates.length
  }

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  function handleOnPrev() {
    setCoordinates((data: any) => {
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
    setCoordinates((data: any) => {
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
    setCoordinates((prevCoordinates: any) => {
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
              text="We deliver what we promise"
              markText="promise"
              align="center"
              className="title"
            />
            <Quote className="quote quote-up" />
            <Quote className="quote quote-down" />
          </div>
          <div style={{ height: '2.0833vw' }}></div> {/* 40px = 2.0833vw */}
          {/* <p className="sub-heading">Real Results, Real People</p> */}
        </div>

        <div className="testimony-content">
          <div className="review-images">
            {coordinates.map((coordinate: any, index: any) => (
              <Image
                key={index}
                style={{
                  transform: `translate(${coordinate})`,
                  width: '9.375vw',
                  height: 'auto',
                  scale: coordinate == '0vw, 0.5208vw' ? 1.5 : 0.7, // 0px, 10px
                }}
                src={images[index]}
                alt={`image-${index + 1}`}
                onClick={() => handleOnImageClick(coordinate)}
              />
            ))}
          </div>

          <div className="review">{review[currentIndex].review}</div>
          <div
            style={{
              marginTop: '0.5208vw', // 10px = 0.5208vw
              marginBottom: '1.0416vw', //20px = 1.0416vw
            }}
          >
            <div className="title">{review[currentIndex].by}</div>
            <div className="description">{review[currentIndex].position}</div>
          </div>
          <div className="controls">
            <ArrowLeft onClick={handleOnPrev}  />
            <ArrowRight onClick={handleOnNext}  />
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
    </>
  )
}
