import { Box, Typography } from '@mui/material'
import './styles.scss'

const generateHighlightedText = (text: string) => (
  <Typography component="span" variant="inherit">
    {text}
  </Typography>
)

const OurPartnersSectionHeading = () => {
  return (
    <Box className="heading-container">
      <Typography className="text">
        Fueling partners success that&nbsp;
        {generateHighlightedText('adapt')},{generateHighlightedText(' evolve')},
        and&nbsp;
        {generateHighlightedText('excels')}.
      </Typography>
    </Box>
  )
}

export default OurPartnersSectionHeading
