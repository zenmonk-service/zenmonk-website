import { Box } from '@mui/material'
import AnimatedDiv from '@/shared/animated-div'
import { ContactUsSection } from '@/shared/contact-us-section'

const page = () => {
  return (
    <Box>
      <Box
        sx={{
          height: '100px',
        }}
      ></Box>
      <AnimatedDiv>
        <ContactUsSection />
      </AnimatedDiv>
    </Box>
  )
}

export default page
