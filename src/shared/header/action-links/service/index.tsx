'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Expand from '@mui/icons-material/ExpandLess'
import Popover from '@mui/material/Popover'
import { services } from '@/static/services'
import ServiceCard from './service-card'
import styles from './service.module.scss'

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
