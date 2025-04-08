import { Box, Typography } from '@mui/material'
import { OurPartnersList } from '@/assets/icons/collaboration'
import InfiniteSlider from './slider'
import Title from '@/shared/title'
import './styles.scss'

export const OurClientSection = () => {
  return (
    <Box className="about-us-our-client-section">
      <Title text="Our Clients" className="section-title" />
      <Typography component="p" className="section-description">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Typography>

      <InfiniteSlider
        isBgShadow
        data={OurPartnersList}
        sliderProps={{ className: 'infinite-slider' }}
        imageProps={{
          size: {
            width: 200,
          },
        }}
      />
      <InfiniteSlider
        isBgShadow
        data={OurPartnersList}
        sliderProps={{ className: 'infinite-slider' }}
        imageProps={{
          size: {
            width: 200,
          },
        }}
        reverse
      />
    </Box>
  )
}
