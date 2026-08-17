import { NextRequest, NextResponse } from 'next/server'
import Application from '@/models/job-application'
import { connectToMongoDB } from '@/config/db'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ tracking_id: string }> }
) {
  try {
    await connectToMongoDB()

    const { tracking_id } = await params

    const application = await Application.findOne({ tracking_id })
      .populate('job_posting')
      .exec()

    if (!application) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      tracking_id: application.tracking_id,
      status: application.status,
      name: application.name,
      email: application.email,
      job_posting: {
        role: application.job_posting?.role || 'Unknown Position',
        category: application.job_posting?.category || 'General',
      },
      createdAt: application.createdAt,
      updatedAt: application.updatedAt,
    })
  } catch (error) {
    console.error('Error fetching application:', error)
    return NextResponse.json(
      { error: 'Failed to fetch application' },
      { status: 500 }
    )
  }
}
