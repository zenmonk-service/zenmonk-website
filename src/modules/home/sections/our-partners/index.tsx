import { OurPartnersList } from '@/assets/icons/collaboration'
import AutoScrollCarousel from '@/shared/auto-scroll-carousel'
import './styles.scss'

const OurPartners = () => {
  return (
    <>
      <div className="heading-container">
        <p className="text">
          Fueling partners success that&nbsp;
          <span>adapt</span>, <span>evolve</span>, and&nbsp;
          <span>excels</span>.
        </p>
      </div>
      <AutoScrollCarousel data={OurPartnersList} />
    </>
  )
}

export default OurPartners
