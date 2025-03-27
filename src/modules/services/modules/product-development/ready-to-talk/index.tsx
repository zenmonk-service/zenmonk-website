import Image from 'next/image'
import { Button, Stack, Typography } from '@mui/material'
import { ReadyToTalkPersonImage } from '../assets'
import './style.scss'

const ReadyToTalkProductDevelopment = () => {
  return (
    <Stack
      direction={{ xs: 'column-reverse', sm: 'row' }}
      className="ready-to-talk-product-dev-container"
      sx={{ gap: { xs: 3, sm: 10, md: 20, lg: 32, xl: 50 } }}
    >
      <Stack justifyContent={'flex-start'} maxWidth={'612px'}>
        <Typography className="ready-to-talk-heading">
          Are you ready to start ?
        </Typography>
        <Typography className="ready-to-talk-description">
          Custom Software Development Tailored Solutions for Your Business
          Custom Software Development Tailored Solutions{' '}
        </Typography>
        <Button className="contact-us-btn">Contact Us</Button>
      </Stack>
      <Image src={ReadyToTalkPersonImage} alt="" />
    </Stack>
  )
}

export default ReadyToTalkProductDevelopment
