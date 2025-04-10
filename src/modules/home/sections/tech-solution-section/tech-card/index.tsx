import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import './styles.scss'

interface TechProps {
  Icon: string
  title: string
}

const TechCard = ({ Icon, title }: TechProps) => {
  return (
    <Box className="tech-card-container">
      {/* {icon && <Image src={icon} alt={title} className="tech-card-icon" />} */}
      <Icon />
      <Typography component="p" className="tech-card-title">
        {title}
      </Typography>
    </Box>
  )
}

export default TechCard
