'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  AppBar,
  Toolbar,
  Box,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  createTheme,
} from '@mui/material'
import { Monk } from '@/assets/icons'
import BaseButton from '@/shared/button'
import ActionLinks from './action-links'
import { actionsLink } from './action-links/links'
import './styles.scss'

interface Props {
  window?: () => Window
  children?: React.ReactElement<unknown>
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  )
}
const Navbar = (props: Props) => {
  const theme = createTheme()
  const { push } = useRouter()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const navigateToHome = () => push('/')
  const navigateToContact = () => push('/contact')
  return (
    <HideOnScroll {...props}>
      <AppBar className="app-bar-container" elevation={0}>
        <Toolbar className="toolbar">
          <Box display="flex" alignItems="center">
            {Monk && (
              <Image
                src={Monk}
                alt="Logo"
                width={71}
                height={71}
                className="logo"
                onClick={navigateToHome}
              />
            )}
          </Box>
          <ActionLinks />
          {!isSmallScreen && (
            <BaseButton onClick={navigateToContact}>
              {actionsLink[actionsLink.length - 1].name}
            </BaseButton>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navbar
