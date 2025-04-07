'use client'

import Image from 'next/image'
import {
  Box,
  Button,
  InputBase,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Monk } from '@/assets/icons'
import { socialMedia } from '@/assets/icons/social'
import MONK_PNG from './assets/monk.png'
import { consultingCategories } from './list/consulting-categories'
import { quickLink } from './list/quick-links'
import { serviceCategory } from './list/service-categories'
import './styles.scss'

const Footer = () => {
  const isLaptop = useMediaQuery('(max-width:1423px)')
  const isSmallScreen = useMediaQuery('(max-width:436px)');

  return (
    <Box className="footer-section">
      <Box className="header">
        {isLaptop && (
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
        {!isLaptop && (
          <Box className="logo-wrapper">
            <Image quality={100} src={MONK_PNG} alt="logo" className="logo" />
          </Box>
        )}
        <Box className="category-wrapper">
          <Box className="service-category-quick-links-wrapper">
            <Box className="service-category">
              <Typography className="services-title" component="p">
                Services
              </Typography>
              <Box className="service-category-list">
                <Box className="service-container">
                  {serviceCategory.slice(0, 5).map((category, index) => (
                    <Typography component="p" className="service-category-item">
                      {category.title}
                    </Typography>
                  ))}
                </Box>
                <Box className="service-container">
                  {serviceCategory.slice(5, 10).map((category, index) => (
                    <Typography component="p" className="service-category-item">
                      {category.title}
                    </Typography>
                  ))}
                </Box>
                <Box className="service-container">
                  {serviceCategory.slice(10, 15).map((category, index) => (
                    <Typography component="p" className="service-category-item">
                      {category.title}
                    </Typography>
                  ))}
                </Box>
                <Box className="service-container">
                  {serviceCategory.slice(15, 20).map((category, index) => (
                    <Typography component="p" className="service-category-item">
                      {category.title}
                    </Typography>
                  ))}
                </Box>
                <Box className="quick-links">
                  <Typography className="quick-links-title title" component="p">
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
            </Box>
          </Box>
          <Box className="consulting-category-contact-wrapper">
            <Box className="consulting-category">
              <Typography className="consulting-title" component="p">
                Consulting
              </Typography>
              <Box className="consulting-category-list">
                <Box className="category-container">
                  {consultingCategories.slice(0, 5).map((category, index) => (
                    <Typography component="p" className="category-item">
                      {category.title}
                    </Typography>
                  ))}
                </Box>
                <Box className="category-container">
                  {consultingCategories.slice(5, 10).map((category, index) => (
                    <Typography component="p" className="category-item">
                      {category.title}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="contact">
              <Box className="subscribe-section">
                <Typography className="subscribe-us-title title" component="p">
                  Subscribe US
                </Typography>
                <Typography className="heading">
                  Make the right business move.
                </Typography>
                <Box className="email">
                  <InputBase
                    placeholder="Email Address"
                    className="input-field"
                    slotProps={{
                      input: {
                        className: 'input',
                      },
                    }}
                  />
                  <Button variant="contained" className="submit-button">
                    Submit
                  </Button>
                </Box>
              </Box>
              <Box className="social-media-link">
                <Box className="quick-links-social-media-wrapper">
                  {isSmallScreen && (
                    <Box className="quick-links">
                      <Typography
                        className="quick-links-title title"
                        component="p"
                      >
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
                  )}
                  <Box>
                    <Typography className="follow-us-title title" component="p">
                      Follow US
                    </Typography>
                    <Box className="social-media-list">
                      {socialMedia.map((item, index) => {
                        return (
                          <Image key={index} src={item.url} alt={item.name} />
                        )
                      })}
                    </Box>
                  </Box>
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
