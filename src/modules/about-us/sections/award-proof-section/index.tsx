import { Box, Typography } from '@mui/material'
import Title from '@/shared/title'
import SectionWrapper from '@/shared/wrapper'
import AwardProofCard from '../../components/card/award-proof'
import { awardProof } from './award-proof'
import './styles.scss'

export const AwardProofSection = () => {
  return (
    <Box className="award-proof-section">
      <Title
        text="Awards Proof Your Business With Our IT Services"
        className="section-title"
      />
      <Typography component="p" className="section-description">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s. Lorem Ipsum has been the industry's standard{' '}
      </Typography>
      <SectionWrapper>
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
      </SectionWrapper>
    </Box>
  )
}
