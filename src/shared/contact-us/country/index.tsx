import Image from 'next/image'
import { Box } from '@mui/material'
// import { Country as CountryType } from '../../../../public/countries'
import './styles.scss'

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
