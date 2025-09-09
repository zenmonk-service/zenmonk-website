import { useMediaQuery } from '@mui/material'
import TechSolutionDesktop from './desktop'
import TechSolutionMobile from './mobile'

const TechSolution = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  return isMobile ? <TechSolutionMobile /> : <TechSolutionDesktop />
}

export default TechSolution
