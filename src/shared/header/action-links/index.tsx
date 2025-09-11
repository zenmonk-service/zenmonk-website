import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createTheme, useMediaQuery } from '@mui/material'
import LoadingIndicator from '@/shared/loader/detector'
import { MenuToggle } from '@/shared/sidebar/menu-toggle'
import { ActionLink, actionsLink } from './links'
import { navItemStyles } from './nav-item-style'
import ServiceLink from './service'
import './styles.scss'
import Navigation from '@/shared/sidebar/menu'

const theme = createTheme()

interface ActionLinksProp {
  isOpen: boolean
  toggle: () => void
}
const ActionLinks = ({ isOpen, toggle }: ActionLinksProp) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const pathname = usePathname()

  return !isSmallScreen ? (
    <div className="action-links-wrapper">
      <div className="action-links">
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
                <LoadingIndicator />
                {name}
              </Link>
            )
          })}
      </div>
    </div>
  ) : (
    <>
      <AnimatePresence>{isOpen && <Navigation />}</AnimatePresence>
      <div
        style={{
          clipPath: `inset(calc(100% - 38px) 27px 10px calc(100% - 54px) round 4px)`,
          background: 'var(--global-color-gradient)',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '100%',
        }}
      />
      <MenuToggle toggle={toggle} />
    </>
  )
}

export default ActionLinks
