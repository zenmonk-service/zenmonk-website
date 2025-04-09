import Image from 'next/image'
import { Box } from '@mui/material'
import { Process as ProcessImg } from '@/modules/how-we-work/assets'
import './styles.scss'

const Process = () => {
  return (
    <Box className="process-hero-section-wrapper">
      <Image src={ProcessImg} alt="process-diagram" className="process-img" />
    </Box>
  )
}

export { Process }
