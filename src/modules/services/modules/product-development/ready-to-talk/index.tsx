import { Box, Button, Stack, Typography } from '@mui/material'
import { ReadyToTalkPersonImage } from '../assets'
import './style.scss'

const ReadyToTalkProductDevelopment = () => {
  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      className="ready-to-talk-product-dev-container"
      sx={{
        gap: {
          xs: '24px',
          md: '0.5208vw',
          lg: '1.6667vw',
          xl: '2.6042vw',
        },
      }}
    >
      <Stack
        className="ready-to-talk-text-container"
        justifyContent={'flex-start'}
      >
        <Typography
          className="ready-to-talk-heading"
          width={{ sm: '25vw', md: '25vw', lg: '26.7708vw', xl: '31.875vw' }}
        >
          Are you ready to start ?
        </Typography>
        <Typography
          className="ready-to-talk-description"
          width={{ sm: '25vw', md: '25vw', lg: '26.7708vw', xl: '31.875vw' }}
        >
          Custom Software Development Tailored Solutions for Your Business
          Custom Software Development Tailored Solutions{' '}
        </Typography>
        <Button className="contact-us-btn">Contact Us</Button>
      </Stack>
      <Box className="ready-to-talk-image-container">
        <ReadyToTalkPersonImage className="ready-to-talk-image" />
      </Box>
    </Stack>
  )
}

export default ReadyToTalkProductDevelopment
