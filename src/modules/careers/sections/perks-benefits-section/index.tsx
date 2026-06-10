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
          Remote does not mean &quot;distant&quot;. At Zenmonk, you get a
          competitive benefits package and be part of an award-winning team.
          Plus, by working remotely, you save more and enjoy a work/life balance.
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
