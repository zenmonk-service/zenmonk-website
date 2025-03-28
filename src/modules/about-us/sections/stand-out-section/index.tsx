import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import Title from '@/shared/title'
import StandOutCard from '../../components/card/stand-out-card'
import { standOutList } from './stand-out'
import './styles.scss'
import SectionWrapper from '@/shared/wrapper'

export const StandOutSection = () => {
  return (
    <SectionWrapper>
    <Box className="stand-out-section">
      <Title
        text="Stand Out From The Rest"
        align="center"
        className="section-title"
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
            <Image
              src={standOutList[standOutList.length - 1].icon}
              alt="stand-out"
              width={78}
              height={100}
            />
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
    </SectionWrapper>
  );
};
