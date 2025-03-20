'use client'

import { useState } from 'react'
import Image from 'next/image'
import Title from '@/shared/title'
import first from './assets/1.png'
import second from './assets/2.png'
import third from './assets/3.png'
import fourth from './assets/4.png'
import fivth from './assets/5.png'
import sixth from './assets/6.png'
import seventh from './assets/7.png'
import arrowLeft from './assets/arrowLeft.svg'
import arrowRight from './assets/arrowRIght.svg'
import quote from './assets/quote.svg'
import './style.css'

export default function Testimony() {
  const images = [first, second, third, fourth, fivth, sixth, seventh]

  const review = [
    {
      review:
        'This is a premier mobile app development firm in India, recognized for our skilled team, cutting-edge technology, and customer-focused approach. We execute exceptional projects promptly and provide extensive services from design to support, backed by industry accolades and honors.',
      by: 'Rajesh Kumar',
      position: 'Chief Technology Officer',
    },
    {
      review:
        'We are a leading mobile app development agency in India, celebrated for our talented team, innovative technological solutions, and client-first philosophy. We deliver outstanding projects on schedule and offer full services from design to upkeep, supported by industry awards and achievements.',
      by: 'Anita Sharma',
      position: 'Project Manager',
    },
    {
      review:
        'This is a top-tier mobile app development studio in India, known for our proficient team, creative use of technology, and client-oriented strategy. We produce high-quality projects on time and provide complete services from design to maintenance, endorsed by industry awards and recognition.',
      by: 'Vikram Singh',
      position: 'Lead Developer',
    },
    {
      review:
        'We are a prominent mobile app development organization in India, acknowledged for our expert team, advanced technology, and client-focused methodology. We deliver superior projects on time and offer all-inclusive services from design to upkeep, reinforced by industry awards and accolades.',
      by: 'Sonia Mehta',
      position: 'Marketing Director',
    },
    {
      review:
        'This is a distinguished mobile app development company in India, noted for our experienced team, innovative tech solutions, and customer-centered approach. We deliver excellent projects on schedule and offer comprehensive services from design to maintenance, validated by industry awards and recognition.',
      by: 'Karan Patel',
      position: 'UI/UX Designer',
    },
    {
      review:
        'We are a notable mobile app development enterprise in India, acclaimed for our skilled team, pioneering technology, and client-oriented strategy. We provide high-quality projects on time and offer extensive services from design to support, supported by industry awards and honors.',
      by: 'Neha Gupta',
      position: 'Business Analyst',
    },
    {
      review:
        'This is a renowned mobile app development business in India, famous for our talented team, creative use of technology, and customer-focused approach. We accomplish high-quality projects promptly and offer comprehensive services from design to maintenance.',
      by: 'Rohit Verma',
      position: 'Quality Assurance Lead',
    },
  ]

  const [coordinates, setCoordinates] = useState<any>([
    '0px, 10px',
    '-700px , -250px',
    '700px , -250px',
    '-800px , 0px',
    '800px , 0px',
    '700px , 250px',
    '-700px , 250px',
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
      coordinates[prevIndex] = '0px, 10px'

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
      coordinates[nextIndex] = '0px, 10px'

      return coordinates
    })

    setCurrentIndex(getNextIndex(currentIndex))
  }

  function handleOnImageClick(coordinate: string) {
    setCoordinates((prevCoordinates: any) => {
      const newCoordinates = [...prevCoordinates]

      const hoveredIndex = newCoordinates.indexOf(coordinate)
      const targetIndex = newCoordinates.indexOf('0px, 10px')

      newCoordinates[hoveredIndex] = '0px, 10px'
      newCoordinates[targetIndex] = coordinate
      setCurrentIndex(newCoordinates.indexOf('0px, 10px'))

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
            <Title
              text="We deliver what we promise"
              align="center"
              className="title"
            />

            <Image className="quote quote-up" src={quote} alt="quote" />
            <Image className="quote quote-down" src={quote} alt="quote" />
          </div>

          <div style={{ height: '40px' }}></div>
          {/* <p className="sub-heading">Real Results, Real People</p> */}
        </div>

        <div className="testimony-content">
          <div className="review-images">
            {coordinates.map((coordinate: any, index: any) => (
              <Image
                key={index}
                style={{
                  transform: `translate(${coordinate})`,

                  scale: coordinate == '0px, 10px' ? 1.5 : 0.7,
                }}
                width={180}
                src={images[index]}
                alt={`image-${index + 1}`}
                onClick={() => handleOnImageClick(coordinate)}
              />
            ))}
          </div>

          <div className="review">{review[currentIndex].review}</div>
          <div
            style={{
              marginTop: '10px',
              marginBottom: '20px',
            }}
          >
            <div className="title">{review[currentIndex].by}</div>
            <div className="description">{review[currentIndex].position}</div>
          </div>
          <div className="controls">
            <Image onClick={handleOnPrev} src={arrowLeft} alt=""></Image>
            <Image onClick={handleOnNext} src={arrowRight} alt=""></Image>
          </div>
        </div>
      </div>
    </>
  )
}
