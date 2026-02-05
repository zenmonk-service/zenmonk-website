'use client'

import Stack from '@mui/material/Stack'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import {
  TechTreeImage1,
  Group1,
  Group2,
  Group3,
  Group4,
  Group5,
  Group6,
  Group7,
  Group10,
  Group,
  SharpDevTechTree,
  TechTreeImage,
} from './assets'
import { DevTreeIcons } from './dev-tree.icon'
import SectionImage from './image'
import { RandomBgIcons } from './random-bg-icons/random-bg-icons'
import styles from './tech-tree.module.scss'

interface TechnologyTreeProps {
  Icons?: React.ComponentType<any>[]
  MainImage?: React.ReactNode
  title?: string
  highlightedWord?: string
  markTextProps?: { rotate?: number }
  isTechTree?: boolean
  noRandomIcons?: boolean
}

const TechnologyTree = ({
  Icons = [
    Group2,
    Group4,
    Group10,
    Group5,
    Group6,
    Group7,
    Group1,
    Group,
    Group3,
  ],
  MainImage = <TechTreeImage1 />,
  markTextProps,
  isTechTree = false,
  noRandomIcons,
}: TechnologyTreeProps) => {
  const isMobile = useMediaQuery('(max-width:780px)')

  return (
    <Stack className={styles.techTreeContainer}>
      {noRandomIcons ? null : <RandomBgIcons Icons={Icons} />}
      <Stack
        className={styles.techTreeRight}
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'center', md: 'center' }}
      >
        <div className={styles.techTreeLeft}>
          <SectionTitle
            text="Zen Tech Wonders We Excel In"
            markText="Excel In"
            align={isMobile ? 'center' : 'left'}
            markTextProps={{
              style: {
                marginTop: isMobile ? '-4.8vw' : '-0.45vw',
              },
              ...markTextProps,
            }}
            className={styles.techTreeHeading}
          />

          <SectionDescription
            className={styles.techTreeDescription}
            text="We lead the way in technological 
            innovation, consistently delivering solutions 
            that transform industries. Our commitment to 
            excellence helps businesses and individuals achieve 
            more."
          />
        </div>

        {isTechTree ? (
          <SectionImage data={DevTreeIcons} />
        ) : (
          // <Image
          //   src={SharpDevTechTree}
          //   alt="dev-tech-tree"
          //   width={100}
          //   height={100}
          // />
          MainImage
        )}
      </Stack>
    </Stack>
  )
}

export default TechnologyTree
