import Image from 'next/image'
import { Box, Grid, Typography } from '@mui/material'
import Title from '@/shared/title'
import IMG  from "./assets/whyChooseUsImg.svg"
import './styles.scss'

const UiUxWhyChooseUs: React.FC = () => (
  <Box className="why-choose-us">
    <Title align="center" className="title" text={'Why Choose Us'}></Title>
    <Typography className='desc' component="p">
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s. Lorem Ipsum has been the industry's standard dummy text ever since
      the 1500s.
    </Typography>
    <Image alt="img" src={IMG} ></Image>
  </Box>
)

export { UiUxWhyChooseUs }
