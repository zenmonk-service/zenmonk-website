import { Box, Typography } from '@mui/material'
import LeftImage from '@/modules/services/modules/ui-ux/creative-ideas/assets/left-side.svg'
import RightImage from '@/modules/services/modules/ui-ux/creative-ideas/assets/right-side.svg'
import './styles.scss'

const CreativeIdeas = () => {
  return (
    <Box className="creative-ideas">
      {/* LEFT HAND */}
      <Box className="hand-fixed left">
        <LeftImage className="hand-svg" />
      </Box>

      {/* CONTENT */}
      <Box className="creative-ideas-content">
        <Typography sx={{maxWidth:'max-content'}}>
          <span className="orange">Creative&nbsp;&nbsp;</span>Ideas
        </Typography>
        <Typography>That</Typography>
        <Typography className="wow">WOW</Typography>
        <Box className="creative-ideas-content">
          <Typography>
            Your&nbsp;&nbsp;<span className="orange">Audience</span>
          </Typography>
        </Box>
      </Box>

      {/* RIGHT HAND */}
      <Box className="hand-fixed right">
        <RightImage className="hand-svg" />
      </Box>
    </Box>
  )
}

export { CreativeIdeas }
