'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
  const toggleExpand = () => setIsExpanded((prev) => !prev)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  const navigateTo = (path: string) => push(path)

  const selectOption = (path: string) => {
    navigateTo('/services/' + path)
    setIsExpanded(false)
  }

  return !isSmallScreen ? (
    <Box className="action-links-wrapper">
      <Box className="action-links">
        {actionsLink
          .slice(0, actionsLink.length - 1)
          .map(({ href, name, options }: ActionLink, index) => (
            <Button
              className="action-link-button"
              key={index}
              color="inherit"
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
          ))}
      </Box>
      {isExpanded && (
        <Box className="overlay" onClick={() => setIsExpanded(false)} />
      )}
      {isExpanded && (
        <Box className="option-menu-container">
          <Box className="arrow-up" />
          {options.map((option, index) => {
            return (
              <Box onClick={() => selectOption(option.route)}>
                <OptionCard
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
      <Menu fontSize="inherit" />
    </IconButton>
  )
}

export default ActionLinks

const Option: React.FC<OptionProps> = ({ isExpanded, onClick }) => (
  <Box onClick={onClick} className="expand-option-icon">
    {isExpanded ? (
      <ExpandMore color="inherit" />
    ) : (
      <ExpandLess color="inherit" />
    )}
  </Box>
)
