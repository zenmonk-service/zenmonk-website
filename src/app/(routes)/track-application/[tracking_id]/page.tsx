'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Skeleton,
  Alert,
  CircularProgress,
  useMediaQuery,
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

const CACHE_DURATION_MS = 60 * 1000 // 1 minute cache

interface CacheEntry {
  data: ApplicationData | null
  error?: string
  timestamp: number
}

const applicationCache = new Map<string, CacheEntry>()

const getStatusIndex = (status: string) => {
  const index = statusSteps.findIndex(step => step.status === status)
  if (status === 'accepted' || status === 'rejected') return 3
  return index >= 0 ? index : 0
}

const TRACKING_ID_REGEX = /^APP-\d{10,15}-[A-Z0-9]{4,10}$/i

export default function TrackApplicationPage() {
  const params = useParams()
  const isMobile = useMediaQuery('(max-width:768px)')

  const [trackingId, setTrackingId] = useState('')
  const [inputError, setInputError] = useState('')
  const [application, setApplication] = useState<ApplicationData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const lastFetchedIdRef = useRef<string | null>(null)
  const isFetchingRef = useRef<boolean>(false)

  useEffect(() => {
    const rawId = Array.isArray(params?.tracking_id) ? params.tracking_id[0] : params?.tracking_id
    if (!rawId) return

    let decoded = ''
    try {
      decoded = decodeURIComponent(rawId).replace(/[^a-zA-Z0-9-]/g, '').toUpperCase()
    } catch {
      decoded = rawId.replace(/[^a-zA-Z0-9-]/g, '').toUpperCase()
    }

    if (decoded && lastFetchedIdRef.current !== decoded) {
      lastFetchedIdRef.current = decoded
      setTrackingId(decoded)
      if (TRACKING_ID_REGEX.test(decoded)) {
        fetchApplication(decoded)
      } else {
        setError('Application not found. Please check your tracking ID.')
      }
    }
  }, [params?.tracking_id])

  const fetchApplication = async (id: string) => {
    if (isFetchingRef.current) return

    const cached = applicationCache.get(id)
    const now = Date.now()

    if (cached && now - cached.timestamp < CACHE_DURATION_MS) {
      if (cached.error) {
        setError(cached.error)
        setApplication(null)
      } else {
        setApplication(cached.data)
        setError('')
      }
      setLoading(false)
      return
    }

    isFetchingRef.current = true
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/track-application/${id}`)

      if (!response.ok) {
        throw new Error('Application not found')
      }

      const data = await response.json()
      applicationCache.set(id, {
        data,
        timestamp: Date.now(),
      })
      setApplication(data)
      setError('')
    } catch {
      const errorMsg = 'Application not found. Please check your tracking ID.'
      applicationCache.set(id, {
        data: null,
        error: errorMsg,
        timestamp: Date.now(),
      })
      setError(errorMsg)
      setApplication(null)
    } finally {
      isFetchingRef.current = false
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = e.target.value.replace(/[^a-zA-Z0-9-]/g, '').toUpperCase()
    setTrackingId(sanitized)
    if (inputError) {
      if (!sanitized.trim()) {
        setInputError('Tracking ID is required')
      } else if (!TRACKING_ID_REGEX.test(sanitized.trim())) {
        setInputError('Enter valid tracking ID')
      } else {
        setInputError('')
      }
    }
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      e.ctrlKey ||
      e.metaKey ||
      e.altKey ||
      ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Home', 'End'].includes(e.key)
    ) {
      return
    }
    if (!/^[a-zA-Z0-9-]$/.test(e.key)) {
      e.preventDefault()
    }
  }

  const handleInputPaste = (e: React.ClipboardEvent<HTMLInputElement | HTMLDivElement>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    const selectionStart = target?.selectionStart ?? 0
    const selectionEnd = target?.selectionEnd ?? target?.value?.length ?? trackingId.length
    const pasted = e.clipboardData.getData('text')

    const before = trackingId.slice(0, selectionStart)
    const after = trackingId.slice(selectionEnd)
    const combined = before + pasted + after
    const sanitized = combined.replace(/[^a-zA-Z0-9-]/g, '').toUpperCase().slice(0, 40)
    setTrackingId(sanitized)
    if (inputError) {
      if (!sanitized.trim()) {
        setInputError('Tracking ID is required')
      } else if (!TRACKING_ID_REGEX.test(sanitized.trim())) {
        setInputError('Enter valid tracking ID')
      } else {
        setInputError('')
      }
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (loading || isFetchingRef.current) return

    const cleaned = trackingId.trim().replace(/[^a-zA-Z0-9-]/g, '').toUpperCase()
    if (!cleaned) {
      setInputError('Tracking ID is required')
      return
    }
    if (!TRACKING_ID_REGEX.test(cleaned)) {
      setInputError('Enter valid tracking ID')
      return
    }

    setInputError('')
    lastFetchedIdRef.current = cleaned
    fetchApplication(cleaned)
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
            mb: inputError ? (isMobile ? '8px' : '0.52vw') : (isMobile ? '32px' : '2.08vw'),
            background: 'white',
            p: isMobile ? '8px' : '0.52vw',
            borderRadius: isMobile ? '8px' : '0.42vw',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: inputError ? '1.5px solid #d32f2f' : '1.5px solid transparent',
            transition: 'border-color 0.2s ease, margin 0.2s ease',
          }}
        >
          <TextField
            fullWidth
            placeholder="e.g. APP-1234567890-ABCDEF"
            value={trackingId}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            onPaste={handleInputPaste}
            variant="standard"
            slotProps={{
              htmlInput: {
                maxLength: 40,
              },
            }}
            InputProps={{
              disableUnderline: true,
              sx: {
                px: isMobile ? '16px' : '1.04vw',
                fontFamily: 'Poppins',
                fontSize: 'max(14px, 0.73vw)',
                '& input': {
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  '&::placeholder': {
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  },
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              background: '#F69333',
              color: 'white',
              px: isMobile ? '20px' : 'max(20px, 1.25vw)',
              minWidth: isMobile ? '48px' : 'max(48px, 2.5vw)',
              textTransform: 'none',
              fontFamily: 'Poppins',
              fontWeight: 500,
              borderRadius: isMobile ? '6px' : 'max(6px, 0.31vw)',
              '&:hover': {
                background: '#E67E22',
              },
              '&.Mui-disabled': {
                background: '#F69333',
                opacity: 0.7,
                color: 'white',
                cursor: 'not-allowed',
              },
            }}
          >
            {loading ? (
              <CircularProgress size={isMobile ? 18 : 20} sx={{ color: 'white' }} />
            ) : (
              <SearchIcon sx={{ fontSize: isMobile ? '20px' : 'max(20px, 1.15vw)' }} />
            )}
          </Button>
        </Box>
        {inputError && (
          <Typography
            sx={{
              color: '#d32f2f',
              fontSize: isMobile ? '13px' : 'max(13px, 0.73vw)',
              fontFamily: 'Poppins',
              fontWeight: 500,
              mb: isMobile ? '24px' : '1.56vw',
              ml: isMobile ? '8px' : '0.42vw',
            }}
          >
            {inputError}
          </Typography>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <Box
            sx={{
              background: 'white',
              borderRadius: isMobile ? '8px' : '0.42vw',
              p: isMobile ? '24px' : '2.08vw',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            {/* Job Info Skeleton */}
            <Box
              sx={{
                mb: isMobile ? '24px' : '2.08vw',
                pb: isMobile ? '20px' : '1.56vw',
                borderBottom: '1px solid #E5E7EB',
              }}
            >
              <Skeleton
                variant="rectangular"
                width="40%"
                height={isMobile ? 24 : 28}
                sx={{
                  borderRadius: '4px',
                  mb: isMobile ? '8px' : '0.42vw',
                }}
              />
              <Skeleton
                variant="rectangular"
                width="25%"
                height={isMobile ? 16 : 20}
                sx={{
                  borderRadius: '4px',
                  mb: isMobile ? '16px' : '1.04vw',
                }}
              />
              <Box sx={{ display: 'flex', gap: isMobile ? '24px' : '1.56vw', flexWrap: 'wrap' }}>
                <Box sx={{ width: isMobile ? '140px' : '8.5vw' }}>
                  <Skeleton variant="text" width="50%" height={isMobile ? 16 : 18} />
                  <Skeleton variant="text" width="95%" height={isMobile ? 20 : 22} />
                </Box>
                <Box sx={{ width: isMobile ? '120px' : '7vw' }}>
                  <Skeleton variant="text" width="60%" height={isMobile ? 16 : 18} />
                  <Skeleton variant="text" width="80%" height={isMobile ? 20 : 22} />
                </Box>
              </Box>
            </Box>

            {/* Timeline Skeleton */}
            <Box>
              <Skeleton
                variant="rectangular"
                width="30%"
                height={isMobile ? 20 : 22}
                sx={{
                  borderRadius: '4px',
                  mb: isMobile ? '20px' : '1.56vw',
                }}
              />

              {/* Steps Skeleton */}
              {[0, 1, 2, 3].map((index) => {
                const isLast = index === 3
                return (
                  <Box key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: isMobile ? '12px' : '1.04vw' }}>
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          width: isMobile ? '24px' : 'max(24px, 1.25vw)',
                          flexShrink: 0,
                          alignSelf: 'stretch',
                        }}
                      >
                        <Skeleton
                          variant="circular"
                          width={isMobile ? 24 : 26}
                          height={isMobile ? 24 : 26}
                          sx={{
                            position: 'relative',
                            zIndex: 2,
                          }}
                        />
                        {!isLast && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: isMobile ? '12px' : 'max(12px, 0.625vw)',
                              bottom: isMobile ? '-12px' : 'max(-12px, -0.625vw)',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '2px',
                              background: '#E5E7EB',
                              zIndex: 1,
                            }}
                          />
                        )}
                      </Box>
                      <Box sx={{ flex: 1, pb: isLast ? 0 : (isMobile ? '20px' : '1.56vw') }}>
                        <Skeleton
                          variant="text"
                          width={index === 0 ? '45%' : index === 1 ? '35%' : index === 2 ? '40%' : '30%'}
                          height={isMobile ? 22 : 24}
                        />
                        {index === 0 && (
                          <Skeleton
                            variant="text"
                            width="25%"
                            height={isMobile ? 16 : 18}
                            sx={{ mt: isMobile ? '4px' : '0.26vw' }}
                          />
                        )}
                      </Box>
                    </Box>
                  </Box>
                )
              })}
            </Box>

            {/* Footer Skeleton */}
            <Box
              sx={{
                mt: isMobile ? '24px' : '2.08vw',
                pt: isMobile ? '20px' : '1.56vw',
                borderTop: '1px solid #E5E7EB',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Skeleton variant="text" width="30%" height={isMobile ? 18 : 20} />
            </Box>
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
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          width: isMobile ? '24px' : 'max(24px, 1.25vw)',
                          flexShrink: 0,
                          alignSelf: 'stretch',
                        }}
                      >
                        {isCompleted ? (
                          <CheckCircleIcon
                            sx={{
                              color: '#10B981',
                              fontSize: 'max(24px, 1.25vw)',
                              display: 'block',
                              position: 'relative',
                              zIndex: 2,
                              backgroundColor: '#ffffff',
                              borderRadius: '50%',
                            }}
                          />
                        ) : (
                          <RadioButtonUncheckedIcon
                            sx={{
                              color: '#D1D5DB',
                              fontSize: 'max(24px, 1.25vw)',
                              display: 'block',
                              position: 'relative',
                              zIndex: 2,
                              backgroundColor: '#ffffff',
                              borderRadius: '50%',
                            }}
                          />
                        )}
                        {!isLast && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: isMobile ? '12px' : 'max(12px, 0.625vw)',
                              bottom: isMobile ? '-12px' : 'max(-12px, -0.625vw)',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '2px',
                              background: isCompleted ? '#10B981' : '#E5E7EB',
                              zIndex: 1,
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
