'use client'

import Image from 'next/image'
import { Box } from '@mui/material'
import './styles.scss'

type CountryType = {
  name: string
  img?: string
}

interface CountryCardProps {
  country: CountryType
  isSelected: boolean
  setSelectedCountry: (country: CountryType) => void
}

const Country = ({
  country,
  setSelectedCountry,
  isSelected,
}: CountryCardProps) => {
  const { img: url, name } = country

  return (
    <Box
      className={`country-card ${isSelected ? 'country-card-selected' : ''}`}
      onMouseEnter={() => setSelectedCountry(country)}
    >
      {url && <Image src={url} alt={name} width={100} height={100} />}
    </Box>
  )
}

export default Country
