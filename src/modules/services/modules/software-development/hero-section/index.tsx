import Box from '@mui/material/Box'
import { HeroSection } from '@/shared/hero-section'
import { Hero as HeroImg } from '../assets'
import BackgroundImage from '../assets/hero-bg.png'
import "./styles.scss"

const SoftwareDevelopment: React.FC = () => (
  <Box
  className="container"
    sx={{
      backgroundImage: `url(${BackgroundImage.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <HeroSection
      title="Reliable & Scalable <br/>Software Development"
      highlightedText="Software Development"
      description="Zenmonk excels in custom enterprise software development, 
      delivering scalable and secure solutions. We provide end-to-end support
      from legacy modernization to deployment, ensuring optimal software performance tailored to your business needs."
      image={HeroImg.src}
    />
  </Box>
)

export { SoftwareDevelopment }
