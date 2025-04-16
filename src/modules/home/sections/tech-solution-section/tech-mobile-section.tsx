import { Box, Typography } from '@mui/material'
import { Laptop2 } from '@/assets/images'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { TechSolutionSectionImage } from './image'
import './tech-mobile.section.scss'
import { TechSolution, techSolution } from '@/assets/icons/it-solution'
import TechCard from './tech-card'
import BaseButton from '@/shared/button'

const TechMobileSolutionSection = () => {
  return (
    <Box className="tech-mobile-solution-section-wrapper">
      <SectionTitle
        text="Our expertise lies in crafting business solutions"
        markText="solutions"
        align="center"
      />

      <SectionDescription
        className="text-description"
        text="Welcome to Zenmonk, where Software Innovation meets professionalism
            and solution oriented mindset. We are fluent in your language,
            proficient in technical terminology, and validate our new-age
            expertise with custom solutions"
      ></SectionDescription>
      <TechSolutionSectionImage />
      <Box className="tech-mobile-solution-section-card-wrapper">
          {techSolution.map((tech: TechSolution, index) => {
            return <TechCard key={index} Icon={tech.src} title={tech.name} />
          })}
        </Box>
        <BaseButton>EXPLORE SERVICES</BaseButton>
    </Box>
  )
}

export { TechMobileSolutionSection }
