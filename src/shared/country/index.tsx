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
  const { img: url, name } = country
  return (
    <Box
      className={`country-card ${isSelected ? 'country-card-selected' : ''} ${className}`}
      onMouseEnter={() => setSelectedCountry(country)}
    >
      {url && <Image src={url} alt={name} width={100} height={100} />}
    </Box>
  )
}

export default Country
