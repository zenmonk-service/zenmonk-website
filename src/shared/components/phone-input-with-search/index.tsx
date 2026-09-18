'use client'

import React, { useState, useRef, useEffect } from 'react'
import {
  usePhoneInput,
  defaultCountries,
  parseCountry,
  FlagImage,
} from 'react-international-phone'
import 'react-international-phone/style.css'
import { Popover, Box, InputBase, Typography, MenuItem, ClickAwayListener } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useScrollLock } from '@/hooks/use-scroll-lock'

interface PhoneInputWithSearchProps {
  value: string
  onChange: (phone: string) => void
  error?: boolean
  defaultCountry?: string
  placeholder?: string
  height?: string
  fontSize?: string
  borderRadius?: string
  backgroundColor?: string
  endAdornment?: React.ReactNode
}

export const PhoneInputWithSearch: React.FC<PhoneInputWithSearchProps> = ({
  value,
  onChange,
  error = false,
  defaultCountry = 'in',
  placeholder = 'Phone number',
  height = '48px',
  fontSize = '14px',
  borderRadius = '8px',
  backgroundColor = '#ffffff',
  endAdornment,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const { inputValue, handlePhoneValueChange, country, setCountry, inputRef } = usePhoneInput({
    defaultCountry,
    value,
    disableDialCodeAndPrefix: true,
    onChange: (data) => {
      onChange(data.phone)
    },
  })

  const allCountries = defaultCountries.map(parseCountry)

  const filteredCountries = allCountries.filter((c) => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return true
    const cleanQuery = query.replace(/^\+/, '')
    if (!cleanQuery) return true

    return (
      c.name.toLowerCase().includes(query) ||
      c.name.toLowerCase().includes(cleanQuery) ||
      c.dialCode.includes(cleanQuery) ||
      `+${c.dialCode}`.includes(query) ||
      c.iso2.toLowerCase().includes(query) ||
      c.iso2.toLowerCase().includes(cleanQuery)
    )
  })

  const handleCloseDropdown = () => {
    setIsOpen(false)
    setSearchQuery('')
  }

  const handleToggleDropdown = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    if (isOpen) {
      handleCloseDropdown()
    } else {
      setAnchorEl(event.currentTarget)
      setIsOpen(true)
      setSearchQuery('')
    }
  }

  const handleSelectCountry = (iso2: string) => {
    setCountry(iso2)
    handleCloseDropdown()
  }

  const isDropdownOpen = isOpen
  useScrollLock(isDropdownOpen, '.country-list-scroll, [class*="MuiPopover-paper"]')

  useEffect(() => {
    if (!isDropdownOpen) return

    const handlePointerDown = (event: PointerEvent | MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const isInsideButton = buttonRef.current && buttonRef.current.contains(target)
      const isInsidePopover =
        target.closest?.('.country-dropdown-popover') ||
        target.closest?.('.country-list-scroll') ||
        target.closest?.('[class*="MuiPopover-paper"]')

      if (isInsideButton || isInsidePopover) {
        return
      }

      handleCloseDropdown()
    }

    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.classList?.contains('country-list-scroll') ||
          target.closest?.('.country-list-scroll'))
      ) {
        return
      }
      handleCloseDropdown()
    }

    document.addEventListener('pointerdown', handlePointerDown, true)
    document.addEventListener('mousedown', handlePointerDown, true)
    document.addEventListener('touchstart', handlePointerDown, true)
    window.addEventListener('scroll', handleScroll, true)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true)
      document.removeEventListener('mousedown', handlePointerDown, true)
      document.removeEventListener('touchstart', handlePointerDown, true)
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [isDropdownOpen])

  const selectedCountryData = allCountries.find((c) => c.iso2 === country.iso2) || country

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
        height,
        bgcolor: backgroundColor,
        border: `1px solid ${error ? '#d32f2f' : '#E5E7EB'}`,
        borderRadius,
        boxSizing: 'border-box',
        position: 'relative',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          borderColor: error ? '#d32f2f' : '#F69333',
        },
        '&:focus-within': {
          borderColor: error ? '#d32f2f' : '#F69333',
        },
      }}
    >
      {/* Country Selector Button */}
      <Box
        ref={buttonRef}
        component="button"
        type="button"
        onClick={handleToggleDropdown}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          height: '100%',
          px: '12px',
          bgcolor: 'transparent',
          border: 'none',
          borderRight: `1px solid ${error ? '#d32f2f' : '#E5E7EB'}`,
          borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
          cursor: 'pointer',
          outline: 'none',
          boxSizing: 'border-box',
          flexShrink: 0,
          transition: 'background-color 0.2s ease',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.02)',
          },
        }}
      >
        <FlagImage iso2={country.iso2} style={{ width: '22px', height: '15px' }} />
        <Typography
          sx={{
            fontSize,
            fontFamily: 'Poppins, sans-serif',
            color: '#111827',
            fontWeight: 500,
          }}
        >
          +{selectedCountryData.dialCode}
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            fontSize: '18px',
            color: '#6B7280',
            transition: 'transform 0.2s',
            transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </Box>

      {/* Phone Number Input Field */}
      <input
        ref={inputRef}
        type="tel"
        placeholder={placeholder}
        value={inputValue}
        onChange={handlePhoneValueChange}
        style={{
          flex: 1,
          width: '100%',
          minWidth: 0,
          height: '100%',
          paddingLeft: '14px',
          paddingRight: endAdornment ? '6px' : '14px',
          fontSize,
          fontFamily: 'Poppins, sans-serif',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: endAdornment ? '0' : `0 ${borderRadius} ${borderRadius} 0`,
          outline: 'none',
          color: '#111827',
          boxSizing: 'border-box',
        }}
      />

      {endAdornment && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pr: 'max(12px, 0.63vw)',
            flexShrink: 0,
            pointerEvents: 'none',
          }}
        >
          {endAdornment}
        </Box>
      )}

      {/* Country Search Dropdown Popover */}
      <Popover
        open={isDropdownOpen}
        anchorEl={anchorEl}
        onClose={handleCloseDropdown}
        disableScrollLock={true}
        transitionDuration={0}
        TransitionProps={{ timeout: 0 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            className: 'country-dropdown-popover',
            sx: {
              width: '320px',
              maxHeight: '350px',
              mt: '4px',
              borderRadius: '8px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            },
          },
        }}
      >
        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={(event) => {
            const target = event.target as HTMLElement | null
            if (target && buttonRef.current && buttonRef.current.contains(target)) {
              return
            }
            handleCloseDropdown()
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
            {/* Search Input Bar Header */}
            <Box
              sx={{
                p: '8px 12px',
                borderBottom: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                bgcolor: '#F9FAFB',
                flexShrink: 0,
              }}
            >
              <SearchIcon sx={{ color: '#9CA3AF', fontSize: '20px' }} />
              <InputBase
                inputRef={searchInputRef}
                placeholder="Search country or code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
                sx={{
                  fontSize: '14px',
                  fontFamily: 'Poppins, sans-serif',
                  color: '#111827',
                }}
              />
            </Box>

            {/* Scrollable Country List */}
            <Box
              className="country-list-scroll"
              sx={{
                flex: 1,
                overflowY: 'auto',
                py: '4px',
                scrollbarWidth: 'thin',
                scrollbarColor: '#F69333 #F1F1F1',
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#F1F1F1',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#F69333',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: '#E67E22',
                },
              }}
            >
              {filteredCountries.length === 0 ? (
                <Typography
                  sx={{
                    p: '12px',
                    fontSize: '13px',
                    color: '#6B7280',
                    textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  No country found
                </Typography>
              ) : (
                filteredCountries.map((c) => {
                  const isSelected = c.iso2 === country.iso2
                  return (
                    <MenuItem
                      key={`${c.iso2}-${c.dialCode}`}
                      onClick={() => handleSelectCountry(c.iso2)}
                      selected={isSelected}
                      sx={{
                        py: '8px',
                        px: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        fontFamily: 'Poppins, sans-serif',
                        bgcolor: isSelected ? '#FFF7ED !important' : 'transparent',
                        '&:hover': {
                          bgcolor: '#F3F4F6',
                        },
                      }}
                    >
                      <FlagImage iso2={c.iso2} style={{ width: '22px', height: '15px', flexShrink: 0 }} />
                      <Typography
                        sx={{
                          flex: 1,
                          fontSize: '13px',
                          fontFamily: 'Poppins, sans-serif',
                          color: '#111827',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {c.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '13px',
                          fontFamily: 'Poppins, sans-serif',
                          color: '#6B7280',
                          fontWeight: 500,
                        }}
                      >
                        +{c.dialCode}
                      </Typography>
                    </MenuItem>
                  )
                })
              )}
            </Box>
          </Box>
        </ClickAwayListener>
      </Popover>
    </Box>
  )
}
