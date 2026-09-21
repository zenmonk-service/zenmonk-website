'use client'

import React from 'react'
import { Snackbar, Alert, IconButton, useMediaQuery } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { clearBackgroundToast } from '@/store/features/applications/applications-slice'

export const GlobalApplicationToast = () => {
  const isMobile = useMediaQuery('(max-width:768px)')
  const dispatch = useAppDispatch()
  const { backgroundToast } = useAppSelector((state) => state.applications)

  const handleClose = () => {
    dispatch(clearBackgroundToast())
  }

  return (
    <Snackbar
      open={Boolean(backgroundToast)}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{ zIndex: 350000 }}
    >
      <Alert
        severity={backgroundToast?.type || 'success'}
        variant="filled"
        action={
          <IconButton
            aria-label="close"
            size="small"
            onClick={handleClose}
            sx={{
              backgroundColor: '#ffffff !important',
              color: backgroundToast?.type === 'error' ? '#DC2626 !important' : '#16A34A !important',
              width: isMobile ? '24px' : '26px',
              height: isMobile ? '24px' : '26px',
              minWidth: isMobile ? '24px' : '26px',
              minHeight: isMobile ? '24px' : '26px',
              borderRadius: '50%',
              p: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
              flexShrink: 0,
              '&:hover': {
                backgroundColor: '#ffffff !important',
                color: backgroundToast?.type === 'error' ? '#991B1B !important' : '#15803D !important',
                transform: 'scale(1.08)',
              },
            }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block' }}
            >
              <path
                d="M2 2L10 10M2 10L10 2"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>
        }
        sx={{
          width: '100%',
          maxWidth: '460px',
          fontFamily: 'Poppins, sans-serif !important',
          fontSize: isMobile ? '13px' : 'max(14px, 0.73vw)',
          fontWeight: 500,
          borderRadius: '8px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
          backgroundColor: backgroundToast?.type === 'error' ? '#DC2626 !important' : '#16A34A !important',
          color: '#ffffff !important',
          display: 'flex',
          alignItems: 'center',
          py: isMobile ? '8px' : '10px',
          px: isMobile ? '12px' : '16px',
          '& .MuiAlert-icon': {
            color: '#ffffff !important',
            alignSelf: 'center',
            p: 0,
            mr: '12px',
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiAlert-message': {
            p: 0,
            flex: 1,
            fontFamily: 'Poppins, sans-serif !important',
            lineHeight: 1.4,
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiAlert-action': {
            p: 0,
            ml: '14px',
            mr: 0,
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        {backgroundToast?.message}
      </Alert>
    </Snackbar>
  )
}

export default GlobalApplicationToast
