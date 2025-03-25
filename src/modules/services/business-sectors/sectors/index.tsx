'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Box, Stack, Typography } from '@mui/material'
import { Sector } from '../business-sectors.types'
import { sectorsList } from './sectors-list'
import './styles.scss'

interface SkillsCardProps {
  title: string
  description: string
}

const Sectors = () => {
  const [selectedSector, setSelectedSector] = useState<Sector>(sectorsList[0])

  const selectPosition = (sector: Sector) => {
    setSelectedSector(sector)
  }

  return (
    <Box className="sectors">
      <Box className="left-section">
        {sectorsList.map((sector, index) => {
          return (
            <Typography
              key={index}
              className={`sector ${selectedSector?.id === sector.id ? 'selected' : ''}`}
              onClick={() => selectPosition(sector)}
              sx={{
                color: 'GrayText',
                '&:hover': {
                  color: 'var(--foreground)',
                },
              }}
            >
              {sector.sector}
            </Typography>
          )
        })}
      </Box>

      <Box className="right-section">
        {selectedSector?.services.map((service, index) => {
          return (
            <Stack key={index} className="services">
              <Image src={service.image} alt="" />
              <Typography className="service-title">{service.title}</Typography>
            </Stack>
          )
        })}
      </Box>
    </Box>
  )
}

export default Sectors
