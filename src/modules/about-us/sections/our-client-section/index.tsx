'use client'

import { Box, Stack } from '@mui/material'
import { OurPartnersList } from '@/assets/icons/collaboration'
import AutoScrollCarousel from '@/shared/auto-scroll-carousel'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import './styles.scss'
import { memo } from 'react'
import Image from 'next/image'

export const OurClientSection = memo(() => {
  return (
    <Box className="about-us-our-client-section">
      <SectionTitle markText="Our Clients" text="Our Clients" />

      <SectionDescription
        text="Our clients trust us to provide outstanding solutions knowing our dedication to quality, creativity, and their ongoing success drives everything we do."
        className="section-description"
      />

      <Stack direction="column" spacing={2}>
        <AutoScrollCarousel
          isBgShadow
          data={OurPartnersList}
          sliderProps={{ className: 'infinite-slider' }}
          space={70}
          renderItem={(item) => (
            <Image
              src={item.icon}
              alt={item.label}
              width={240}
              height={120}
              loading="lazy"
              decoding="async"
            />
          )}
        />

        <AutoScrollCarousel
          isBgShadow
          data={OurPartnersList}
          sliderProps={{ className: 'infinite-slider' }}
          reverse
          space={70}
          renderItem={(item) => (
            <Image
              src={item.icon}
              alt={item.label}
              width={240}
              height={120}
              loading="lazy"
              decoding="async"
            />
          )}
        />
      </Stack>
    </Box>
  )
})
