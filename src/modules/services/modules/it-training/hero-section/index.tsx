import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import AnimatedDiv from '@/shared/animated-div'
import {
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
  return (
    <Box className="it-training-hero-section">
      <Roll className="roll-1" />
      <Roll className="roll-2" />
      <Roll className="roll-3" />

      <Box className="top-section">
        <Typography className="top-section-text" component="h2">
          Empower Your Future with
          <Quote2 alt="quote-1" className="quote-1" />
        </Typography>
        <Typography className="top-section-sub-text" component="h1">
          Expert <span>IT Training</span>
        </Typography>
        <Quote1 alt="quote-2" className="quote-2" />
      </Box>
      <Box className="bottom-section">
        <Box className="left-section">
          <AnimatedDiv>
            <QuoteText text="Unlock in-demand tech skills and industry insights with our expert-led training programs." />
          </AnimatedDiv>
        </Box>
        <Box className="center-section">
          <AnimatedDiv>
            <Saturn className="saturn-2" />
            <Ellipse alt="ellipse" className="ellipse" />
            <Image src={Teacher} alt="teacher" className="teacher-image" />
            <SmallSaturn alt="saturn" className="saturn-1" />
            <Star alt="star" className="star" />
          </AnimatedDiv>
        </Box>
        <Box className="right-section">
          <AnimatedDiv>
            <Image src={Year15} alt="year-15" className="year-15" />
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
export { ItTrainingHeroSection }
