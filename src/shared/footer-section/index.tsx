'use client'

import Image from 'next/image'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import useMediaQuery from '@mui/material/useMediaQuery'
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
    <div className="footer-section">
      <div className="header">
        {isLaptop && (
          <div className="logo-wrapper">
            <Image quality={100} src={MONK_PNG} alt="logo" className="logo" />
          </div>
        )}

        <SectionDescription
          className="branding"
          text="We deliver transformative digital experiences more than just software that takes your business forward. 
          Let us craft the beautiful chapter of your success story!"
        />
      </div>
      <div className="logo-category-wrapper">
        {!isLaptop && (
          <div className="logo-wrapper">
            <Image quality={100} src={MONK_PNG} alt="logo" className="logo" />
          </div>
        )}
        <div className="category-wrapper">
          <div className="service-category-quick-links-wrapper">
            <div className="service-category">
              <p className="list-title">Services</p>
              <div className="list-container">
                <div className="list">
                  {serviceCategory.slice(0, 5).map((category, index) => (
                    <p className="base-text" key={index}>
                      {category.title}
                    </p>
                  ))}
                </div>
                <div className="list">
                  {serviceCategory.slice(5, 10).map((category, index) => (
                    <p className="base-text" key={index}>
                      {category.title}
                    </p>
                  ))}
                </div>
                <div className="list">
                  {serviceCategory.slice(10, 15).map((category, index) => (
                    <p className="base-text" key={index}>
                      {category.title}
                    </p>
                  ))}
                </div>
                <div className="list">
                  {serviceCategory.slice(15, 20).map((category, index) => (
                    <p className="base-text" key={index}>
                      {category.title}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="quick-links">
              <p className="list-title">Quick links</p>
              <div className="list">
                {quickLink.map((link, index) => {
                  return (
                    <p key={index} className="base-text">
                      {link.title}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="consulting-category-contact-wrapper">
            <div className="consulting-category">
              <p className="list-title">Consulting</p>
              <div className="list-container">
                <div className="list">
                  {consultingCategories.slice(0, 5).map((category, index) => (
                    <p className="base-text" key={index}>
                      {category.title}
                    </p>
                  ))}
                </div>
                <div className="list">
                  {consultingCategories.slice(5, 10).map((category, index) => (
                    <p className="base-text" key={index}>
                      {category.title}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="contact">
              <div className="subscribe-section">
                <p className="list-title">Subscribe US</p>
                <p className="base-text heading">
                  Make the right business move.
                </p>
                <div className="email">
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
                </div>
              </div>
              <div className="social-media-link">
                <div className="quick-links-social-media-wrapper">
                  {isSmallScreen && (
                    <div className="quick-links">
                      <p className="quick-links-title title">Quick links</p>
                      <div className="quick-link-list">
                        {quickLink.map((link, index) => {
                          return (
                            <p key={index} className="base-text">
                              {link.title}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  )}
                  <div>
                    <p className="list-title">Follow US</p>
                    <div className="social-media-list">
                      {socialMedia.map((item, index) => {
                        return <item.icon key={index} className="icons" />
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <SectionDescription text="© Zenmonk 2025" />
      </div>
    </div>
  )
}

export { Footer }
