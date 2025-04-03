import { Box, Typography } from '@mui/material'
import Title from '@/shared/title'
import SectionWrapper from '@/shared/wrapper'
import VisionCard from '../../components/card/vision-card'
import './styles.scss'
import { visions } from './visions'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'

export const VisionSection = () => {
  return (
    <Box className="vision-section">
      <Title
        text="Driven by Vision, Guided by Values"
        className="section-title"
      />
      <Typography component="p" className="section-description">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s. Lorem Ipsum has been the industry's standard{' '}
      </Typography>
      <AboutSectionWrapper>
        <Box className="vision-list">
          {visions.map((vision, index) => {
            return (
              <VisionCard
                title={vision.title}
                image={vision.image}
                key={index}
              />
            )
          })}
        </Box>
      </AboutSectionWrapper>
    </Box>
  )
}
