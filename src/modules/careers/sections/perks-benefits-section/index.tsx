import { Box, Container, Typography } from '@mui/material'
import { SectionTitle } from '@/shared/typography'
import { perkBenefitsList } from './perks-benefits-list'
import './styles.scss'

interface PerksCardProps {
  borderColor: string
  bgColor: string
  title: string
  image: any
}

const PerkBenefits = () => {
  return (
    <Box className="perk-benefits-section">
      <Container className="container">
        <SectionTitle
          text="Perks & Benefits"
          markText="Benefits"
          markTextProps={{
            rotate: 2,
          }}
        />
        <Typography component="p" className="description">
          At Zenmonk, we believe that each individual is special and creative.
          We prioritize our employees and give them complete independence to
          learn, experiment and grow.
        </Typography>
        <Box className="perks-benefits-list">
          {perkBenefitsList.map((item, index) => (
            <PerksCard
              borderColor={item.borderColor}
              bgColor={item.color}
              key={index}
              title={item.title}
              image={item.image}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

const PerksCard = ({
  title,
  image: Icon,
  bgColor,
  borderColor,
}: PerksCardProps) => {
  return (
    <Box sx={{ border: `1px solid ${borderColor}` }} className="perk-card">
      <Box sx={{ bgcolor: bgColor }} className="perk-card-image">
        <Icon />
      </Box>
      <Typography component="p" className="perk-card-title">
        {title}
      </Typography>
    </Box>
  )
}
export default PerkBenefits
