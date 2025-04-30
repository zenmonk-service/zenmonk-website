import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Menu from '@mui/icons-material/Menu'
import { Box, createTheme, IconButton, useMediaQuery } from '@mui/material'
import { ActionLink, actionsLink } from './links'
import { navItemStyles } from './nav-item-style'
import ServiceLink from './service'
import './styles.scss'

const theme = createTheme()

const ActionLinks = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const pathname = usePathname()

  return !isSmallScreen ? (
    <Box className="action-links-wrapper">
      <Box className="action-links">
        <ServiceLink {...actionsLink[0]} />
        {actionsLink
          .slice(1, actionsLink.length - 1)
          .map(({ href, name }: ActionLink, index) => {
            return (
              <Link
                href={href}
                style={navItemStyles(pathname, href)}
                className="action-link-button"
                prefetch={false}
                key={index}
              >
                {name}
              </Link>
            )
          })}
      </Box>
    </Box>
  ) : (
    <IconButton className="action-link-menu-icon">
      <Menu fontSize="large" />
    </IconButton>
  )
}

export default ActionLinks
