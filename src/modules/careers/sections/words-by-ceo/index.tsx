import Image from 'next/image'
import { Box, Stack } from '@mui/material'
import { CeoTextImage, ZenmonkLogo } from '../../assets/ceo-section'
import './styles.scss'

const WordsByCEO = () => {
  return (
    <Stack className="ceo-section-wrapper">
      <Box className="ceo-section-text-image">
        <Image alt="" src={CeoTextImage} />
      </Box>
      <Box className="ceo-section-logo">
        <Image alt="" src={ZenmonkLogo} />
      </Box>
    </Stack>
  )
}

export default WordsByCEO
