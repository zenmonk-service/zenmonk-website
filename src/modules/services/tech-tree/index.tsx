import Image from 'next/image'
import { Box, Stack, Typography } from '@mui/material'
import Title from '@/shared/title'
import SectionWrapper from '@/shared/wrapper'
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
        <Title
          text="Zen Tech Wonders We Excel In Innovation & Excellence"
          align="left"
          className="tech-tree-heading"
        />
        <Typography className="tech-tree-description">
        We lead the way in technological innovation, consistently delivering solutions that transform industries. Our commitment to excellence helps businesses and individuals achieve more.
        </Typography>
      </Stack>
      <Box className="tech-tree-image-wrapper">
        <Image src={TechTreeImage} alt="" />
      </Box>
      <Image src={HalfGearImage} alt="" className="half-gear" />
      <Image src={SmallGearImage} alt="" className="small-gear" />
      <Image src={DottedCircle} alt="" className="dotted-circle-1" />
      <Image src={DottedCircle} alt="" className="dotted-circle-2" />
      <Image src={DottedCircle} alt="" className="dotted-circle-3" />
      <Image src={DottedCircle} alt="" className="dotted-circle-4" />
      <Image src={DottedCircle} alt="" className="dotted-circle-5" />
    </Stack>
  )
}

export default TechnologyTree
