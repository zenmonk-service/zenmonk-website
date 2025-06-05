import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import './styles.scss'

const generateHighlightedText = (text: string) => (
  <Typography component="span" variant="inherit">
    {text}
  </Typography>
)

const OurPartnersSectionHeading = async() => {
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
