import { Box, Stack, Typography } from '@mui/material'
import Title from '@/shared/title'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import {
  DottedCircle,
  HalfGearImage,
  SmallGearImage,
  TechTreeImage,
} from './assets'
import './style.scss'

const TechnologyTree = () => {
  return (
    <Stack className="tech-tree-container">
      <Stack className="tech-tree-right">
        <SectionTitle
          text="Zen Tech Wonders We Excel In Innovation & Excellence"
          markText="Excellence"
          align="left"
          markTextProps={{
            rotate: 2,
          }}
          className="tech-tree-heading"
        />
        <SectionDescription
          className="tech-tree-description"
          text="We lead the way in technological innovation, consistently delivering
          solutions that transform industries. Our commitment to excellence
          helps businesses and individuals achieve more."
        />
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
