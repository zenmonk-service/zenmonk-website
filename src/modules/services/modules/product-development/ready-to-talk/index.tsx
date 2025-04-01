import Image from 'next/image'
import { Box, Button, Stack, Typography } from '@mui/material'
import { ReadyToTalkPersonImage } from '../assets'
import './style.scss'

const ReadyToTalkProductDevelopment = () => {
  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      className="ready-to-talk-product-dev-container"
      sx={{ gap: { xs: 3, md: 10, lg: 32, xl: 50 } }}
    >
      <Stack
        className="ready-to-talk-text-container"
        justifyContent={'flex-start'}
        maxWidth={'612px'}
      >
        <Typography
          className="ready-to-talk-heading"
          width={{ sm: 480, md: 480, lg: 518, xl: 612 }}
        >
          Are you ready to start ?
        </Typography>
        <Typography
          className="ready-to-talk-description"
          width={{ sm: 480, md: 480, lg: 518, xl: 612 }}
        >
          Custom Software Development Tailored Solutions for Your Business
          Custom Software Development Tailored Solutions{' '}
        </Typography>
        <Button className="contact-us-btn">Contact Us</Button>
      </Stack>
      <Box className="ready-to-talk-image-container">
        <Image
          src={ReadyToTalkPersonImage}
          alt=""
          className="ready-to-talk-image"
        />
      </Box>
    </Stack>
  )
}

export default ReadyToTalkProductDevelopment
