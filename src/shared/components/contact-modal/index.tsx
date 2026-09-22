'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { closeContactModal } from '@/store/features/header/header-slice'
import { ContactForm } from '@/modules/about-us/components/contact-form'
import { useScrollLock } from '@/hooks/use-scroll-lock'
import styles from './contact-modal.module.scss'

export const ContactModal = () => {
  const isMobile = useMediaQuery('(max-width:768px)')
  const dispatch = useAppDispatch()
  const { isContactModalOpen, contactModalTitle } = useAppSelector((state) => state.header)

  useScrollLock(
    isContactModalOpen,
    '[class*="contactModalPaper"], [class*="MuiDialog-paper"], [class*="contactModalContent"], .country-list-scroll, [class*="MuiPopover-paper"]'
  )

  const handleClose = (_event: unknown, reason?: 'backdropClick' | 'escapeKeyDown') => {
    if (reason === 'backdropClick') {
      return
    }
    dispatch(closeContactModal())
  }

  const handleCancel = () => {
    dispatch(closeContactModal())
  }

  return (
    <Dialog
      open={isContactModalOpen}
      onClose={handleClose}
      disableScrollLock={true}
      disableRestoreFocus={true}
      disableAutoFocus={true}
      sx={{
        zIndex: 200000,
        '& .MuiDialog-container': {
          p: isMobile ? 0 : 'max(24px, 1.5vw)',
          alignItems: isMobile ? 'stretch' : 'center',
          scrollbarWidth: 'none !important',
          msOverflowStyle: 'none !important',
          '&::-webkit-scrollbar': {
            display: 'none !important',
            width: '0 !important',
            height: '0 !important',
          },
        },
      }}
      fullScreen={isMobile}
      maxWidth={false}
      fullWidth
      PaperProps={{
        className: styles.contactModalPaper,
        sx: {
          maxWidth: isMobile ? '100%' : 'max(560px, 30vw)',
          maxHeight: isMobile ? '100%' : 'calc(100vh - max(100px, 6vw))',
          borderRadius: isMobile ? 0 : 'max(16px, 0.83vw)',
          padding: isMobile ? '16px 16px 24px 16px' : 'max(24px, 1.25vw)',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          scrollbarWidth: 'none !important',
          msOverflowStyle: 'none !important',
          '&::-webkit-scrollbar': {
            display: 'none !important',
            width: '0 !important',
            height: '0 !important',
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          p: 0,
          flexShrink: 0,
          mb: isMobile ? '12px' : 'max(14px, 0.8vw)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#111827',
              fontFamily: 'Poppins',
              fontSize: isMobile ? '20px' : 'max(22px, 1.2vw)',
            }}
          >
            {contactModalTitle || 'Get In Touch'}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#727272',
              fontWeight: 400,
              fontFamily: 'Poppins',
              fontSize: isMobile ? '13px' : 'max(13px, 0.73vw)',
              mt: '4px',
            }}
          >
            Send us a message and our team will get back to you shortly.
          </Typography>
        </Box>
        <IconButton onClick={handleCancel} sx={{ color: '#6B7280', p: '4px', mt: '-4px' }}>
          <CloseIcon sx={{ fontSize: isMobile ? '24px' : 'max(24px, 1.25vw)' }} />
        </IconButton>
      </DialogTitle>

      <DialogContent
        className={styles.contactModalContent}
        sx={{
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minHeight: 0,
          overflowY: 'auto !important',
          overflowX: 'hidden !important',
          scrollbarWidth: 'none !important',
          msOverflowStyle: 'none !important',
          '&::-webkit-scrollbar': { display: 'none !important', width: 0, height: 0 },
        }}
      >
        {isContactModalOpen && <ContactForm isModal onSuccess={handleCancel} />}
      </DialogContent>
    </Dialog>
  )
}

export default ContactModal
