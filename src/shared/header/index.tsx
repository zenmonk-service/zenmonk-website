'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { AppBar, Toolbar, Box, useMediaQuery, createTheme } from '@mui/material'
import Monk from '@/assets/icons/monk.svg'
import BaseButton from '@/shared/button'
import ActionLinks from './action-links'
import { actionsLink } from './action-links/links'
import './styles.scss'

const MotionLogo = motion(Monk)
const Navbar = () => {
  const theme = createTheme()
  const { push } = useRouter()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const navigateToHome = () => push('/')
  const navigateToContact = () => push('/contact')
  return (
    <AppBar className="app-bar-container" elevation={0}>
      <Toolbar className="toolbar">
        <Box display="flex" alignItems="center">
          <MotionLogo
            layoutId="logo"
            className="logo"
            onClick={navigateToHome}
          />
        </Box>
        <ActionLinks />
        {!isSmallScreen && (
          <BaseButton onClick={navigateToContact} className="contact-button">
            {actionsLink[actionsLink.length - 1].name}
          </BaseButton>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
