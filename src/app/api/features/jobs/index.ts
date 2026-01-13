import { NextRequest } from 'next/server'
import { container } from '../../infrastructure/providers/app.provider'

export async function closeJobPosting(params: { id: string }) {
  return await container.resolve('closeJobPostingController').handle(params)
}

export async function openJobPosting(params: { id: string }) {
  return await container.resolve('openJobPostingController').handle(params)
}

export async function updateJobPosting(request: NextRequest, params: { id: string }) {
  return await container.resolve('updateJobPostingController').handle(request, params)
}

export async function findJobPosting(params: { id: string }) {
  return await container.resolve('findJobPostingController').handle(params)
}

export async function removeJobPosting(params: { id: string }) {
  return await container.resolve('removeJobPostingController').handle(params)
}

export async function listJobPostings(request: NextRequest) {
  return await container.resolve('listJobPostingsController').handle(request)
}

export async function addJobPosting(request: NextRequest) {
  return await container.resolve('addJobPostingController').handle(request)
}
