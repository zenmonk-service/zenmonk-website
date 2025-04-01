import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import AnimatedDiv from '@/shared/animated-div'
import SectionWrapper from '@/shared/wrapper'
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
      <Image src={Roll} alt="roll" className="roll-1" />
      <Image src={Roll} alt="roll" className="roll-2" />
      <Image src={Roll} alt="roll" className="roll-3" />

      <Box className="top-section">
        <Typography className="top-section-text" component="h2">
          Empower Your Future with
          <Image src={Quote2} alt="quote-1" className="quote-1" />
        </Typography>
        <Typography className="top-section-sub-text" component="h1">
          Expert <span>IT Training</span>
        </Typography>
        <Image src={Quote1} alt="quote-2" className="quote-2" />

      </Box>
      <Box className="bottom-section">
        <Box className="left-section">
          <AnimatedDiv>
            <QuoteText text="Lorem Ipsum has been the indu stry's standard dummy text eversince the 1500s" />
          </AnimatedDiv>
        </Box>
        <Box className="center-section">
          <AnimatedDiv>
            <Image src={Saturn} alt="saturn" className="saturn-2" />
            <Image src={Ellipse} alt="ellipse" className="ellipse" />
            <Image src={Teacher} alt="teacher" className="teacher-image" />
            <Image src={SmallSaturn} alt="saturn" className="saturn-1" />
            <Image src={Star} alt="star" className="star" />
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
    <SectionWrapper>
      <Box className="quote-text">
        <Image src={Quote} alt="quote" />
        <Typography className="quote" component="p">
          {text}
        </Typography>
      </Box>
    </SectionWrapper>
  )
}
export { ItTrainingHeroSection }
