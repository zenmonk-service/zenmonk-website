'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import AnimatedDiv from '@/shared/animated-div'
import {
  Doodle,
  Ellipse,
  Quote,
  Quote1,
  Quote2,
  Roll,
  Saturn,
  SmallSaturn,
  Star,
  Teacher,
  Year15,
} from '../assets'
import './styles.scss'

const ItTrainingHeroSection = () => {
  const [randomRolls, setRandomRolls] = useState<any[]>([])

  useEffect(() => {
    const areas = [
      { top: '12%', left: '4vw' },           // Left Top
      { top: '82%', left: '6vw' },           // Left Bottom
      { top: '8%', left: 'calc(100% - 13vw)' }, // Right Top
      { top: '78%', left: 'calc(100% - 11vw)' }, // Right Bottom
      { top: '48%', left: '2vw' },           // Left Mid
      { top: '42%', left: 'calc(100% - 9vw)' },  // Right Mid
    ]

    const rolls = areas.map((area) => ({
      top: area.top,
      left: area.left,
      rotate: `${Math.random() * 40 - 40}deg`,
      scale: 0.65 + Math.random() * 0.2,
      opacity: 0.8,
    }))
    setRandomRolls(rolls)
  }, [])

  return (
    <Box className="it-training-hero-section">
      {randomRolls.map((style, idx) => (
        <Box
          key={idx}
          className="random-roll"
          style={{
            position: 'absolute',
            top: style.top,
            left: style.left,
            transform: `rotate(${style.rotate}) scale(${style.scale})`,
            opacity: style.opacity,
            width: '100px',
            height: 'auto',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <Roll style={{ width: '100%', height: 'auto', display: 'block' }} />
        </Box>
      ))}

      <Box className="top-section">
        <Typography className="top-section-text" component="h2">
          Empower Your Future with
          <Quote2 alt="quote-1" className="quote-1" />
        </Typography>
        <Typography className="top-section-sub-text" component="h1">
          <Quote1 alt="quote-1" className="quote-1" />
          Expert <span>IT Training</span>
        </Typography>
        <Roll className="roll-heading" />
      </Box>

      <Box className="bottom-section">
        <Box className="left-section">
          <AnimatedDiv>
            <QuoteText text="Unlock in-demand tech skills and industry insights with our expert-led training programs." />
          </AnimatedDiv>
        </Box>

        <Box className="center-section">
          <AnimatedDiv className="teacher-container">
            <Ellipse alt="ellipse" className="ellipse" />
            <Image src={Teacher} alt="teacher" className="teacher-image" priority />

            {/* Floating Assets - Centralized for mobile control */}
            <Saturn className="saturn-1" />
            <SmallSaturn alt="saturn" className="saturn-2" />
            <Star alt="star" className="star-doodle" />
            <Roll className="roll-center" />
            <Roll className="roll-center-1" />
            <Doodle className="doodle-center" />
          </AnimatedDiv>
        </Box>

        <Box className="right-section">
          <AnimatedDiv className="badge-container">
            <Image src={Year15} alt="15+ Years Experience" className="year-15" />
          </AnimatedDiv>
        </Box>
      </Box>
    </Box>
  )
}

interface QuoteTextProps {
  text: string
}

const QuoteText = ({ text }: QuoteTextProps) => {
  return (
    <Box className="quote-text">
      <Quote alt="quote" className="quote-img" />
      <Typography className="quote" component="p">
        {text}
      </Typography>
    </Box>
  )
}
export default ItTrainingHeroSection
