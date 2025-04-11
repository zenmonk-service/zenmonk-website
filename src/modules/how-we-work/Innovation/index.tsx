import Image from 'next/image'
import { Box, Button, Stack, Typography } from '@mui/material'
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
            Zenmonk delivers innovative solutions, exceeding expectations in
            every way. Our services reflect our values, combining precision and
            dedication to achieve successful outcomes.
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
                  <Earth />
                </Box>
                <Typography className="deliver-the-best-heading">
                  We deliver the best
                </Typography>
                <Typography className="deliver-the-best-description">
                  We make robust, responsive, SEO friendly and Secure Websites
                  that will take your business to next level. Lorem Ipsum
                </Typography>
                <Button className="contact-btn">Contact us</Button>
              </Stack>
              <Box className="paper-plane-img-wrapper">
                <Image src={PaperPlaneImg} alt="" className="paper-plane-img" />
              </Box>
            </Stack>

            <Stack className="services-container">
              {ServiceIcons.map((item) => {
                return (
                  <Stack className="service-images-wrapper" key={item.title}>
                    <item.icon
                      className={item.size === 1 ? 'img-small' : 'img-large'}
                    />
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
