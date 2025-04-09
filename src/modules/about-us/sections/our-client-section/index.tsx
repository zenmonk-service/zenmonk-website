import { Box, Typography } from '@mui/material'
import { OurPartnersList } from '@/assets/icons/collaboration'
import Title from '@/shared/title'
import InfiniteSlider from './slider'
import './styles.scss'

export const OurClientSection = () => {
  return (
    <Box className="about-us-our-client-section">
      <Title text="Our Clients" className="section-title" />
      <Typography component="p" className="section-description">
        We partner with a wide range of clients, offering tailored solutions
        that drive success, foster growth, and consistently exceed expectations.
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
