'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { countries, Country } from '@/assets/icons/contact-us'
import { Email, Phone, Location } from '@/assets/icons/contact-us/contact'
import ContactCard from '@/shared/contact-card'
import CountriesList from '@/shared/countries-list'
import { ContactForm } from '../../modules/about-us/components/contact-form'
import AboutSectionWrapper from '../wrapper/about-wrapper'
import dottedLine from './assets/dotted-line.png'
import polygon from './assets/polygon.png'
import './styles.scss'

export const ContactUsSection = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  const isLaptop = useMediaQuery('(max-width: 1499px)')

  const content = (
    <Box className="contact-us">
      <Image src={polygon} alt="polygon" width={300} className="polygon" />
      <Image src={dottedLine} alt="dotted-line" className="dotted-image" />
      <Box className="left-container">
        <Typography component="h1" className="section-title">
          We’re Just a <br />
          <Typography component="span">Message</Typography> Away
        </Typography>
        <Box className="countries-list">
          <CountriesList
            className="countries-list"
            countryCardProps={{
              className: 'country-card',
            }}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </Box>
        <Typography className="selected-country-title">
          {selectedCountry.name}
        </Typography>
        <Typography className="selected-country-description">
          {selectedCountry.description}
        </Typography>
        <ContactCard
          className="contact-card"
          url={Email}
          description={selectedCountry.office.email}
        />
        <ContactCard
          className="contact-card"
          url={Phone}
          description={selectedCountry.office.phone}
        />
        <ContactCard
          className="contact-card"
          url={Location}
          description={selectedCountry.office.address}
        />
      </Box>
      <Box className="right-container">
        <ContactForm />
      </Box>
    </Box>
  )
  return !isLaptop ? (
    <Box className="about-us-contact-us-section">
      <AboutSectionWrapper>{content}</AboutSectionWrapper>
    </Box>
  ) : (
    <Box className="about-us-contact-us-section">{content}</Box>
  )
}
