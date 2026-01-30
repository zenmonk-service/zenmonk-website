import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button'
import { SectionDescription, SectionTitle } from '@/shared/typography'
import PaperPlaneImg from '../../assets/innovation/best.png'
import Earth from '../../assets/innovation/earth.svg'
import { ServiceIcons } from '../service-icons'
import './styles.scss'

const InnovationDesktop = () => {
  const router = useRouter()
  const handleContactClick = () => {
    router.push('/contact')
  }

  return (
    <div className="innovation-section-wrapper">
      <div className="innovation-section">
        <div className="text-wrapper">
          <SectionTitle
            className="innovation-title"
            text="We Deliver the Best with Innovation, Precision and Excellence."
            markText="Excellence"
            markTextProps={{ rotate: 4 }}
          />
          <SectionDescription
            text="Zenmonk delivers innovative solutions, exceeding expectations in
            every way. Our services reflect our values, combining precision and
            dedication to achieve successful outcomes."
            className="innovation-description"
          />
        </div>

        <div className="content-wrapper">
          <div className="person-sitting-on-desk" />

          <div className="more-info">
            <div className="deliver-the-best">
              <div className="deliver-the-best-text-wrapper">
                <div className="earth-icon">
                  <Earth />
                </div>
                <p className="deliver-the-best-heading">We deliver the best</p>
                <p className="deliver-the-best-description">
                  We build robust, responsive, SEO-optimized, and secure
                  websites that empower your business to grow, perform, and
                  stand out in a competitive digital landscape.
                </p>
                <Button className="contact-btn" onClick={handleContactClick}>
                  Contact us
                </Button>
              </div>
              <div className="paper-plane-img-wrapper">
                <Image src={PaperPlaneImg} alt="" className="paper-plane-img" />
              </div>
            </div>

            <div className="services-container">
              {ServiceIcons.map((item) => {
                return (
                  <div className="service-images-wrapper" key={item.title}>
                    <item.icon
                      className={item.size === 1 ? 'img-small' : 'img-large'}
                    />
                    <p
                      className="service-text"
                      style={{ maxWidth: item.maxWidth + 'vw' }}
                    >
                      {item.title}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnovationDesktop
