'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Popover from '@mui/material/Popover'
import { services } from '@/static/services'
import ServiceCard from './service-card'
import styles from './service.module.scss'

const ExpandIcon = (props: any) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="18 15 12 9 6 15" />
  </motion.svg>
)

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
        <span>Services</span>
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
        disableScrollLock
        className={styles.servicesMenuPopover}
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
          {services.map((service) => (
            <ServiceCard
              key={service.route}
              isActive={alreadyOpen(service.route)}
              description={service.menuDescription}
              Icon={service.icon}
              name={service.name}
              route={service.route}
              styles={service.styles}
              handleClose={handleClose}
            />
          ))}
        </div>
      </Popover>
    </>
  )
}

export default ServiceLink
