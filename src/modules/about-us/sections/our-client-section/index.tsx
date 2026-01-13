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
      <SectionTitle markText="Clients" text="Our Clients" />

      <SectionDescription
        text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        className="section-description"
      />

      <Stack direction="column" className="carousel-stack">
        <AutoScrollCarousel
          data={OurPartnersList}
          sliderProps={{ className: 'infinite-slider' }}
          itemWidth={350}
          space={120}
          duration={50}
          showBackground
          renderItem={(item) => (
            <Image
              src={item.icon as string}
              alt={item.label}
              width={500}
              height={300}
              loading="lazy"
              decoding="async"
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          )}
        />

        <AutoScrollCarousel
          data={OurPartnersList}
          sliderProps={{ className: 'infinite-slider' }}
          reverse
          itemWidth={350}
          space={120}
          duration={50}
          showBackground
          renderItem={(item) => (
            <Image
              src={item.icon as string}
              alt={item.label}
              width={500}
              height={300}
              loading="lazy"
              decoding="async"
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          )}
        />
      </Stack>
    </Box>
  )
})
