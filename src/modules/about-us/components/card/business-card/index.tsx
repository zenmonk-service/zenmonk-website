import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SectionDescription } from '@/shared/typography'
import './styles.scss'

interface BusinessCardProps {
  Icon: any
  title: string
  name: string
  description: string
}
const BusinessCard = ({
  Icon,
  title,
  name,
  description,
}: BusinessCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  }
  return (
    <motion.div
      transition={{
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ scale: 1.05 }}
      variants={item}
      className={`about-us-business-card-container ${name}`}
    >
      <Box className="business-card-icon-container">
        <Box className="icon">
          <Icon />
        </Box>
      </Box>
      <Box className="business-card-content">
        <Typography component="h3" className="business-card-title">
          {title}
        </Typography>
        <SectionDescription
          text={description}
          className="business-card-description"
        />
      </Box>
    </motion.div>
  )
}

export default BusinessCard
