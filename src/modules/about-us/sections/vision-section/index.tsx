import { Box } from '@mui/material'
import VisionCard from '../../components/card/vision-card'
import { visions } from './visions'
import './styles.scss'
import { SectionDescription, SectionTitle } from '@/shared/typography'

export const VisionSection = () => {
  return (
    <Box className="vision-section">
      <SectionTitle
        markText="Values"
        text="Driven by Vision, Guided by Values"
        className="section-title"
      />
      <SectionDescription text="Empower and help Small & Medium enterprises to grow by providing reliable and cost-effective services & solutions." className="section-description" />
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
    </Box>
  )
}
