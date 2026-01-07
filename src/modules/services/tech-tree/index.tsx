'use client'

import Stack from '@mui/material/Stack'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { TechTreeImage1, Group1, Group2, Group3, Group4, Group5, Group6, Group7, Group9, Group10, Gears, DevTechTree } from './assets'
import { RandomBgIcons } from './random-bg-icons/random-bg-icons'
import { Box } from '@mui/material'
import Image from 'next/image'
import './style.scss'

interface TechnologyTreeProps {
  Icons?: React.ComponentType<any>[]
  MainImage?: React.ReactNode
  title?: string
  highlightedWord?: string
  description?: string
  markTextProps?: { rotate?: number }
  showGears?: boolean
  isTechTree?: boolean,
  noRandomIcons?: boolean
}

const TechnologyTree = ({
  Icons = [Group2, Group4, Group10, Group5, Group6, Group7, Group1, Group9, Group3],
  MainImage = <TechTreeImage1 />,
  title = "Zen Tech Wonders We Excel In Innovation & Excellence",
  highlightedWord = "Excellence",
  description = "We lead the way in technological innovation, consistently delivering solutions that transform industries. Our commitment to excellence helps businesses and individuals achieve more.",
  markTextProps = { rotate: 2 },
  showGears = false,
  isTechTree = false,
  noRandomIcons
}: TechnologyTreeProps) => {
  const isMobile = useMediaQuery('(max-width:770px)')

  return (
    <Stack className="tech-tree-container">
      {/* Background */}
      {noRandomIcons ? null : <RandomBgIcons Icons={Icons} />}
      {(showGears || isTechTree) && <Box className="gear-container"><Image className="gears" src={Gears} alt="gears" fill /></Box>}
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
            text={title}
            markText={highlightedWord}
            align={isMobile ? 'center' : 'left'}
            markTextProps={markTextProps}
            className="tech-tree-heading"
          />

          <SectionDescription
            className="tech-tree-description"
            text={description}
          />
        </Stack>

        {isTechTree ? <DevTechTree /> : MainImage}
      </Stack>
    </Stack>
  )
}

export default TechnologyTree
