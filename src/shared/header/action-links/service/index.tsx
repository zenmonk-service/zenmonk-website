import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Expand from '@mui/icons-material/ExpandLess'
import { Box } from '@mui/material'
import LoadingIndicator from '@/shared/loading-indicator'
import { ActionLink } from '../links'
import { navItemStyles } from '../nav-item-style'
import ServiceCard from './service-card'
import { services } from './services.constant'

const ServiceLink = ({ name, href }: ActionLink) => {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded((prev) => !prev)
  const alreadyOpen = (path: string) => pathname.includes(path)

  return (
    <>
      <Box
        sx={navItemStyles(pathname, href)}
        className="action-link-button"
        onClick={() => toggleExpand()}
      >
        {name}
        <LoadingIndicator />
        <Box className="expand-option-icon">
          <Expand
            color="inherit"
            className="icon"
            style={{
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </Box>
      </Box>

      {isExpanded && (
        <>
          <Box className="overlay" onClick={() => setIsExpanded(false)} />
          <Box className="service-menu-container">
            <Box className="arrow-up" />
            {services.map((service) => {
              return (
                <ServiceCard
                  isAlreadyOpen={alreadyOpen(service.route)}
                  key={service.route}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  title={service.label}
                  route={service.route}
                />
              )
            })}
          </Box>
        </>
      )}
    </>
  )
}

export default ServiceLink
