import Container from '@mui/material/Container'
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
    <div className="perk-benefits-section">
      <Container className="container">
        <SectionTitle
          text="Perks & Benefits"
          markText="Benefits"
          className="title"
          markTextProps={{
            rotate: 2,
          }}
        />
        <p className="description">
          At Zenmonk, we celebrate individuality and creativity. We place our
          people at the heart of everything we do — giving them the freedom,
          trust, and support to evolve both personally and professionally.
        </p>
        <div className="perks-benefits-list">
          {perkBenefitsList.map((item, index) => (
            <PerksCard
              borderColor={item.borderColor}
              bgColor={item.color}
              key={index}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

const PerksCard = ({
  title,
  image: Icon,
  bgColor,
  borderColor,
}: PerksCardProps) => {
  return (
    <div style={{ border: `1px solid ${borderColor}` }} className="perk-card">
      <div style={{ backgroundColor: bgColor }} className="perk-card-image">
        <Icon />
      </div>
      <p className="perk-card-title">{title}</p>
    </div>
  )
}
export default PerkBenefits
