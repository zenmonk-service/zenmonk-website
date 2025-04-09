import { Box, Typography } from '@mui/material'
import Title from '@/shared/title'
import VisionCard from '../../components/card/vision-card'
import { visions } from './visions'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'
import './styles.scss'

export const VisionSection = () => {
  return (
    <Box className="vision-section">
      <Title
        text="Driven by Vision, Guided by Values"
        className="section-title"
      />
      <Typography component="p" className="section-description">
      Empower and help Small & Medium enterprises to grow by providing reliable and cost-effective services & solutions.
      </Typography>
      <AboutSectionWrapper>
        <Box className="vision-list">
          {visions.map((vision, index) => {
            return (
              <VisionCard
                description={vision.description}
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
