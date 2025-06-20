'use client'

import Image from 'next/image'
import {
  Box,
  Button,
  InputBase,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { socialMedia } from '@/assets/icons/social'
import { SectionDescription } from '@/shared/typography'
import MONK_PNG from './assets/monk.png'
import { consultingCategories } from './list/consulting-categories'
import { quickLink } from './list/quick-links'
import { serviceCategory } from './list/service-categories'
import './styles.scss'

const Footer = () => {
  const isLaptop = useMediaQuery('(max-width:1423px)')
  const isSmallScreen = useMediaQuery('(max-width:436px)')

  return (
    <Box className="footer-section">
      <Box className="header">
        {isLaptop && (
          <Box className="logo-wrapper">
            <Image quality={100} src={MONK_PNG} alt="logo" className="logo" />
          </Box>
        )}

        <SectionDescription
          className="branding"
          text="We deliver transformative digital experiences more than just software that takes your business forward. 
          Let us craft the beautiful chapter of your success story!"
        />
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
              <Typography className="list-title" component="p">
                Services
              </Typography>
              <Box className="list-container">
                <Box className="list">
                  {serviceCategory.slice(0, 5).map((category, index) => (
                    <Typography component="p" className="base-text" key={index}>
                      {category.title}
                    </Typography>
                  ))}
                </Box>
                <Box className="list">
                  {serviceCategory.slice(5, 10).map((category, index) => (
                    <Typography component="p" className="base-text" key={index}>
                      {category.title}
                    </Typography>
                  ))}
                </Box>
                <Box className="list">
                  {serviceCategory.slice(10, 15).map((category, index) => (
                    <Typography component="p" className="base-text" key={index}>
                      {category.title}
                    </Typography>
                  ))}
                </Box>
                <Box className="list">
                  {serviceCategory.slice(15, 20).map((category, index) => (
                    <Typography component="p" className="base-text" key={index}>
                      {category.title}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="quick-links">
              <Typography className="list-title" component="p">
                Quick links
              </Typography>
              <Box className="list">
                {quickLink.map((link, index) => {
                  return (
                    <Typography key={index} className="base-text" component="p">
                      {link.title}
                    </Typography>
                  )
                })}
              </Box>
            </Box>
          </Box>
          <Box className="consulting-category-contact-wrapper">
            <Box className="consulting-category">
              <Typography className="list-title" component="p">
                Consulting
              </Typography>
              <Box className="list-container">
                <Box className="list">
                  {consultingCategories.slice(0, 5).map((category, index) => (
                    <Typography component="p" className="base-text" key={index}>
                      {category.title}
                    </Typography>
                  ))}
                </Box>
                <Box className="list">
                  {consultingCategories.slice(5, 10).map((category, index) => (
                    <Typography component="p" className="base-text" key={index}>
                      {category.title}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="contact">
              <Box className="subscribe-section">
                <Typography className="list-title" component="p">
                  Subscribe US
                </Typography>
                <Typography className="base-text heading">
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
                            <Typography
                              key={index}
                              className="base-text"
                              component="p"
                            >
                              {link.title}
                            </Typography>
                          )
                        })}
                      </Box>
                    </Box>
                  )}
                  <Box>
                    <Typography className="list-title" component="p">
                      Follow US
                    </Typography>
                    <Box className="social-media-list">
                      {socialMedia.map((item, index) => {
                        return <item.icon key={index} className="icons" />
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
        <SectionDescription text="© Zenmonk 2025" />
      </Box>
    </Box>
  )
}

export { Footer }
