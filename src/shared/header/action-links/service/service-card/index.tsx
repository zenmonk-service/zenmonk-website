import Link from 'next/link'
import LoadingIndicator from '@/shared/loader/detector'
import { toggleLoader } from '@/store/features/header/header-slice'
import { useAppDispatch } from '@/store/hooks'
import styles from './service.module.scss'

interface ServiceCardProps {
  name: string
  description: string
  Icon: any
  route: string
  isActive: boolean
  handleClose: () => void
  styles?: { [key: string]: string }
}

const ServiceCard = ({
  name,
  description,
  Icon,
  route,
  isActive,
  handleClose,
  styles: serviceStyles,
}: ServiceCardProps) => {
  const dispatch = useAppDispatch()

  return (
    <Link
      href={`/services${route}`}
      className={`${styles.serviceCard}  ${isActive ? styles.selected : ''}`}
      prefetch={true}
      onClick={(e) => {
        if (isActive) {
          e.preventDefault()
          return
        }
        dispatch(toggleLoader(true))
        handleClose()
      }}
    >
      <LoadingIndicator />
      <div
        style={{ background: serviceStyles?.hoverColor }}
        className={styles.serviceCardIcon}
      >
        <Icon style={{ fill: serviceStyles?.color }} />
      </div>
      <div className={styles.serviceCardContent}>
        <h6 className={styles.serviceCardContentTitle}>{name}</h6>
        <p className={styles.serviceCardContentDescription}>{description}</p>
      </div>
    </Link>
  )
}

export default ServiceCard
