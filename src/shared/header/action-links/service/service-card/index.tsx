import { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import LoadingIndicator from '@/shared/loader/detector'
import { useAppSelector } from '@/store/hooks'
import styles from './service.module.scss'

interface ServiceCardProps {
  name: string
  description: string
  imageUrl: StaticImageData
  route: string
  isActive: boolean
  handleClose: () => void
}

const ServiceCard = ({
  name,
  description,
  imageUrl,
  route,
  isActive,
  handleClose,
}: ServiceCardProps) => {

  const isPageLoading = useAppSelector((state) => state.header.isLoading)
  const [click, setClick] = useState(false);

  console.log('isPageLoading: ', isPageLoading);
  useEffect(() => {
    if (!isPageLoading && click) {
      handleClose()
    }
  }, [isPageLoading, click, handleClose])

  return (
    <Link
      href={`/services/${route}`}
      className={`${styles.serviceCard}  ${isActive ? styles.selected : ''}`}
      prefetch={false}
      onClick={(e) => {
        if (isActive) {
          e.preventDefault()
          return
        }
        setClick(true)
      }}
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
