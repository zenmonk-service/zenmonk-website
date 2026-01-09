import { Box } from '@mui/material'
import AwardProofCard from '../../components/card/award-proof'
import { awardProof } from './award-proof'
import './styles.scss'
import { SectionDescription, SectionTitle } from '@/shared/typography'

export const AwardProofSection = () => {
  return (
    <Box className="award-proof-section">
      <SectionTitle
        className='section-title'
        markText='Services'
        text="Awards Proof Your Business With Our IT Services"
      />
      <SectionDescription
        text="We are thrilled to showcase our esteemed awards that we have received
        throughout our business journey." className='section-description' />
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
