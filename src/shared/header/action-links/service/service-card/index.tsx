import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './styles.scss'

interface ServiceCardProps {
  title: string
  description: string
  imageUrl: StaticImageData
  route: string
  isAlreadyOpen: boolean
}

const ServiceCard = ({
  title,
  description,
  imageUrl,
  route,
  isAlreadyOpen,
}: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <Link
      href={`/services/${route}`}
      className={`service-card  ${isAlreadyOpen ? 'selected' : ''}`}
      prefetch={false}
      onMouseOver={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <Image
        src={imageUrl}
        style={{
          width: '1.66vw',
          height: '1.66vw',
        }}
        alt={`${title}-image`}
      />
      <div className="service-card-content">
        <h6 className="title">{title}</h6>
        <p className="description">{description}</p>
        {isVisible || isAlreadyOpen ? (
          <div className="link-button" color="inherit">
            Explore &nbsp;
            <ArrowRightAltIcon style={{ fontSize: '0.9375vw' }} />
          </div>
        ) : (
          <div className="hidden-div" />
        )}
      </div>
    </Link>
  )
}

export default ServiceCard
