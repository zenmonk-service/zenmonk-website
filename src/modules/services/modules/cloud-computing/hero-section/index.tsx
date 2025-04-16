import { Box, Toolbar } from '@mui/material'
import { HeroSection } from '@/shared/hero-section'
import SectionWrapper from '@/shared/wrapper'
import { CloudComputing as HeroImg } from '../assets'
import BackgroundImage from '../assets/cloud-background.png'

const CloudComputing: React.FC = () => (
  <Box
    sx={{
      backgroundImage: `url(${BackgroundImage.src})`,
      backgroundSize: 'cover',
    }}
  >
    <Toolbar />
    <HeroSection
      title="Building Secure,<br/> Scalable, and Reliable Cloud Solutions"
      highlightedText="Cloud Solutions"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      image={HeroImg.src}
    />
  </Box>
)

export { CloudComputing }
