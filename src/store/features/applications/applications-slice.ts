import { createSlice } from '@reduxjs/toolkit'
import { createApplication, fetchApplications } from './applications-actions'

interface Application {
  _id: string
  name: string
  email: string
  phone: string
  message?: string
  document?: string
  job_posting: {
    _id: string
    role: string
    category: string
  }
  tracking_id: string
  status: string
  createdAt: string
  updatedAt: string
}

export interface SubmittedFormData {
  fullName: string
  email: string
  phone: string
  portfolioLink?: string
  message?: string
  fileName?: string
  fileSize?: number
  trackingId?: string
}

interface ApplicationsState {
  applications: Application[]
  loading: boolean
  submitting: boolean
  error: string | null
  submitSuccess: boolean
  submittedApplication: Application | null
  isModalOpen: boolean
  backgroundToast: { message: string; type: 'success' | 'error' } | null
  submittingJob: { id: string; title: string } | null
  currentSubmittingData: SubmittedFormData | null
}

const initialState: ApplicationsState = {
  applications: [],
  loading: false,
  submitting: false,
  error: null,
  submitSuccess: false,
  submittedApplication: null,
  isModalOpen: false,
  backgroundToast: null,
  submittingJob: null,
  currentSubmittingData: null,
}

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    resetSubmitSuccess: (state) => {
      state.submitSuccess = false
      state.submittedApplication = null
      state.submittingJob = null
      state.currentSubmittingData = null
    },
    setCurrentSubmittingData: (state, action) => {
      state.currentSubmittingData = action.payload
    },
    setApplicationModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
    setBackgroundToast: (state, action) => {
      state.backgroundToast = action.payload
    },
    clearBackgroundToast: (state) => {
      state.backgroundToast = null
    },
    setSubmittingJob: (state, action) => {
      state.submittingJob = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // createApplication
      .addCase(createApplication.pending, (state) => {
        state.submitting = true
        state.error = null
        state.submitSuccess = false
      })
      .addCase(createApplication.fulfilled, (state, action) => {
        state.submitting = false
        state.submittedApplication = action.payload
        state.applications.push(action.payload)
        if (state.isModalOpen) {
          state.submitSuccess = true
        } else {
          state.submitSuccess = false
          state.submittingJob = null
          state.backgroundToast = {
            message: 'Your application has been submitted successfully!',
            type: 'success',
          }
        }
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.submitting = false
        state.error = action.payload as string
        state.submitSuccess = false
        if (!state.isModalOpen) {
          state.submittingJob = null
          if (action.payload !== 'NO_INTERNET') {
            state.backgroundToast = {
              message: typeof action.payload === 'string' ? action.payload : 'Failed to submit application. Please try again.',
              type: 'error',
            }
          }
        }
      })
      // fetchApplications
      .addCase(fetchApplications.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.loading = false
        state.applications = action.payload
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const {
  resetSubmitSuccess,
  setCurrentSubmittingData,
  setApplicationModalOpen,
  setBackgroundToast,
  clearBackgroundToast,
  setSubmittingJob,
} = applicationsSlice.actions
export default applicationsSlice.reducer
