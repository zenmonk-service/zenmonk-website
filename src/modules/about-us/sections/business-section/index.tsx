import { Box, Typography } from '@mui/material'
import Title from '@/shared/title'
import BusinessCard from '../../components/card/business-card'
import { businesses } from './business'
import './styles.scss'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'
import { SectionDescription, SectionTitle } from '@/shared/typography'

export const BusinessSection = () => {
  return (
    <Box className="business-container">
      <SectionTitle
        text="We Are The Complete For Your Business Success"
        markText='Success'
        markTextProps={{
          rotate: 2
        }}
        align="center"
        className='heading'
      />
      <SectionDescription className="description" text="We offer exceptional services, quality customer experience and loyal
        support to our clients by ensuring high success rates. We aim is to
        deliver outstanding results with the help of top-notch services."/>

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
