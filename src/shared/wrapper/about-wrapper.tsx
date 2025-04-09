'use client'

import { Box } from '@mui/material'
import './styles.scss'

const AboutSectionWrapper = ({ children }: ChildrenProps) => {
  return <Box className="about-section-wrapper">{children}</Box>
}

export default AboutSectionWrapper
