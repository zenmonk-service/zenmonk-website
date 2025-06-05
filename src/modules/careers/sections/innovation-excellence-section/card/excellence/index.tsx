import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import './styles.scss'

interface ExcellenceCardProps {
  details: {
    title: string
    description: string
    image: any
    color: string
  }
}

const ExcellenceCard = ({ details }: ExcellenceCardProps) => {
  return (
    <Box
      className="excellence-card"
      sx={{ border: `1px solid ${details.color}` }}
    >
      <details.image className="excellence-card-image" ></details.image>
      <Typography className="title">{details.title}</Typography>
      <Typography className="description">{details.description}</Typography>
    </Box>
  )
}

export default ExcellenceCard
