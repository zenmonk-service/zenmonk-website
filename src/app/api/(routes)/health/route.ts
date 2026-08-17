import { NextResponse } from 'next/server'
import { connectToMongoDB } from '@/config/db'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  try {
    const connection = await connectToMongoDB()
    if (!connection.db) {
      throw new Error('MongoDB connection has no active database')
    }

    await connection.db.admin().ping()

    return NextResponse.json({
      status: 'ok',
      database: 'connected',
    })
  } catch (error) {
    console.error(
      'Health check failed:',
      error instanceof Error ? error.message : error,
    )

    return NextResponse.json(
      {
        status: 'unhealthy',
        database: 'disconnected',
      },
      { status: 503 },
    )
  }
}
