'use client'

import { useState } from 'react'
import { Grid2 } from '@mui/material'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import Tooltip from '@mui/material/Tooltip'
import useMediaQuery from '@mui/material/useMediaQuery'
import CheckIcon from '@mui/icons-material/Check'
import { motion, AnimatePresence } from 'framer-motion'
import { socialMedia } from '@/assets/icons/social'
import { SectionDescription } from '@/shared/typography'
import OfficialLogo from './assets/official-logo.svg'
import ListHeading from './list-heading/list-heading'
import ListItem from './list-items/list-items'
import { consultingCategories } from './list/consulting-categories'
import { quickLink } from './list/quick-links'
import { serviceCategory } from './list/service-categories'
import './styles.scss'

const QuickLinks = () => (
  <Grid2 size={{ xs: 5, sm: 3, md: 2 }} mt={{ xs: 2, md: 0 }}>
    <ListHeading title="Quick links" />
    {quickLink.map((item) => (
      <ListItem text={item.title} link={item.link} key={item.id} />
    ))}
  </Grid2>
)

const FollowUs = () => (
  <Grid2 size={{ xs: 5, sm: 3, md: 2 }} mt={{ xs: 2, md: 0 }}>
    <ListHeading title="Follow Us" />
    <div className="social-media-list">
      {socialMedia.map((item, index) => (
        <a
          key={index}
          href={item.href || '#'}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          <item.icon className="icons" />
        </a>
      ))}
    </div>
  </Grid2>
)

const Footer = () => {
  const isLaptop = useMediaQuery('(max-width:1423px)')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubscribe = () => {
    if (!email) return
    console.log('Subscribed email:', email)
    setEmail('')
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
  }

  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  }

  const columns = chunkArray(serviceCategory, 5)
  const consultingColumns = chunkArray(consultingCategories, 5)

  return (
    <div className="footer-section">
      <div className="header">
        {isLaptop && (
          <div className="logo-wrapper">
            <OfficialLogo className="logo" />
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
            <OfficialLogo className="logo" />
          </div>
        )}
        <div className="category-wrapper">
          <div className="service-category-quick-links-wrapper">
            <div className="service-category">
              <Grid2 columnSpacing={4} container columns={10}>
                {columns.map((column, colIndex) => (
                  <Grid2 size={{ xs: 5, sm: 3, md: 2 }} key={colIndex}>
                    <ListHeading title={!colIndex ? 'Services' : '‎'} />
                    {column.map((item) => (
                      <ListItem text={item.title} link={item.link} key={item.id} />
                    ))}
                  </Grid2>
                ))}
                {consultingColumns.map((column, colIndex) => (
                  <Grid2 size={{ xs: 5, sm: 3, md: 2 }} key={`consulting-${colIndex}`}>
                    <ListHeading title={!colIndex ? 'Consulting' : '‎'} />
                    {column.map((item) => (
                      <ListItem text={item.title} key={item.id} />
                    ))}
                  </Grid2>
                ))}
              </Grid2>
            </div>
          </div>
          <div className="consulting-category-contact-wrapper">
            <div className="consulting-category">
              <Grid2 columnSpacing={4} columns={10} container>
                <QuickLinks />
                <Grid2 size={{ xs: 10, sm: 6, md: 4 }} mt={{ xs: 2, md: 0 }}>
                  <ListHeading title="Subscribe Us" />
                  <ListItem text="Make the right business move" />
                  <div className="email">
                    <Tooltip title={email || ''} disableHoverListener={!email} arrow>
                      <InputBase
                        placeholder="Email Address"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        slotProps={{
                          input: {
                            className: 'input',
                            onBlur: (e) => {
                              e.target.setSelectionRange(0, 0)
                              e.target.scrollLeft = 0
                            },
                          },
                        }}
                        endAdornment={
                          <Button 
                            variant="contained" 
                            className="submit-button"
                            onClick={handleSubscribe}
                            style={isSubmitted ? { pointerEvents: 'none' } : {}}
                          >
                            <AnimatePresence mode="wait">
                              {isSubmitted ? (
                                <motion.div
                                  key="check"
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                  <CheckIcon />
                                </motion.div>
                              ) : (
                                <motion.span
                                  key="submit"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                >
                                  Submit
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </Button>
                        }
                      />
                    </Tooltip>
                  </div>
                </Grid2>
                <FollowUs />
              </Grid2>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <SectionDescription text="© Zenmonk 2026" />
      </div>
    </div>
  )
}

export { Footer }
