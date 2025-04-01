import Image from 'next/image'
import { Box, Stack, Toolbar, Typography } from '@mui/material'
import BaseButton from '@/shared/button'
import SectionWrapper from '@/shared/wrapper'
import { Bubble, HeroBg, HeroImg, Meet } from '../assets'
import './styles.scss'

const ProductDevelopment = () => {
  return (
    <>
      <Image src={HeroBg} alt="hero-bg" className="hero-bg" />
      <SectionWrapper>
        <Box className="product-development-hero-section-wrapper">
          <Stack direction="row">
            <Toolbar />
            <Box className="hero-section">
              <Box className="hero-section-text-wrapper">
                <Typography variant="h4" className="text-heading">
                  Reliable & Growth-Oriented
                  <br />
                  <Typography variant="inherit" component="span">
                    Product Development
                  </Typography>
                </Typography>
                <Typography component="p" className="text-description">
                  We believe in ZenFusion, merging technology with mindfulness.
                  As your partners in technological excellence, we transform
                  values into action, simplifying tech to deliver user-centered
                  solutions.
                </Typography>
              </Box>
              <BaseButton sx={{ width: '180px' }}>EXPLORE MORE</BaseButton>
            </Box>
          </Stack>
          <Box className="hero-section-image-wrapper">
            <Image
              className="hero-section-image"
              src={HeroImg}
              alt="innovator"
            />
          </Box>
        </Box>
      </SectionWrapper>
    </>
  )
}

export { ProductDevelopment }
