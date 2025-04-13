'use client'

import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ExpandMore, ExpandLess, Menu } from '@mui/icons-material'
import {
  Box,
  Button,
  createTheme,
  IconButton,
  useMediaQuery,
} from '@mui/material'
import { options } from '../options'
import OptionCard from '../options/card'
import { ActionLink, actionsLink } from './links'
import './styles.scss'

interface OptionProps {
  id: string
  isExpanded: boolean
  onClick: () => void
}

const theme = createTheme()
const ActionLinks = () => {
  const { push } = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()
  const toggleExpand = () => setIsExpanded((prev) => !prev)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const navigateTo = (path: string) => push(path)
  const selectOption = (path: string) => {
    if (alreadyOpen(path)) {
      return
    }
    navigateTo('/services/' + path)
    setIsExpanded(false)
  }

  const alreadyOpen = (path: string) => pathname.includes(path)

  return !isSmallScreen ? (
    <Box className="action-links-wrapper">
      <Box className="action-links">
        {actionsLink
          .slice(0, actionsLink.length - 1)
          .map(({ href, name, options }: ActionLink, index) => {
            return (
              <Button
                sx={{
                  background: pathname.includes(href)
                    ? 'linear-gradient(75deg, #EB7C0D 4.02%, #FFA750 83.84%)'
                    : '',
                  color: pathname.includes(href)
                    ? '#fff'
                    : name === 'Services'
                      ? '#000'
                      : '#393939',
                  '&:hover': {
                    background: pathname.includes(href) ? '' : '#ffd5ac38',
                  },
                }}
                className="action-link-button"
                key={index}
                disableRipple
                onClick={() => {
                  options ? toggleExpand() : navigateTo(href)
                }}
              >
                {name}
                {options && (
                  <Option
                    id={href}
                    isExpanded={isExpanded}
                    onClick={toggleExpand}
                  />
                )}
              </Button>
            )
          })}
      </Box>
      {isExpanded && (
        <Box className="overlay" onClick={() => setIsExpanded(false)} />
      )}
      {isExpanded && (
        <Box className="option-menu-container">
          <Box className="arrow-up" />
          {options.map((option, index) => {
            return (
              <Box onClick={() => selectOption(option.route)} key={index}>
                <OptionCard
                  isAlreadyOpen={alreadyOpen(option.route)}
                  description={option.description}
                  imageUrl={option.imageUrl}
                  title={option.label}
                  route={option.route}
                />
              </Box>
            )
          })}
        </Box>
      )}
    </Box>
  ) : (
    <IconButton className="action-link-menu-icon">
      <Menu fontSize="large" />
    </IconButton>
  )
}

export default ActionLinks

const Option: React.FC<OptionProps> = ({ isExpanded }) => (
  <Box className="expand-option-icon">
    {isExpanded ? (
      <ExpandLess
        color="inherit"
        style={{ width: '1.04vw', height: '1.04vw' }}
      />
    ) : (
      <ExpandMore
        color="inherit"
        style={{ width: '1.04vw', height: '1.04vw' }}
      />
    )}
  </Box>
)
