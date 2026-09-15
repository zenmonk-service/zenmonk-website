import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface ApplicationPayload {
  name: string
  email: string
  phone: string
  message: string
  document: string
  job_posting: string
}

// Create Application
export const createApplication = createAsyncThunk(
  'applications/createApplication',
  async (data: FormData, { rejectWithValue }) => {
    if (typeof window !== 'undefined' && !window.navigator.onLine) {
      return rejectWithValue('NO_INTERNET')
    }
    try {
      const response = await axios.post('/api/applications', data)
      return response.data
    } catch (error: any) {
      if (typeof window !== 'undefined' && !window.navigator.onLine) {
        return rejectWithValue('NO_INTERNET')
      }
      if (error.code === 'ERR_NETWORK' || error.message === 'Network Error') {
        return rejectWithValue('NO_INTERNET')
      }
      return rejectWithValue(error.response?.data?.message || 'Failed to submit application')
    }
  }
)

// List Applications (Admin)
export const fetchApplications = createAsyncThunk(
  'applications/fetchApplications',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/applications')
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch applications')
    }
  }
)
