import { Box, Typography } from '@mui/material'
import Title from '@/shared/title'
import SectionWrapper from '@/shared/wrapper'
import BusinessCard from '../../components/card/business-card'
import { businesses } from './business'
import './styles.scss'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'

export const BusinessSection = () => {
  return (
    <Box className="business-container">
      <Title
        text="We Are The Complete For Your Business Success"
        align="center"
        className='heading'
      />
      <Typography className="description" variant="body1" component="p">
        We offer exceptional services, quality customer experience and loyal
        support to our clients by ensuring high success rates. We aim is to
        deliver outstanding results with the help of top-notch services.
      </Typography>
      <AboutSectionWrapper>
        <Box className="business-card-container">
          {businesses.map((business, index) => {
            return (
              <BusinessCard
                key={index}
                description={business.description}
                name={business.name}
                title={business.title}
                Icon={business.icon}
              />
            )
          })}
        </Box>
      </AboutSectionWrapper>
    </Box>
  )
}
