import Image from 'next/image'
import { Box } from '@mui/material'
import Title from '@/shared/title'
import Sky from '../assets/innovation/best.png'
import Earth from '../assets/innovation/earth.svg'
import PersonSittingOnDesk from '../assets/innovation/img.png'
import Real from '../assets/innovation/real.svg'
import Automated from '../assets/innovation/automated.svg'
import Robust from '../assets/innovation/robost.svg'
import Responsive from '../assets/innovation/responsive.svg';

import './styles.scss'

const Innovation = () => {
  return (
    <Box className="innovation-section-wrapper">
      <Box className="innovation-section">
        <Title
          text={
            'We Deliver the Best with Innovation, Precision, and Excellence.'
          }
        ></Title>
        <p className="innovation-description">
          State burst think end are its. Arrived off she elderly beloved him
          affix ed noisier yet. Course regard to up he hardly elder noisier.
          state burst think end are its.
        </p>
        <Box className="images-wrapper">
          <Box className="person-sitting-on-desk">
            <Image src={PersonSittingOnDesk} alt="person sitting on desk" />
          </Box>

          <Box className="more-info">
            <Box className="deliver-the-best">
              <Box className="more-info-info-box">
                <Box>
                  <Image
                    style={{
                      width: '48px !important',
                      height: '48px !important',
                    }}
                    src={Earth}
                    alt="earth"
                  ></Image>
                </Box>
                <p className="more-info-info-box-heading">
                  We deliver the best
                </p>
                <p className="more-info-info-box-sub-heading">
                  Lorem Ipsum is simply dummy text the printing and typese Lorem
                  Ipsum has been the industry's standard dummy
                </p>
                <button className="contact-btn">Contact us</button>
              </Box>

              {/* <Box className="more-info-img-box">
                <Image src={Sky} alt="person sitting on desk" />
              </Box> */}
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
                <p>Responsive  Design </p>
              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export { Innovation }
