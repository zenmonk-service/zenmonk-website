import { Box, Typography } from '@mui/material'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import WhyChooseUs from './assets/whyChooseUsImg.svg'
import './styles.scss'

const UiUxWhyChooseUs: React.FC = () => (
  <Box className="why-choose-us">
    <SectionTitle align="center" className="title" text={'Why Choose Us'} />
    <SectionDescription
      className="desc"
      text="
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s. Lorem Ipsum has been the industry's standard dummy text ever since
    the 1500s."
    ></SectionDescription>
    <WhyChooseUs className="why-choose-us-image" />
  </Box>
)

export { UiUxWhyChooseUs }
