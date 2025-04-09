'use client'

import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { countries, Country } from '@/assets/icons/contact-us'
import { Email, Phone, Location } from '@/assets/icons/contact-us/contact'
import ContactCard from '@/shared/contact-card'
import CountriesList from '@/shared/countries-list'
import Title from '@/shared/title'
import GlobeAnimation from './globe'
import './styles.scss'

const ContactUs = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  return (
    <Box className="contact-us-section">
      <Box className="left-container">
        <Title
          text="Lets fire up your business!"
          align="left"
          className="section-title"
        />

        <CountriesList
          className="countries-list"
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <Typography className="selected-country">
          {selectedCountry.name}
        </Typography>
        <ContactCard
          url={Email}
          description={selectedCountry.office.email}
          title={'Mail Us'}
        />
        <ContactCard
          url={Phone}
          description={selectedCountry.office.phone}
          title={'For Inquiry'}
        />
        <ContactCard
          url={Location}
          description={selectedCountry.office.address}
          title={'Address'}
        />
      </Box>
      <Box className="right-container">
        <GlobeAnimation selectedCountry={selectedCountry} />
      </Box>
    </Box>
  )
}

export default ContactUs
