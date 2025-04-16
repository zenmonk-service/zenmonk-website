import Image from 'next/image'
import { Box, Stack, Typography } from '@mui/material'
import {
  Process as ProcessImg,
  ProcessMobileImage,
} from '@/modules/how-we-work/assets'
import { SectionTitle } from '@/shared/typography'
import './styles.scss'

const Process = () => {
  return (
    <Box className="process-section-wrapper">
      <ProcessImg className="process-img" />
      <Stack className="process-section-mobile">
        <Stack className="text-wrapper">
          <SectionTitle text="Here's How" />
          <Typography
           className='highlighted-text'
          >
            How We Work
          </Typography>
          <SectionTitle text="Process" />
        </Stack>
        <ProcessMobileImage className="process-image-mobile" />
      </Stack>
    </Box>
  )
}

export { Process }
