import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Department } from '@/modules/careers/sections/types'

// Async Thunks
export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async (params: { category?: string; status?: string } | undefined, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/jobs', { params })
      const jobs = response.data

      // Transform jobs into Department structure
      const departmentsMap: Record<string, Department> = {}

      jobs.forEach((job: any) => {
        const category = job.category || 'Other'
        const deptName = category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')

        if (!departmentsMap[category]) {
          departmentsMap[category] = {
            department: deptName,
            id: category as any,
            positions: [],
          }
        }

        departmentsMap[category].positions.push({
          id: job._id,
          title: job.role,
          heading: job.role,
          isOpening: job.status === 'open',
          description: job.description,
          skills: job.required_skills.map((rs: any) => ({
            title: rs.skill.name,
            description: rs.skill.description || '',
          })),
        })
      })

      return Object.values(departmentsMap)
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch jobs')
    }
  }
)

export const fetchJobById = createAsyncThunk(
  'jobs/fetchJobById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/jobs/${id}`)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to fetch job')
    }
  }
)
