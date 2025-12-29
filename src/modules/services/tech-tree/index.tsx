'use client'

import Stack from '@mui/material/Stack'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { TechTreeImage1 } from './assets'
import { Group1, Group2, Group3, Group4, Group5, Group6, Group7, Group9, Group10 } from './assets';
import { RandomBgIcons } from './random-bg-icons/random-bg-icons'
import './style.scss'

const TechnologyTree = () => {
  const isMobile = useMediaQuery('(max-width:770px)')
  const Icons = [Group2, Group4, Group10, Group5, Group6, Group7, Group1, Group9, Group3];

  return (
    <Stack className="tech-tree-container">
      {/* Background */}
      <RandomBgIcons Icons={Icons} />

      {/* Foreground */}
      <Stack
        className="tech-tree-right"
        direction="row"
        alignItems={{ xs: 'center', md: 'center' }}
        gap={{ xs: 3, md: '0.83vw' }}
      >
        <Stack
          className="tech-tree-left"
          direction="column"
          gap={{ xs: 2, md: '0.83vw' }}
        >
          <SectionTitle
            text="Zen Tech Wonders We Excel In Innovation & Excellence"
            markText="Excellence"
            align={isMobile ? 'center' : 'left'}
            markTextProps={{ rotate: 2 }}
            className="tech-tree-heading"
          />

          <SectionDescription
            className="tech-tree-description"
            text="We lead the way in technological innovation, consistently delivering
            solutions that transform industries. Our commitment to excellence
            helps businesses and individuals achieve more."
          />
        </Stack>

        <TechTreeImage1 />
      </Stack>
    </Stack>
  )
}

export default TechnologyTree
