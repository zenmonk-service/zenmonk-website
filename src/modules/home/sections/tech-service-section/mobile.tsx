'use client'

import { useState } from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Box, Typography } from '@mui/material'
import { techLogos } from '@/assets/icons/business/tech'
import { Service } from './service-list'

const ServiceMobile = ({ services }: { services: Service[] }) => {
  const [index, setIndex] = useState<number | null>(0)
  return (
    <Box className="mobile-service-container">
      {services.map((service, idx) => {
        const isActive = index === idx
        return (
          <Box
            className="mobile-service-card"
            sx={{
              backgroundColor: isActive ? `${service.hoverColor} !important` : '',
            }}
            key={service.title}
          >
            <Typography
              sx={{
                background: `linear-gradient(180deg, ${service.color} -64.31%, #FFF 99.87%)`,
              }}
              className="mobile-count-text"
            >
              {service.id}
            </Typography>
            <Box className="mobile-service-sub-container">
              <service.Icon className="mobile-service-icon" />
              <Typography
                component="h4"
                variant="h4"
                className="mobile-service-title"
              >
                {service.title}
              </Typography>
            </Box>
            <ExpandMore className="icons" />
            {isActive && (
              <Box className="info-container">
                <Typography className="title">{service.title}</Typography>
                <Typography className="description">
                  {service.description}
                </Typography>
                <Box className="technologies">
                  {techLogos.map((logo) => {
                    return (
                      <Box key={logo.name}>
                        <logo.Src className="icons" />
                      </Box>
                    )
                  })}
                </Box>
              </Box>
            )}
          </Box>
        )
      })}
    </Box>
  )
}

export default ServiceMobile
