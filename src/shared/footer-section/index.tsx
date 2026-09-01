'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import Tooltip from '@mui/material/Tooltip'
import CheckIcon from '@mui/icons-material/Check'
import { motion, AnimatePresence } from 'framer-motion'
import { socialMedia } from '@/assets/icons/social'
import { SectionDescription } from '@/shared/typography'
import ListHeading from './list-heading/list-heading'
import ListItem from './list-items/list-items'
import { quickLink } from './list/quick-links'
import { serviceCategory } from './list/service-categories'
import './styles.scss'

const Footer = () => {
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

  const serviceColumns = chunkArray(serviceCategory, 5)

  return (
    <footer className="footer-section">
      <div className="top-banner">
        <Link href="/" className="logo-wrapper logo-mobile" prefetch={false}>
          <Image
            src="/logo.svg"
            alt="Zenmonk Logo"
            width={85}
            height={109}
            className="logo"
            priority
          />
        </Link>
        <p className="branding-text">
          Over the last decade, we have helped our clients ship products for multiple platforms. We can create the software your business needs to grow!
        </p>
      </div>

      <div className="divider" />

      <div className="main-content">
        <Link href="/" className="logo-wrapper logo-desktop" prefetch={false}>
          <Image
            src="/logo.svg"
            alt="Zenmonk Logo"
            width={140}
            height={179}
            className="logo"
            priority
          />
        </Link>

        <div className="services-column-group">
          <ListHeading title="Services" />
          <div className="services-subcolumns">
            {serviceColumns.map((col, colIndex) => (
              <div key={colIndex} className="service-subcolumn">
                {col.map((item) => (
                  <ListItem text={item.title} link={item.link} key={item.id} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="quick-links-follow-group">
          <div className="quick-links-column">
            <ListHeading title="Quick Links" />
            {quickLink.map((item) => (
              <ListItem text={item.title} link={item.link} key={item.id} />
            ))}
          </div>

          <div className="follow-us-column">
            <ListHeading title="Follow Us" />
            <div className="social-media-list">
              {socialMedia.map((item) => (
                <a
                  key={item.id}
                  href={item.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon className="icons" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="subscribe-column">
          <ListHeading title="Subscribe US" />
          <ListItem text="Make the right business move." />
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
                          SUBMIT
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                }
              />
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="copyright">
        <SectionDescription text={`© Zenmonk ${new Date().getFullYear()}`} />
      </div>
    </footer>
  )
}

export { Footer }
