import { Box, Typography } from '@mui/material'
import CollaborationLogo from '@/assets/icons/collaboration'
import InfiniteSlider from '@/shared/infinite-slider'
import Title from '@/shared/title'
import './styles.scss'

export const OurClientSection = () => {
  const ClientSliderFromRight = CollaborationLogo.slice(0, 5)
  const ClientSliderFromLeft = CollaborationLogo.slice(4, 9)

  return (
    <Box className="about-us-our-client-section">
      <Title text="Our Clients" className="section-title" />
      <Typography component="p" className="section-description">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Typography>

      <InfiniteSlider
        data={[...ClientSliderFromRight, ...ClientSliderFromRight]}
        originFrom="left"
        sliderProps={{ className: 'infinite-slider', gap: 30 }}
        imageProps={{ size: 200 }}
      />
      <InfiniteSlider
        data={[...ClientSliderFromLeft, ...ClientSliderFromLeft]}
        originFrom="right"
        sliderProps={{ className: 'infinite-slider', gap: 30 }}
        imageProps={{ size: 200 }}
      />
    </Box>
  )
}
