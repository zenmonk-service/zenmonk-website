import { Box, Stack, Typography } from '@mui/material'
import Title from '@/shared/title'
import {
  DottedCircle,
  HalfGearImage,
  SmallGearImage,
  TechTreeImage,
} from './assets'
import './style.scss'
import { SectionDescription, SectionTitle } from '@/shared/typography'

const TechnologyTree = () => {
  return (
    <Stack className="tech-tree-container">
      <Stack className="tech-tree-right">
        <SectionTitle
          text="Zen Tech Wonders We Excel In Innovation & Excellence"
          markText='Excellence'
          align="left"
          className="tech-tree-heading"
        />
        <SectionDescription className="tech-tree-description" text='We lead the way in technological innovation, consistently delivering
          solutions that transform industries. Our commitment to excellence
          helps businesses and individuals achieve more.' />

      </Stack>
      <TechTreeImage className="tech-tree-image" />
      <HalfGearImage className="half-gear" />
      <SmallGearImage className="small-gear" />
      <DottedCircle className="dotted-circle-1" />
      <DottedCircle className="dotted-circle-2" />
      <DottedCircle className="dotted-circle-3" />
      <DottedCircle className="dotted-circle-4" />
      <DottedCircle className="dotted-circle-5" />
    </Stack>
  )
}

export default TechnologyTree
