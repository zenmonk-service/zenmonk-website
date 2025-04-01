import Image from 'next/image'
import { Box, Grid, Typography } from '@mui/material'
import BaseButton from '@/shared/button'
import SectionWrapper from '@/shared/wrapper'
import {
  Hero,
  Pen,
  Bracket,
  ColorBrush,
  FilledStar,
  PaintBrush,
  Ring,
  Rope,
  Square,
  Star,
  Flower
} from '../assets'
import './styles.scss'

const UiUx: React.FC = () => (
  <>
    <Box className="ui-ux-section-wrapper">
      <SectionWrapper>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="hero-section-text-wrapper">
              <Typography variant="h3" component="h1" className="text-heading">
                UI/UX
              </Typography>
              <Typography
                variant="h3"
                component="h1"
                className="text-second-heading"
              >
                DESIGN
              </Typography>
              <Typography variant="body1" className="text-description">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s.
              </Typography>
              <BaseButton>Explore Service</BaseButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Image
              className="hero-image"
              src={Hero.src}
              alt="Hero Image"
              width={500}
              height={300}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          </Grid>
        </Grid>
        <Image src={Pen} alt="Pen" className="pen" />
        <Image src={Bracket} alt="Bracket" className="bracket" />
        <Image src={Flower} alt="Flower" className="flower" />
        <Image src={ColorBrush} alt="ColorBrush" className="color-brush" />
        <Image src={FilledStar} alt="FilledStar" className="filled-star" />
        <Image src={PaintBrush} alt="PaintBrush" className="paint-brush" />
        <Image src={Ring} alt="Ring" className="ring" />
        <Image src={Rope} alt="Rope" className="rope" />
        <Image src={Star} alt="Star" className="star" />
        <Image src={Square} alt="Square" className="square" />
      </SectionWrapper>
    </Box>
  </>
)

export { UiUx }
