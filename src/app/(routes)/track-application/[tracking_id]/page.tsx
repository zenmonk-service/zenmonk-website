'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

interface ApplicationData {
  tracking_id: string
  status: string
  name: string
  email: string
  job_posting: {
    role: string
    category: string
  }
  createdAt: string
  updatedAt: string
}

const statusSteps = [
  { label: 'Application Submitted', status: 'submitted' },
  { label: 'Under Review', status: 'under_review' },
  { label: 'Interview Scheduled', status: 'interview_scheduled' },
  { label: 'Final Decision', status: 'final' },
]

const getStatusIndex = (status: string) => {
  const index = statusSteps.findIndex(step => step.status === status)
  if (status === 'accepted' || status === 'rejected') return 3
  return index >= 0 ? index : 0
}

export default function TrackApplicationPage() {
  const params = useParams()
  const router = useRouter()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [trackingId, setTrackingId] = useState('')
  const [application, setApplication] = useState<ApplicationData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (params?.tracking_id) {
      const id = Array.isArray(params.tracking_id) ? params.tracking_id[0] : params.tracking_id
      setTrackingId(id)
      fetchApplication(id)
    }
  }, [params])

  const fetchApplication = async (id: string) => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/track-application/${id}`)

      if (!response.ok) {
        throw new Error('Application not found')
      }

      const data = await response.json()
      setApplication(data)
    } catch (err) {
      setError('Application not found. Please check your tracking ID.')
      setApplication(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingId.trim()) {
      router.push(`/track-application/${trackingId.trim()}`)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const currentStepIndex = application ? getStatusIndex(application.status) : 0

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: isMobile ? '80px' : '4.17vw',
        px: isMobile ? 2 : '1.04vw'
      }}
    >
      <Container maxWidth="sm">
        {/* Header */}
        <Box sx={{ mb: isMobile ? '32px' : '2.08vw', textAlign: 'center' }}>
          <Typography
            sx={{
              fontWeight: 600,
              color: '#111827',
              fontFamily: 'Poppins',
              fontSize: 'max(24px, 1.56vw)',
              mb: isMobile ? '10px' : '0.52vw',
            }}
          >
            Track Application
          </Typography>
          <Typography
            sx={{
              color: '#6B7280',
              fontFamily: 'Poppins',
              fontSize: 'max(14px, 0.83vw)',
            }}
          >
            Enter your tracking ID to check status
          </Typography>
        </Box>

        {/* Search Form */}
        <Box
          component="form"
          onSubmit={handleSearch}
          sx={{
            display: 'flex',
            gap: isMobile ? '8px' : '0.52vw',
            mb: isMobile ? '32px' : '2.08vw',
            background: 'white',
            p: isMobile ? '8px' : '0.52vw',
            borderRadius: isMobile ? '8px' : '0.42vw',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: {
                px: isMobile ? '16px' : '1.04vw',
                fontFamily: 'Poppins',
                fontSize: 'max(14px, 0.73vw)',
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: '#F69333',
              color: 'white',
              px: isMobile ? '24px' : '1.56vw',
              minWidth: 'auto',
              textTransform: 'none',
              fontFamily: 'Poppins',
              fontWeight: 500,
              '&:hover': {
                background: '#E67E22',
              },
            }}
          >
            <SearchIcon sx={{ fontSize: isMobile ? '20px' : '1.04vw' }} />
          </Button>
        </Box>

        {/* Loading */}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: isMobile ? '64px' : '4.17vw' }}>
            <CircularProgress sx={{ color: '#F69333' }} />
          </Box>
        )}

        {/* Error */}
        {error && !loading && (
          <Alert
            severity="error"
            sx={{
              borderRadius: isMobile ? '8px' : '0.42vw',
              fontFamily: 'Poppins'
            }}
          >
            {error}
          </Alert>
        )}

        {/* Application Details */}
        {application && !loading && (
          <Box
            sx={{
              background: 'white',
              borderRadius: isMobile ? '8px' : '0.42vw',
              p: isMobile ? '24px' : '2.08vw',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            {/* Job Info */}
            <Box sx={{
              mb: isMobile ? '24px' : '2.08vw',
              pb: isMobile ? '20px' : '1.56vw',
              borderBottom: '1px solid #E5E7EB'
            }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Poppins',
                  fontSize: 'max(18px, 1.15vw)',
                  mb: isMobile ? '8px' : '0.42vw',
                }}
              >
                {application.job_posting.role}
              </Typography>
              <Typography
                sx={{
                  color: '#6B7280',
                  fontFamily: 'Poppins',
                  fontSize: 'max(14px, 0.73vw)',
                  mb: isMobile ? '16px' : '1.04vw',
                }}
              >
                {application.name}
              </Typography>
              <Box sx={{ display: 'flex', gap: isMobile ? '24px' : '1.56vw', flexWrap: 'wrap' }}>
                <Box>
                  <Typography sx={{
                    fontSize: isMobile ? '12px' : '0.63vw',
                    fontSize: 'max(12px, 0.63vw)',
                    color: '#9CA3AF',
                    mb: isMobile ? '4px' : '0.21vw'
                  }}>
                    Tracking ID
                  </Typography>
                  <Typography sx={{
                    fontSize: 'max(13px, 0.68vw)',
                    fontFamily: 'monospace',
                    color: '#111827'
                  }}>
                    {application.tracking_id}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{
                    fontSize: 'max(12px, 0.63vw)',
                    color: '#9CA3AF',
                    mb: isMobile ? '4px' : '0.21vw'
                  }}>
                    Submitted
                  </Typography>
                  <Typography sx={{
                    fontSize: 'max(13px, 0.68vw)',
                    fontFamily: 'Poppins',
                    color: '#111827'
                  }}>
                    {formatDate(application.createdAt)}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Timeline */}
            <Box>
              <Typography
                sx={{
                  fontSize: 'max(14px, 0.73vw)',
                  fontWeight: 600,
                  color: '#111827',
                  fontFamily: 'Poppins',
                  mb: isMobile ? '20px' : '1.56vw',
                }}
              >
                Application Status
              </Typography>

              {/* Status Steps */}
              {statusSteps.map((step, index) => {
                const isCompleted = index <= currentStepIndex
                const isCurrent = index === currentStepIndex
                const isLast = index === statusSteps.length - 1

                return (
                  <Box key={step.status}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? '12px' : '1.04vw' }}>
                      {/* Icon */}
                      <Box sx={{ position: 'relative' }}>
                        {isCompleted ? (
                          <CheckCircleIcon
                            sx={{
                              color: '#10B981',
                              fontSize: 'max(24px, 1.25vw)',
                            }}
                          />
                        ) : (
                          <RadioButtonUncheckedIcon
                            sx={{
                              color: '#D1D5DB',
                              fontSize: 'max(24px, 1.25vw)',
                            }}
                          />
                        )}
                        {!isLast && (
                          <Box
                            sx={{
                              position: 'absolute',
                              left: isMobile ? '11px' : '0.57vw',
                              top: isMobile ? '24px' : '1.25vw',
                              width: isMobile ? '2px' : '0.1vw',
                              height: isMobile ? '40px' : '2.08vw',
                              background: isCompleted ? '#10B981' : '#E5E7EB',
                            }}
                          />
                        )}
                      </Box>

                      {/* Content */}
                      <Box sx={{ flex: 1, pb: isLast ? 0 : (isMobile ? '20px' : '1.56vw') }}>
                        <Typography
                          sx={{
                            fontSize: 'max(14px, 0.73vw)',
                            fontWeight: isCurrent ? 600 : 400,
                            color: isCompleted ? '#111827' : '#9CA3AF',
                            fontFamily: 'Poppins',
                          }}
                        >
                          {step.label}
                          {index === 3 && application.status === 'accepted' && ' - Accepted ✓'}
                          {index === 3 && application.status === 'rejected' && ' - Not Selected'}
                        </Typography>
                        {isCurrent && (
                          <Typography
                            sx={{
                              fontSize: 'max(12px, 0.63vw)',
                              color: '#6B7280',
                              mt: isMobile ? '4px' : '0.26vw',
                            }}
                          >
                            Current status
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </Box>
                )
              })}
            </Box>

            {/* Footer */}
            <Box sx={{
              mt: isMobile ? '24px' : '2.08vw',
              pt: isMobile ? '20px' : '1.56vw',
              borderTop: '1px solid #E5E7EB'
            }}>
              <Typography
                sx={{
                  fontSize: 'max(12px, 0.63vw)',
                  color: '#9CA3AF',
                  textAlign: 'center',
                }}
              >
                Last updated: {formatDate(application.updatedAt)}
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  )
}
