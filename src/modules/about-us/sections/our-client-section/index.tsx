import { Box } from '@mui/material'
import { OurPartnersList } from '@/assets/icons/collaboration'
import AutoScrollCarousel from '@/shared/auto-scroll-carousel'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import './styles.scss'

export const OurClientSection = () => {
  return (
    <Box className="about-us-our-client-section">
      <SectionTitle
        markText="Associations"
        markTextProps={{ rotate: 1.8 }}
        text="Our Proud Associations"
      />
      <SectionDescription
        text="Our clients trust us to provide outstanding solutions knowing our dedication to quality, creativity, and their ongoing success drives everything we do."
        className="section-description"
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
