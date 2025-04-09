import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import Title from '@/shared/title'
import { Excellence } from './assets'
import ExcellenceCard from './card/excellence'
import { innovations } from './innovations'
import './styles.scss'

const InnovationExcellence = () => {
  return (
    <Box className="innovation-excellence-section">
      <Box className="left-section">
        <Title
          align="left"
          text="Our Promise of Innovation and Excellence"
          className="title"
        />
        <Typography component="p" className="description">
          We are dedicated to fostering a supportive environment, offering
          growth opportunities, and ensuring our team feel valued and
          appreciated.
        </Typography>
        <Image
          alt="excellence-image"
          src={Excellence}
          className="excellence-image"
        />
      </Box>
      <Box className="right-section">
        {innovations.map((innovation, index) => {
          return (
            <ExcellenceCard key={index} details={innovation}></ExcellenceCard>
          )
        })}
      </Box>
    </Box>
  )
}

export default InnovationExcellence
