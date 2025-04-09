import React, { Fragment } from 'react'
import { Box } from '@mui/material'
import { countries, Country } from '@/assets/icons/contact-us'
import CountryCard from '../country'

interface CountriesListProps {
  className: string
  selectedCountry: Country
  countryCardProps?: {
    className?: string
  }
  setSelectedCountry: (country: Country) => void
}

const CountriesList = ({
  className,
  selectedCountry,
  setSelectedCountry,
  countryCardProps,
}: CountriesListProps) => {
  return (
    <Box className={className}>
      {countries.map((country, index) => {
        return (
          <Fragment key={index}>
            <CountryCard
              className={countryCardProps?.className}
              isSelected={country === selectedCountry}
              key={index}
              setSelectedCountry={setSelectedCountry}
              country={country}
            />
          </Fragment>
        )
      })}
    </Box>
  )
}

export default CountriesList
