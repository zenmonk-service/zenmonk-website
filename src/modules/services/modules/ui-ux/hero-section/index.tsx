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
  Flower,
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
                Want to transform user interactions?
                We design intuitive and engaging experiences that makes every touchpoint seamless and
                enjoyable. Let us enhance your interface with precision and creativity.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Hero className="hero-image" />
          </Grid>
        </Grid>
        <Pen className="pen" />
        <Bracket className="bracket" />
        <Flower className="flower" />
        <ColorBrush className="color-brush" />
        <FilledStar className="filled-star" />
        <PaintBrush className="paint-brush" />
        <Ring className="ring" />
        <Rope className="rope" />
        <Star className="star" />
        <Square className="square" />
      </SectionWrapper>
    </Box>
  </>
)

export { UiUx }
