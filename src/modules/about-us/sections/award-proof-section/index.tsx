import { Box, Container, Typography } from '@mui/material'
import Title from '@/shared/title'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'
import AwardProofCard from '../../components/card/award-proof'
import { awardProof } from './award-proof'
import './styles.scss'

export const AwardProofSection = () => {
  return (
    <Box className="award-proof-section">
      <Title
        text="Prestigious Accolades That We Have Received Over Time"
        className="section-title"
      />
      <Typography component="p" className="section-description">
        We are thrilled to showcase our esteemed awards that we have received
        throughout our business journey.{' '}
      </Typography>
      <Box className="award-proof-list">
        {awardProof.map((award, index) => {
          return (
            <AwardProofCard
              description={award.description}
              image={award.image}
              title={award.title}
              key={index}
            />
          )
        })}
      </Box>
    </Box>
  )
}
