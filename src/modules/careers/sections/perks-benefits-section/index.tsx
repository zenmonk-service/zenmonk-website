'use client'

import Container from '@mui/material/Container'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/shared/typography'
import { perkBenefitsList } from './perks-benefits-list'
import './styles.scss'

interface PerksCardProps {
  borderColor: string
  bgColor: string
  title: string
  image: any
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Soothing sequential cascade
      delayChildren: 0.1,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 20 // Soft deceleration without heavy bounce
    }
  }
}

const PerkBenefits = () => {
  return (
    <div className="perk-benefits-section">
      <Container className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
          </motion.div>

          <div className="perks-benefits-list">
            {perkBenefitsList.map((item, index) => (
              <PerksCard
                key={index}
                variants={itemVariants}
                borderColor={item.borderColor}
                bgColor={item.color}
                title={item.title}
                image={item.image}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

const PerksCard = ({
  title,
  image: Icon,
  bgColor,
  borderColor,
  variants,
}: PerksCardProps & { variants?: any }) => {
  return (
    <motion.div 
      variants={variants}
      style={{ border: `1px solid ${borderColor}` }} 
      className="perk-card"
    >
      <div style={{ backgroundColor: bgColor }} className="perk-card-image">
        <Icon />
      </div>
      <p className="perk-card-title">{title}</p>
    </motion.div>
  )
}

export default PerkBenefits
