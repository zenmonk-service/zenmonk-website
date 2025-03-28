'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Box, Typography, useMediaQuery } from '@mui/material'
import { countries, Country } from '@/assets/icons/contact-us'
import { Email, Phone, Location } from '@/assets/icons/contact-us/contact'
import ContactCard from '@/shared/contact-card'
import CountriesList from '@/shared/countries-list'
import { ContactForm } from '../../modules/about-us/components/contact-form'
import SectionWrapper from '../wrapper'
import './styles.scss'

export const ContactUsSection = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  const isLaptop = useMediaQuery('(max-width: 1499px)')

  const content = (
    <SectionWrapper>
      <Box className="about-us-contact-us-section">
        {/* <Image
          src={'/about-us/contact-us/vector.svg'}
          alt="vector"
          width={400}
          height={400}
          className="vector"
        /> */}
        <Box className="left-container">
          <Typography component="h1" className="section-title">
            We’re Just a <Typography component="span">Message</Typography> Away
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
    </SectionWrapper>
  )
  return !isLaptop ? <SectionWrapper>{content}</SectionWrapper> : <>{content}</>
}
