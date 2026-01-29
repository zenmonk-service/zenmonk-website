'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Expand from '@mui/icons-material/ExpandLess'
import Popover from '@mui/material/Popover'
import ServiceCard from './service-card'
import styles from './service.module.scss'
import { services } from './services.constant'

const ExpandIcon = motion.create(Expand)

interface Props {
  anchorEl: HTMLElement | null
  handleClick: () => void
  handleClose: () => void
}

const ServiceLink = (props: Props) => {
  const { anchorEl, handleClick, handleClose } = props
  const pathname = usePathname()

  const alreadyOpen = (path: string) => pathname.includes(path)
  const open = Boolean(anchorEl)

  return (
    <>
      <button
        className={`${styles.serviceActionLink} ${
          pathname.includes('/services') ? styles.active : ''
        }`}
        onClick={handleClick}
      >
        <p>Services</p>
        <div className={styles.expandIconContainer}>
          <ExpandIcon
            className={styles.expandIcon}
            animate={{ rotate: open ? 0 : 180 }}
          />
        </div>
      </button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{
          minWidth: '600px',
        }}
        slotProps={{
          paper: {
            elevation: 0,
            style: {
              borderRadius: '0.53vw',
              boxShadow: '0.10vw 0.21vw 2.20vw rgba(19, 103, 109, 0.14)',
            },
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={styles.servicesMenuContainer}>
          <div className={styles.arrowUp} />
          {services.map((service) => (
            <ServiceCard
              key={service.route}
              isActive={alreadyOpen(service.route)}
              description={service.description}
              imageUrl={service.imageUrl}
              name={service.name}
              route={service.route}
              handleClose={handleClose}
            />
          ))}
        </div>
      </Popover>
    </>
  )
}

export default ServiceLink
