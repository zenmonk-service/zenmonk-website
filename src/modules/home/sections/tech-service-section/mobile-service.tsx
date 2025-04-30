'use client'

import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box, Collapse, Typography } from '@mui/material'
import { techLogos } from '@/assets/icons/business/tech'
import './mobile-service.scss'
import { serviceList } from './service-list'

const MobileService = () => {
  const [openIndex, setOpenIndex] = useState<number>()

  return (
    <Box className="mobile-service-section">
      {serviceList.map((item: any, index: number) => (
        <Box key={item.id} className="mobile-service-item"  sx={{
          backgroundColor:`${ index == openIndex && item.hoverColor} !important`
        }}>
          <Box
            onClick={() => {
              index == openIndex ? setOpenIndex(-1) : setOpenIndex(index)
            }}
            className="mobile-service-info-wrapper"
          >
            <Typography
              sx={{
                background: `linear-gradient(180deg, ${item.color} -64.31%, #FFF 99.87%)`,
              }}
              className="mobile-service-number"
            >
              {item.id}
            </Typography>

            <Box className="mobile-service-content">
              <item.Icon className="mobile-service-icon" />
              <Typography className="mobile-service-text">
                {item.title}
              </Typography>
            </Box>

            <Box className="arrow-icon">
              <KeyboardArrowDownIcon fontSize="large" />
            </Box>
          </Box>

          <Box>
            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
              <Box sx={{ mt: 2 }}>
                <Typography className="mobile-service-description">
                  {' '}
                  {item.description}{' '}
                </Typography>
              </Box>
              <Box className="tech-logos">
                {techLogos.map(({ SrcMobile, name }: any) => {
                  return (
                    <Box className="tech-logos-wrapper">
                      <SrcMobile />
                      <Typography>{name}</Typography>
                    </Box>
                  )
                })}
              </Box>
            </Collapse>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default MobileService
