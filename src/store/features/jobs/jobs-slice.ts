import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchJobs, fetchJobById } from './jobs-actions'
import { Department } from '@/modules/careers/sections/types'

// Define the Job interface based on your model
export interface Job {
  _id: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  category: string
  role: string
  description: string
  status: 'open' | 'closed'
  required_skills: {
    skill: {
      name: string
      description?: string
    }
  }[]
  createdAt: string
  updatedAt: string
}

interface JobsState {
  departments: Department[]
  loading: boolean
  error: string | null
  currentJob: Job | null
}

const initialState: JobsState = {
  departments: [],
  loading: false,
  error: null,
  currentJob: null,
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
    setCurrentJob: (state, action: PayloadAction<Job | null>) => {
      state.currentJob = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // fetchJobs
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false
        state.departments = action.payload
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      // fetchJobById
      .addCase(fetchJobById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.loading = false
        state.currentJob = action.payload
      })
      .addCase(fetchJobById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearError, setCurrentJob } = jobsSlice.actions
export default jobsSlice.reducer
