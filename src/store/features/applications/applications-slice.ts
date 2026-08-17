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

interface ApplicationsState {
  applications: Application[]
  loading: boolean
  submitting: boolean
  error: string | null
  submitSuccess: boolean
  submittedApplication: Application | null
}

const initialState: ApplicationsState = {
  applications: [],
  loading: false,
  submitting: false,
  error: null,
  submitSuccess: false,
  submittedApplication: null,
}

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    resetSubmitSuccess: (state) => {
      state.submitSuccess = false
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
        state.submitSuccess = true
        state.submittedApplication = action.payload
        state.applications.push(action.payload)
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.submitting = false
        state.error = action.payload as string
        state.submitSuccess = false
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

export const { resetSubmitSuccess } = applicationsSlice.actions
export default applicationsSlice.reducer
