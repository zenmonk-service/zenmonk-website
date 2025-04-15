'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Satisfaction from './assets/satisfaction.svg'
import OldLogoDecorator from './assets/old-logo.png'
import './styles.scss'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { ClientSatisfactionMobile } from './mobile'

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
        markText='Satisfaction'
        align="center"
        markTextProps={{
          rotate: 2
        }}
        className="title"
      />
      <Box>
        <SectionDescription className='description' text=' We transform client dissatisfaction into strategic success through
          innovation. We turn challenges into growth by aligning with your
          business vision. We drive measurable outcomes through tailored
          engagement and expert planning.' />
      </Box>
      <Box ref={ref} className="svg-container">
        <Satisfaction />
      </Box>
      <Image className="logo-left" src={OldLogoDecorator} alt="" />
      <Image className="logo-right" src={OldLogoDecorator} alt="" />
    </Box>
    <ClientSatisfactionMobile/>
    </>
  )
}

export { ClientSatisfaction }
