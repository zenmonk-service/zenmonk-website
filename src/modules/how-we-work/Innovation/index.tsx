import Image from 'next/image'
import { Box, Stack, Typography } from '@mui/material'
import Title from '@/shared/title'
import Automated from '../assets/innovation/automated.svg'
import Sky from '../assets/innovation/best.png'
import Earth from '../assets/innovation/earth.svg'
import PersonSittingOnDesk from '../assets/innovation/img.png'
import Real from '../assets/innovation/real.svg'
import Responsive from '../assets/innovation/responsive.svg'
import Robust from '../assets/innovation/robost.svg'
import './styles.scss'

const Innovation = () => {
  return (
    <Box className="innovation-section-wrapper">
      <Stack className="innovation-section">
        <Title
          text={
            'We Deliver the Best with Innovation, Precision, and Excellence.'
          }
          className="innovation-title"
        />
        <Typography className="innovation-description">
          State burst think end are its. Arrived off she elderly beloved him
          affix ed noisier yet. Course regard to up he hardly elder noisier.
          state burst think end are its.
        </Typography>
        <Box className="images-wrapper">
          <Box className="person-sitting-on-desk">
            <Image src={PersonSittingOnDesk} alt="person sitting on desk" />
          </Box>

          <Box className="more-info">
            <Box className="deliver-the-best">
              <Box className="more-info-info-box">
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
              </Box>

              {/* <Image src={PaperPlaneImg} alt="" className="paper-plane-img" /> */}
            </Box>
            <Box className="icons-gallery">
              <Box>
                <Image
                  style={{
                    width: '64px !important',
                    height: '64px !important',
                  }}
                  src={Real}
                  alt="real-time-analytics"
                />
                <p>Real-time Analytics</p>
              </Box>

              <Box>
                <Image
                  style={{
                    width: '64px !important',
                    height: '64px !important',
                  }}
                  src={Automated}
                  alt="real-time-analytics"
                />
                <p>Automated Maintenance</p>
              </Box>

              <Box>
                <Image
                  style={{
                    width: '64px !important',
                    height: '64px !important',
                  }}
                  src={Robust}
                  alt="robust-security"
                />
                <p>Robust Security </p>
              </Box>

              <Box>
                <Image
                  style={{
                    width: '64px !important',
                    height: '64px !important',
                  }}
                  src={Responsive}
                  alt="robust-security"
                />
                <p>Responsive Design </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export { Innovation }
