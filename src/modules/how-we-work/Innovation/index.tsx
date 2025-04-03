import Image from 'next/image'
import { Box, Stack, Typography } from '@mui/material'
import Title from '@/shared/title'
import PaperPlaneImg from '../assets/innovation/best.png'
import Earth from '../assets/innovation/earth.svg'
import PersonSittingOnDesk from '../assets/innovation/img.png'
import { ServiceIcons } from './service-icons'
import './styles.scss'

const Innovation = () => {
  return (
    <Stack className="innovation-section-wrapper">
      <Stack className="innovation-section">
        <Stack className="text-wrapper">
          <Title
            className="innovation-title"
            text={
              'We Deliver the Best with Innovation, Precision, and Excellence.'
            }
          />
          <Typography className="innovation-description">
            State burst think end are its. Arrived off she elderly beloved him
            affix ed noisier yet. Course regard to up he hardly elder noisier.
            state burst think end are its.
          </Typography>
        </Stack>

        <Stack className="content-wrapper">
          <Box className="person-sitting-on-desk">
            <Image src={PersonSittingOnDesk} alt="person sitting on desk" />
          </Box>

          <Stack className="more-info">
            <Stack className="deliver-the-best">
              <Stack className="deliver-the-best-text-wrapper">
                <Box className="earth-icon">
                  <Image src={Earth} alt="earth" />
                </Box>
                <Typography className="deliver-the-best-heading">
                  We deliver the best
                </Typography>
                <Typography className="deliver-the-best-description">
                  Lorem Ipsum is simply dummy text the printing and typese Lorem
                  Ipsum has been the industry's standard dummy
                </Typography>
                <button className="contact-btn">Contact us</button>
              </Stack>
              <Box className="paper-plane-img-wrapper">
                <Image src={PaperPlaneImg} alt="" className="paper-plane-img" />
              </Box>
            </Stack>

            <Stack className="services-container">
              {ServiceIcons.map((item) => {
                return (
                  <Stack className="service-images-wrapper" key={item.title}>
                    <Image width={54} height={60} src={item.icon} alt="" />
                    <Typography
                      className="service-text"
                      maxWidth={item.maxWidth}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                )
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export { Innovation }
