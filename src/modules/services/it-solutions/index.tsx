import Image from 'next/image'
import { Box, Button, Grid, Grid2, Stack, Typography } from '@mui/material'
import Title from '@/shared/title'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import { ArrowRight } from './assets'
import { ITSolutions } from './it-solutions'
import './style.scss'

const ItSolutions = () => {
  return (
    <Box className="it-solutions-section">
      <Stack className="it-solutions-container">
        <SectionTitle
          text="Future-Ready IT Solutions for Your Business Growth"
          markText="Growth"
          markTextProps={{
            rotate: 2,
          }}
        />
        <SectionDescription
          className="it-solution-subtitle"
          text="Empower your business with cutting-edge IT solutions that drive
          innovation, efficiency, and scalability. Our team delivers tailored
          strategies and state-of-the-art technology to enhance your operations."
        />
        <Grid2
          container
          rowSpacing={{ xs: '14px', sm: '28px', md: "2.083vw" }}
          columnSpacing={{ xs: '14px', sm: '28px', md: "2.083vw" }}
          sx={{
            mt: '3.645vw',
            justifyContent: 'center',
          }}
        >
          {ITSolutions.map((item) => {
            return (
              <Grid2 key={item.title}>
                <Stack direction={'row'} className="solution-card">
                  <Stack
                    sx={{ bgcolor: item.bgColor }}
                    className="solution-card-left"
                  >
                    <item.icon className="icon" />
                  </Stack>

                  <Stack className="solution-card-right">
                    <Typography className="card-title">{item.title}</Typography>
                    <Typography className="card-description">
                      {item.description}
                    </Typography>
                    <Button className="card-btn" disableRipple>
                      Read More
                      <ArrowRight style={{ width: '1.04vw' }} />
                    </Button>
                  </Stack>
                </Stack>
              </Grid2>
            )
          })}
        </Grid2>
      </Stack>
    </Box>
  )
}

export default ItSolutions
