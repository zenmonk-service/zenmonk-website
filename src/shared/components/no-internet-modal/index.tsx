'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import WifiOffIcon from '@mui/icons-material/WifiOff'

interface NoInternetModalProps {
  open: boolean
  onClose: () => void
}

export const NoInternetModal = ({ open, onClose }: NoInternetModalProps) => {
  const isMobile = useMediaQuery('(max-width:768px)')

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: isMobile ? '90%' : 'max(400px, 20.83vw)',
          borderRadius: isMobile ? '12px' : 'max(16px, 0.83vw)',
          p: isMobile ? '24px 20px 28px' : 'max(28px, 1.45vw) max(24px, 1.25vw) max(32px, 1.66vw)',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
          background: '#ffffff',
          position: 'relative'
        }
      }}
    >
      <IconButton
        onClick={onClose}
        size="small"
        aria-label="Close"
        sx={{
          position: 'absolute',
          top: isMobile ? '12px' : 'max(14px, 0.73vw)',
          right: isMobile ? '12px' : 'max(14px, 0.73vw)',
          color: '#9CA3AF',
          '&:hover': { color: '#4B5563', backgroundColor: 'rgba(0,0,0,0.04)' }
        }}
      >
        <CloseIcon sx={{ fontSize: isMobile ? '20px' : 'max(20px, 1.04vw)' }} />
      </IconButton>

      <DialogContent sx={{ p: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            width: isMobile ? '64px' : 'max(72px, 3.75vw)',
            height: isMobile ? '64px' : 'max(72px, 3.75vw)',
            borderRadius: '50%',
            backgroundColor: '#FFF5EB',
            border: '1px solid #FED7AA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: isMobile ? '16px' : 'max(20px, 1.04vw)',
            color: '#EB7C0D'
          }}
        >
          <WifiOffIcon sx={{ fontSize: isMobile ? '32px' : 'max(36px, 1.875vw)' }} />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: isMobile ? '18px' : 'max(20px, 1.04vw)',
            color: '#111827',
            mb: isMobile ? '8px' : 'max(10px, 0.52vw)',
            lineHeight: 1.3
          }}
        >
          Check Your Internet Connection
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: isMobile ? '13px' : 'max(14px, 0.73vw)',
            color: '#6B7280',
            lineHeight: 1.5,
            px: 1
          }}
        >
          It looks like you are offline or your connection was lost. Please check your internet connection and try again.
        </Typography>
      </DialogContent>
    </Dialog>
  )
}

export default NoInternetModal
