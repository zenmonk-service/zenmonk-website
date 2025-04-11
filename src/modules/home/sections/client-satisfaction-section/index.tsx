'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import Satisfication from '@/modules/home/satisfication'
import Title from '@/shared/title'
import LOGO from './assets/logo-benzene.png'
import './styles.scss'
import { SectionDescription, SectionTitle } from '@/shared/typography'

const ClientSatisfaction = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <Box className={`client-satisfaction-section ${inView ? 'in-view' : ''}`}>
      <SectionTitle
        text="The Evolution of Client Satisfaction"
        markText='Satisfaction'
        align="center"
        className="title"
      />
      <Box>
        <SectionDescription className="description" text=' We transform client dissatisfaction into strategic success through
          innovation. We turn challenges into growth by aligning with your
          business vision. We drive measurable outcomes through tailored
          engagement and expert planning.' />
      </Box>
      <Box ref={ref} className="svg-container">
        <Satisfication />
      </Box>
      <Image className="logo-left" src={LOGO} alt="" />
      <Image className="logo-right" src={LOGO} alt="" />
    </Box>
  )
}

export { ClientSatisfaction }
