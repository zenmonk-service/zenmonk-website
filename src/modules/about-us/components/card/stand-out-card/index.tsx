import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import './styles.scss'

interface StandOutCardProps {
  icon: any
  title: string
  description: string
  bgImage: string
  index: number
}

const StandOutCard = ({
  icon: Icon,
  title,
  description,
  bgImage,
}: StandOutCardProps) => {
  return (
    <div
      className="stand-out-card"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Box className="icon-container">
        <Icon />
      </Box>
      <Box className="stand-out-card-content">
        <Typography component="h3" className="title">
          {title}
        </Typography>
        <Typography component="p" className="description">
          {description}
        </Typography>
      </Box>
    </div>
  )
}

export default StandOutCard
