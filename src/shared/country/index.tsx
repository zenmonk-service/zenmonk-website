import Image from 'next/image'
import { Box } from '@mui/material'
import { Country as CountryType } from '@/assets/icons/contact-us'
import './styles.scss'

interface CountryCardProps {
  country: CountryType
  isSelected: boolean
  className?: string
  setSelectedCountry: (country: CountryType) => void
}
const Country = ({
  country,
  setSelectedCountry,
  isSelected,
  className,
}: CountryCardProps) => {
  const { img: Icon, name } = country
  return (
    <Box
      className={`country-card ${isSelected ? 'country-card-selected' : ''} ${className}`}
      onMouseEnter={() => setSelectedCountry(country)}
    >
      {Icon && <Icon className="icons"/>}
    </Box>
  )
}

export default Country
