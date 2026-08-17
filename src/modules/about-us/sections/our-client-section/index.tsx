'use client'

import { Box, Stack } from '@mui/material'
import { OurPartnersList } from '@/assets/icons/collaboration'
import AutoScrollCarousel from '@/shared/auto-scroll-carousel'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { memo } from 'react'
import Image from 'next/image'
import './styles.scss'

export const OurClientSection = memo(() => {
  const firstRowPartners = OurPartnersList.slice(0, 4)
  const secondRowPartners = OurPartnersList.slice(4)

  return (
    <Box className="about-us-our-client-section">
      <SectionTitle markText="Clients" text="Our Clients" />

      <SectionDescription
        text="Trusted by institutions and organizations across education, technology, and innovation."
        className="section-description"
      />

      <Stack direction="column" className="carousel-stack">
        <AutoScrollCarousel
          data={firstRowPartners}
          sliderProps={{ className: 'infinite-slider' }}
          itemWidth={300}
          space={100}
          duration={50}
          showBackground
          renderItem={(item) => (
            <Image
              src={item.icon as string}
              alt={item.label}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              loading="lazy"
              decoding="async"
              style={{
                objectFit: 'contain',
                padding: (item.label === 'Unib' || item.label === 'Citealimenta') ? '4px 0' : undefined,
              }}
            />
          )}
        />

        <AutoScrollCarousel
          data={secondRowPartners}
          sliderProps={{ className: 'infinite-slider' }}
          reverse
          itemWidth={300}
          space={100}
          duration={50}
          showBackground
          renderItem={(item) => (
            <Image
              src={item.icon as string}
              alt={item.label}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              loading="lazy"
              decoding="async"
              style={{
                objectFit: 'contain',
                padding: (item.label === 'Unib' || item.label === 'Citealimenta') ? '4px 0' : undefined,
              }}
            />
          )}
        />
      </Stack>
    </Box>
  )
})
OurClientSection.displayName = 'OurClientSection'
