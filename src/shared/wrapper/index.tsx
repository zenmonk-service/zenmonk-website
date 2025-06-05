import Box from '@mui/material/Box'
import './styles.scss'

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Box className="section-wrapper">{children}</Box>
}

export default SectionWrapper
