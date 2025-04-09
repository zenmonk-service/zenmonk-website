import { Box, Container, Typography } from '@mui/material'
import Title from '@/shared/title'
import AboutSectionWrapper from '@/shared/wrapper/about-wrapper'
import AwardProofCard from '../../components/card/award-proof'
import { awardProof } from './award-proof'
import './styles.scss'

export const AwardProofSection = () => {
  return (
<<<<<<< Updated upstream
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
=======
    <AboutSectionWrapper>
      <Box className="award-proof-section">
        <Title
          text="Awards Proof Your Business With Our IT Services"
          className="section-title"
        />
        <Typography component="p" className="section-description">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s. Lorem Ipsum has been the industry's standard{' '}
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
    </AboutSectionWrapper>
>>>>>>> Stashed changes
  )
}
