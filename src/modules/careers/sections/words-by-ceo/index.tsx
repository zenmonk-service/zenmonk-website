import Image from 'next/image'
import { Box, Stack } from '@mui/material'
import { CeoTextImage, ZenmonkLogo } from '../../assets/ceo-section'
import './styles.scss'

const WordsByCEO = () => {
  return (
    <Stack className="ceo-section-wrapper">
      <Box className="ceo-section-text-image">
        <CeoTextImage/>
      </Box>
      <Box className="ceo-section-logo">
        <ZenmonkLogo/>
      </Box>
    </Stack>
  )
}

export default WordsByCEO
