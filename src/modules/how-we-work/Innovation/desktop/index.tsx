import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import PaperPlaneImg from '../../assets/innovation/best.png'
import Earth from '../../assets/innovation/earth.svg'
import PersonSittingOnDesk from '../../assets/innovation/img.png'
import { ServiceIcons } from '../service-icons'
import './styles.scss'

const InnovationDesktop = () => {
  const router = useRouter()
  const handleContactClick = () => {
    router.push('/contact')
  }

  return (
    <Stack className="innovation-section-wrapper">
      <Stack className="innovation-section">
        <Stack className="text-wrapper">
          <SectionTitle
            className="innovation-title"
            text={
              'We Deliver the Best with Innovation, Precision and Excellence.'
            }
            markText="Excellence"
            markTextProps={{ rotate: 4 }}
          />
          <SectionDescription
            text="Zenmonk delivers innovative solutions, exceeding expectations in
            every way. Our services reflect our values, combining precision and
            dedication to achieve successful outcomes."
            className="innovation-description"
          />
        </Stack>

        <Stack className="content-wrapper">
          <div className="person-sitting-on-desk">
            <Image src={PersonSittingOnDesk} alt="person sitting on desk" />
          </div>

          <Stack className="more-info">
            <Stack className="deliver-the-best">
              <Stack className="deliver-the-best-text-wrapper">
                <div className="earth-icon">
                  <Earth />
                </div>
                <p className="deliver-the-best-heading">We deliver the best</p>
                <p className="deliver-the-best-description">
                  We make robust, responsive, SEO friendly and Secure Websites
                  that will take your business to next level.
                </p>
                <Button className="contact-btn" onClick={handleContactClick}>
                  Contact us
                </Button>
              </Stack>
              <div className="paper-plane-img-wrapper">
                <Image src={PaperPlaneImg} alt="" className="paper-plane-img" />
              </div>
            </Stack>

            <Stack className="services-container">
              {ServiceIcons.map((item) => {
                return (
                  <Stack className="service-images-wrapper" key={item.title}>
                    <item.icon
                      className={item.size === 1 ? 'img-small' : 'img-large'}
                    />
                    <p
                      className="service-text"
                      style={{
                        maxWidth: item.maxWidth + 'vw',
                      }}
                    >
                      {item.title}
                    </p>
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

export default InnovationDesktop
