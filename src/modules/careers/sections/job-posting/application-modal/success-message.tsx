import { Box, Typography, useTheme, useMediaQuery, Button } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import { useState } from 'react'

const SuccessMessage = ({ jobTitle, tracking_id }: { jobTitle: string, tracking_id?: string }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [copied, setCopied] = useState(false)

  const trackingUrl = tracking_id
    ? `${window.location.origin}/track-application/${tracking_id}`
    : ''

  const handleCopyTrackingId = () => {
    if (tracking_id) {
      navigator.clipboard.writeText(tracking_id)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        py: isMobile ? '40px' : '4.17vw',
        textAlign: 'center',
        px: isMobile ? 2 : 0
      }}
    >
      <Box
        sx={{
          width: isMobile ? '60px' : '4.17vw',
          height: isMobile ? '60px' : '4.17vw',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: isMobile ? '20px' : '1.56vw',
          animation: 'scaleIn 0.5s ease-out',
          '@keyframes scaleIn': {
            '0%': { transform: 'scale(0)', opacity: 0 },
            '50%': { transform: 'scale(1.1)' },
            '100%': { transform: 'scale(1)', opacity: 1 }
          }
        }}
      >
        <svg
          width={isMobile ? '30px' : '2.08vw'}
          height={isMobile ? '30px' : '2.08vw'}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 6L9 17L4 12"
            stroke="white"
            strokeWidth={isMobile ? '2.5' : '0.3rem'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>

      <Typography
        sx={{
          fontWeight: 700,
          color: '#111827',
          mb: isMobile ? '12px' : '1.04vw',
          fontFamily: 'Poppins',
          fontSize: isMobile ? '20px' : '1.25vw'
        }}
      >
        Application Submitted!
      </Typography>

      <Typography
        sx={{
          color: '#6B7280',
          maxWidth: isMobile ? '90%' : '20.83vw',
          fontFamily: 'Poppins',
          fontSize: isMobile ? '14px' : '0.83vw',
          lineHeight: 1.5,
          mb: isMobile ? '24px' : '1.56vw'
        }}
      >
        Thank you for applying to <strong>{jobTitle}</strong>. We&apos;ll review your application and get back to you soon.
      </Typography>

      {tracking_id && (
        <>
          <Box
            sx={{
              background: '#F0FDF4',
              border: '2px solid #10B981',
              borderRadius: isMobile ? '12px' : '0.63vw',
              padding: isMobile ? '16px' : '1.04vw',
              mb: isMobile ? '16px' : '1.04vw',
              width: isMobile ? '90%' : '80%',
              maxWidth: isMobile ? '100%' : '20.83vw'
            }}
          >
            <Typography
              sx={{
                fontSize: isMobile ? '12px' : '0.63vw',
                color: '#059669',
                fontWeight: 600,
                fontFamily: 'Poppins',
                mb: isMobile ? '8px' : '0.42vw'
              }}
            >
              Your Tracking ID
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Typography
                sx={{
                  fontSize: isMobile ? '16px' : '0.94vw',
                  fontWeight: 700,
                  color: '#10B981',
                  fontFamily: 'monospace',
                  letterSpacing: '0.05em'
                }}
              >
                {tracking_id}
              </Typography>
              <Button
                onClick={handleCopyTrackingId}
                sx={{
                  minWidth: 'auto',
                  padding: isMobile ? '4px' : '0.21vw',
                  color: copied ? '#10B981' : '#6B7280',
                  '&:hover': { background: 'rgba(16, 185, 129, 0.1)' }
                }}
              >
                <ContentCopyIcon sx={{ fontSize: isMobile ? '16px' : '0.83vw' }} />
              </Button>
            </Box>
            {copied && (
              <Typography sx={{ fontSize: isMobile ? '11px' : '0.52vw', color: '#10B981', mt: '4px' }}>
                Copied!
              </Typography>
            )}
          </Box>

          <Button
            href={trackingUrl}
            variant="contained"
            startIcon={<TrackChangesIcon />}
            sx={{
              background: 'linear-gradient(135deg, #F69333 0%, #E67E22 100%)',
              color: 'white',
              padding: isMobile ? '10px 20px' : '0.52vw 1.04vw',
              fontSize: isMobile ? '14px' : '0.73vw',
              fontWeight: 600,
              fontFamily: 'Poppins',
              borderRadius: isMobile ? '8px' : '0.42vw',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(135deg, #E67E22 0%, #D35400 100%)',
              }
            }}
          >
            Track Application Status
          </Button>
        </>
      )}
    </Box>
  )
}

export default SuccessMessage
