import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import StandOutCard from '../../components/card/stand-out-card'
import { standOutList } from './stand-out'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'
import { SectionTitle } from "@/shared/typography"
import './styles.scss'

export const StandOutSection = () => {
  const OurValuesIcon = standOutList[standOutList.length - 1].icon;

  return (
    <AboutSectionWrapper>
      <Box className="stand-out-section">
        <SectionTitle
          text="Stand Out From The Rest"
          markText="Rest"
          align="center"
          markTextProps={{
            rotate: 3
          }}
        />
        <Box className="stand-out-card-container">
          <Box className="left-section">
            {standOutList
              .slice(0, standOutList.length - 1)
              .map((standOut, index) => (
                <StandOutCard
                  key={index}
                  bgImage={standOut.image}
                  icon={standOut.icon}
                  title={standOut.title}
                  description={standOut.description}
                />
              ))}
          </Box>
          <Box className="right-section">
            <Box
              className="right-section-container"
              sx={{
                backgroundImage: `url(${standOutList[standOutList.length - 1].image})`,
              }}
            >
              <Box className="icon-container">
                <OurValuesIcon />
              </Box>
              <Typography variant="h4" className="title">
                {standOutList[standOutList.length - 1].title}
              </Typography>
              <Typography variant="body1" className="description">
                {standOutList[standOutList.length - 1].description}
              </Typography>
              <Box className="core-values">
                {standOutList[standOutList.length - 1].coreValues?.map(
                  (coreValue, index) => {
                    return (
                      <Typography
                        variant="body1"
                        key={index}
                        className="core-value"
                      >
                        {coreValue.title}
                      </Typography>
                    )
                  }
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </AboutSectionWrapper>
  )
}
