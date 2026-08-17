'use client'
import { OurPartnersList } from '@/assets/icons/collaboration'
import AutoScrollCarousel from '@/shared/auto-scroll-carousel'
import Image from 'next/image'
import './styles.scss'

const OurPartners = () => {
  return (
    <>
      <div className="heading-container">
        <p className="text">
          Fuelling client success that&nbsp;
          <span>adapts</span>, <span>evolves</span>, and&nbsp;
          <span>excels</span>.
        </p>
      </div>
      <AutoScrollCarousel
        data={OurPartnersList}
        sliderProps={{ className: 'infinite-slider' }}
        itemWidth={240}
        space={24}
        duration={50}
        renderItem={(item) => (
          <div className="partner-logo-wrapper">
            <Image
              src={item.icon as string}
              alt={item.label}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              loading="lazy"
              decoding="async"
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}
      />
    </>
  )
}

export default OurPartners
