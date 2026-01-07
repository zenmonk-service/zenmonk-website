'use client'
import { OurPartnersList } from '@/assets/icons/collaboration'
import AutoScrollCarousel from '@/shared/auto-scroll-carousel'
import './styles.scss'
import Image from 'next/image'

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
      <AutoScrollCarousel
        isBgShadow
        data={OurPartnersList}
        sliderProps={{ className: 'infinite-slider' }}
        space={70}
        renderItem={(item) => (
          <Image
            src={item.icon}
            alt={item.label}
            width={240}
            height={120}
            loading="lazy"
            decoding="async"
          />
        )}
      />
    </>
  )
}

export default OurPartners
