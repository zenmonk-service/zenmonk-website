import { Box } from '@mui/material'
import { OurPartnersList } from '@/assets/icons/collaboration'
import './styles.scss'
import AutoScrollCarousel from '@/shared/auto-scroll-carousel'
import { SectionDescription, SectionTitle } from '@/shared/typography'

export const OurClientSection = () => {
  return (
    <Box className="about-us-our-client-section">
      <SectionTitle markText="Clients" markTextProps={{rotate:2}} text="Our Clients" />
      <SectionDescription text="We partner with a wide range of clients, offering tailored solutions
        that drive success, foster growth, and consistently exceed expectations." className="section-description"/>

      <AutoScrollCarousel
        isBgShadow
        data={OurPartnersList}
        sliderProps={{ className: 'infinite-slider' }}
        imageProps={{
          size: {
            width: 200,
          },
        }}
      />
      <AutoScrollCarousel
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
