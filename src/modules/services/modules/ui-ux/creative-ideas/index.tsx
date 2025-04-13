import { Box, Typography } from '@mui/material'
import './styles.scss'

const CreativeIdeas = () => {
  return (
    <Box className="creative-ideas">
      <Typography component="p">
        <span>
          <span className="orange">Creative </span> Ideas{' '}
        </span>
        <span>That </span>
        <span className="wow">WOW </span>
        <span>
          Your <span className="orange">Audience</span>
        </span>
      </Typography>
    </Box>
  )
}

export { CreativeIdeas }
