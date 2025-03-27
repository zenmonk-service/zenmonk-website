import Image from 'next/image'
import { Stack, Typography } from '@mui/material'
import Title from '@/shared/title'
import {
  DottedCircle,
  HalfGearImage,
  SmallGearImage,
  TechTreeImage,
} from './assets'
import './style.scss'

const TechnologyTree = () => {
  return (
    <Stack direction="row" className="tech-tree-container">
      <Stack className="tech-tree-right">
        <Title
          text="Zen Tech Wonders We Excel In Innovation & Excellence"
          align="left"
          sx={{ width: '420px' }}
        />
        <Typography className="tech-tree-description">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.{' '}
        </Typography>
      </Stack>
      <Image src={TechTreeImage} alt="" />
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
