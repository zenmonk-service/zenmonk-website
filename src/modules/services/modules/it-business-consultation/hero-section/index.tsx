import { Box, Toolbar } from '@mui/material'
import { HeroSection } from '@/shared/hero-section'
import SectionWrapper from '@/shared/wrapper'
import { Hero as HeroImg } from '../assets'
import BackgroundImage from '../assets/it-background.png'

const ItBusinessConsultation: React.FC = () => (
  <Box
    sx={{
      backgroundImage: `url(${BackgroundImage.src})`,
      backgroundSize: 'contain',
    }}
  >
    <Toolbar />
    <HeroSection
      title="Driving Innovation with <br/> IT & Business Expertise"
      highlightedText="IT & Business Expertise"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      image={HeroImg.src}
    />
  </Box>
)

export { ItBusinessConsultation }
