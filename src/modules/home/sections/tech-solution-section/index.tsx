import { Box, Typography } from '@mui/material'
import { TechSolution, techSolution } from '@/assets/icons/it-solution'
import { Laptop2 } from '@/assets/images'
import BaseButton from '@/shared/button'
import Title from '@/shared/title'
import { TechSolutionSectionImage } from './image'
import './styles.scss'
import TechCard from './tech-card'

const TechSolutionSection = () => {
  return (
    <Box className="tech-solution-section-wrapper">
      <Box className="tech-solution-section">
        <Box className="tech-solution-section-text-wrapper">
          <Box className="text-heading">
            <Title
              text="Maximizing Your Business Potential With Expert IT Solutions."
              align="left"
            />
          </Box>
          <Typography component="p" className="text-description">
            Welcome in the is to Zenmonk, where Software Innovation meets
            professionalism and solution oriented mindset. We are fluent in your
            language, proficien
          </Typography>
        </Box>
        <Box className="tech-solution-section-card-wrapper">
          {techSolution.map((tech: TechSolution, index) => {
            return <TechCard key={index} icon={tech.src} title={tech.name} />
          })}
        </Box>
        <Box sx={{ marginBottom: '41px' }}></Box>
        <BaseButton>EXPLORE MORE</BaseButton>
      </Box>
      <Box className="tech-solution-section-image-wrapper">
        {Laptop2 && (
          // <Image
          //   className="tech-solution-section-image"
          //   src={Laptop2}
          //   alt="techs"
          // />
          <TechSolutionSectionImage />
        )}
      </Box>
    </Box>
  )
}

export { TechSolutionSection }
