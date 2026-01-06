'use client'
import { Box, Stack } from '@mui/material'
import { OurPartnersList } from '@/assets/icons/collaboration'
import AutoScrollCarousel from '@/shared/auto-scroll-carousel'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import './styles.scss'

export const OurClientSection = () => {
  return (
    <Box className="about-us-our-client-section">
      <SectionTitle
        markText="Our Clients"
        text="Our Clients"
      />
      <SectionDescription
        text="Our clients trust us to provide outstanding solutions knowing our dedication to quality, creativity, and their ongoing success drives everything we do."
        className="section-description"
      />

      <Stack direction="column" spacing={2}>
        <AutoScrollCarousel
          isBgShadow
          data={OurPartnersList}
          sliderProps={{ className: 'infinite-slider' }}
          imageProps={{
            size: {
              width: 240,
            },
          }}
          space={70}
        />
        <AutoScrollCarousel
          isBgShadow
          data={OurPartnersList}
          sliderProps={{ className: 'infinite-slider' }}
          imageProps={{
            size: {
              width: 240,
            },
          }}
          reverse
          space={70}
        />
      </Stack>
    </Box>
  )
}
