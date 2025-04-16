import { Box, Typography } from '@mui/material'
import './styles.scss'

interface ContactCardProps {
  url: any
  title?: string
  description: string
  className?: string
}

const ContactCard = ({
  url: Icon,
  title,
  description,
  className,
}: ContactCardProps) => {
  return (
    <Box className={`contact-card ${className}`}>
      <Icon className="contact-card-image" />
      <Box className="contact-card-content">
        {title && (
          <Typography variant="h3" component="h3" className="title">
            {title}
          </Typography>
        )}
        <Typography variant="h2" component="p" className="description">
          {description}
        </Typography>
      </Box>
    </Box>
  )
}

export default ContactCard
