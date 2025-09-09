'use client'

import { useMediaQuery } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import PositionsDesktop from './positions/desktop'
import PositionsMobile from './positions/mobile'
import './styles.scss'

const OpenPosition = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  return (
    <div className="open-position-container">
      <div className="open-position-title-wrapper">
        <SectionTitle
          className="open-position-title"
          text="Explore Open Positions and Join Our Team"
          markText="Our Team"
          markTextProps={{ rotate: 2 }}
        />
      </div>
      <SectionDescription
        className="description"
        text=" Discover a wide range of exciting career opportunities and take the next
        step in your professional journey by
        joining our dynamic and innovative team, where your skills and passion
        can thrive."
      />
      <div className="position-container">
        {isMobile ? <PositionsMobile /> : <PositionsDesktop />}
      </div>
    </div>
  )
}

export default OpenPosition
