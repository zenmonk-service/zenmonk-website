export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return

  const { connectToMongoDB, hasMongoConfiguration } = await import('@/config/db')

  if (!hasMongoConfiguration()) {
    console.warn(
      'MongoDB is not configured. Mongo-backed APIs and /api/health will be unavailable.',
    )
    return
  }

  try {
    await connectToMongoDB()
  } catch (error) {
    console.error(
      'Initial MongoDB connection failed; readiness checks will remain unhealthy until the database is reachable.',
      error instanceof Error ? error.message : error,
    )
  }
}
