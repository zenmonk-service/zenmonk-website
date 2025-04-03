'use client'

import Image from 'next/image'
import {
  Box,
  Button,
  InputBase,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Monk } from '@/assets/icons'
import MONK_PNG from "./assets/monk.png";
import { socialMedia } from '@/assets/icons/social'
import { consultingCategories } from './list/consulting-categories'
import { quickLink } from './list/quick-links'
import { serviceCategory } from './list/service-categories'
import './styles.scss'

const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box className="footer-section">
      <Box className="header">
        {isMobile && (
          <Box className="logo-wrapper">
            <Image quality={100} src={MONK_PNG} alt="logo" className="logo" />
          </Box>
        )}
        <Typography className="branding">
          Over the last decade, we have helped our clients ship products for
          multiple platforms. We can create the software your business needs to
          grow!
        </Typography>
      </Box>
      <Box className="logo-category-wrapper">
        {!isMobile && (
          <Box className="logo-wrapper">
            <Image quality={100} src={MONK_PNG} alt="logo" className="logo" />
          </Box>
        )}
        <Box className="category-wrapper">
          <Box className="service-category-quick-links-wrapper">
            <Box className="service-category">
              <Typography className="title" component="p">
                Services
              </Typography>
              <Box className="service-category-list">
                {serviceCategory.map((category, index) => {
                  return (
                    <Typography key={index} component="p">
                      {category.title}
                    </Typography>
                  )
                })}
              </Box>
            </Box>
            <Box className="quick-links">
              <Typography className="title" component="p">
                Quick links
              </Typography>
              <Box className="quick-link-list">
                {quickLink.map((link, index) => {
                  return (
                    <Typography key={index} component="p">
                      {link.title}
                    </Typography>
                  )
                })}
              </Box>
            </Box>
          </Box>
          <Box className="consulting-category-contact-wrapper">
            <Box className="consulting-category">
              <Typography className="title" component="p">
                Consulting
              </Typography>
              <Box className="consulting-category-list">
                {consultingCategories.map((category, index) => {
                  return (
                    <Typography key={index} component="p">
                      {category.title}
                    </Typography>
                  )
                })}
              </Box>
            </Box>
            <Box className="contact">
              <Box className="subscribe-section">
                <Typography className="title" component="p">
                  Subscribe US
                </Typography>
                <Typography className="heading">
                  Make the right business move.
                </Typography>
                <Box className="email">
                  <InputBase
                    placeholder="Email Address"
                    className="input-field"
                  />
                  <Button variant="contained" className="submit-button">
                    Submit
                  </Button>
                </Box>
              </Box>
              <Box className="social-media-link">
                <Typography className="title" component="p">
                  Follow US
                </Typography>
                <Box className="social-media-list">
                  {socialMedia.map((item, index) => {
                    return <Image key={index} src={item.url} alt={item.name} />
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="copyright">
        <Typography component="p">© Zenmonk 2025</Typography>
      </Box>
    </Box>
  )
}

export { Footer }
