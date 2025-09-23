import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import LoadingIndicator from '@/shared/loader/detector'
import styles from './service.module.scss'

interface ServiceCardProps {
  name: string
  description: string
  imageUrl: StaticImageData
  route: string
  isActive: boolean
}

const ServiceCard = ({
  name,
  description,
  imageUrl,
  route,
  isActive,
}: ServiceCardProps) => {
  return (
    <Link
      href={`/services/${route}`}
      className={`${styles.serviceCard}  ${isActive ? styles.selected : ''}`}
      prefetch={false}
    >
      <LoadingIndicator />
      <Image
        src={imageUrl}
        style={{
          width: '1.66vw',
          height: '1.66vw',
        }}
        alt={`${name}-image`}
      />
      <div className={styles.serviceCardContent}>
        <h6 className={styles.serviceCardContentTitle}>{name}</h6>
        <p className={styles.serviceCardContentDescription}>{description}</p>
      </div>
    </Link>
  )
}

export default ServiceCard
