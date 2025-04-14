import { Box, Typography } from '@mui/material'
import { TechSolution, techSolution } from '@/assets/icons/it-solution'
import { Laptop2 } from '@/assets/images'
import BaseButton from '@/shared/button'
import Title from '@/shared/title'
import { TechSolutionSectionImage } from './image'
import './styles.scss'
import TechCard from './tech-card'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { TechMobileSolutionSection } from './tech-mobile-section'

const TechSolutionSection = () => {
  return (
    <>
    <Box className="tech-solution-section-wrapper desktop">
      <Box className="tech-solution-section">
        <Box className="tech-solution-section-text-wrapper">
          <Box className="text-heading">
            <SectionTitle
            text='Our expertise lies in crafting business solutions'
            markText='solutions'
            align='left'
            />
          </Box>
          <SectionDescription className="text-description" text="Welcome to Zenmonk, where Software Innovation meets professionalism
            and solution oriented mindset. We are fluent in your language,
            proficient in technical terminology, and validate our new-age
            expertise with custom solutions">
          </SectionDescription>
        </Box>
        <Box className="tech-solution-section-card-wrapper">
          {techSolution.map((tech: TechSolution, index) => {
            return <TechCard key={index} Icon={tech.src} title={tech.name} />
          })}
        </Box>
        <Box sx={{ marginBottom: '2.135vw' }}></Box>
        <BaseButton>EXPLORE SERVICES</BaseButton>
      </Box>
      <Box className="tech-solution-section-image-wrapper">
        {Laptop2 && (
          <TechSolutionSectionImage />
        )}
      </Box>
    </Box>
    <TechMobileSolutionSection/>
    </>
  )
}

export { TechSolutionSection }
