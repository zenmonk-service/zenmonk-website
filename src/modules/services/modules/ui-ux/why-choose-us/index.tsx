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
    Our design solutions blend user-centric principles with business outcomes.
    We create intuitive, scalable interfaces that drive long-term engagement."
    ></SectionDescription>
    <WhyChooseUs className="why-choose-us-image" />
  </Box>
)

export { UiUxWhyChooseUs }
