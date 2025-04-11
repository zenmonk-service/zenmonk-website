import { Box } from '@mui/material'
import { HeroSection } from '@/shared/hero-section'
import { Hero as HeroImg } from '../assets'
import BackgroundImage from '../assets/hero-bg.png'

const SoftwareDevelopment: React.FC = () => (
  <Box
    sx={{
      backgroundImage: `url(${BackgroundImage.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <HeroSection
      title="Reliable & Scalable <br/>Software Development"
      highlightedText="Software Development"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      image={HeroImg.src}
    />
  </Box>
)

export { SoftwareDevelopment }
