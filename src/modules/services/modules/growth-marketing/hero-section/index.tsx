import { Box } from '@mui/material'
import { HeroSection } from '@/shared/hero-section'
import SectionWrapper from '@/shared/wrapper'
import { Hero as HeroImg } from '../assets'
import BackgroundImage from '../assets/hero-background.png'

const GrowthMarketing: React.FC = () => (
  <Box
  sx={{
    backgroundImage: `url(${BackgroundImage.src})`,
    backgroundSize: 'contain',
  }}
  >
    <HeroSection
      title="Growth & Marketing<br/> That Drives Real Results"
      highlightedText="Growth & Marketing"
      description="We believe in ZenFusion, merging technology with mindfulness. As your partners in technological excellence, we transform values into action, simplifying tech to deliver user-centered solutions."
      image={HeroImg.src}
    />
  </Box>
)

export { GrowthMarketing }
