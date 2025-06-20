'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AppBar, Toolbar, Box, useMediaQuery, createTheme } from '@mui/material'
import Monk from '@/assets/icons/monk.svg'
import { useAppSelector } from '@/store/hooks'
import LoadingIndicator from '../loader/detector'
import ActionLinks from './action-links'
import { actionsLink } from './action-links/links'
import './styles.scss'

const Motion = motion.create(Monk)
const Navbar = () => {
  const theme = createTheme()
  const { push } = useRouter()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const navigateToHome = () => push('/')
  const hide = useAppSelector((state) => state.header.hide)

  return (
    <AppBar className={clsx('app-bar-container', { hide })} elevation={0}>
      <Toolbar className="toolbar">
        <Box display="flex" alignItems="center">
          <Motion layoutId="logo" className="logo" onClick={navigateToHome} />
        </Box>
        <ActionLinks />
        {!isSmallScreen && (
          <Link href={'/contact'} className="contact-button">
            <LoadingIndicator />
            {actionsLink[actionsLink.length - 1].name}
          </Link>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
