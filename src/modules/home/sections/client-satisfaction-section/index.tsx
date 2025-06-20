'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Box from '@mui/material/Box'
import RoadmapAnimation from '@/animations/roadmap'
import { SectionTitle } from '@/shared/typography'
import OldLogoDecorator from './assets/old-logo.png'
import { ClientSatisfactionMobile } from './mobile'
import './styles.scss'

const ClientSatisfaction = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <>
      <Box className={`client-satisfaction-section ${inView ? 'in-view' : ''}`}>
        <SectionTitle
          text="The Evolution of Client Satisfaction"
          markText="client Satisfaction"
          align="center"
          markTextProps={{ rotate: 1.8 }}
          className="title"
        />
        <Box></Box>
        <Box sx={{ position: 'relative' }} ref={ref} className="svg-container">
          <RoadmapAnimation />
        </Box>
        <Image className="logo-left" src={OldLogoDecorator} alt="" />
        <Image className="logo-right" src={OldLogoDecorator} alt="" />
      </Box>
      <ClientSatisfactionMobile />
    </>
  )
}

export { ClientSatisfaction }
