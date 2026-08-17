import mongoose, { Connection } from 'mongoose'

type MongoCache = {
  connection: Connection | null
  promise: Promise<Connection> | null
}

const globalForMongo = globalThis as typeof globalThis & {
  __zenmonkMongoCache?: MongoCache
}

const mongoCache = globalForMongo.__zenmonkMongoCache ?? {
  connection: null,
  promise: null,
}

globalForMongo.__zenmonkMongoCache = mongoCache

const requiredDatabaseVariables = [
  'DB_USER',
  'DB_PASSWORD',
  'DB_HOST',
  'DB_PORT',
  'DB_NAME',
] as const

export const hasMongoConfiguration = () =>
  Boolean(process.env.MONGODB_URI?.trim()) ||
  requiredDatabaseVariables.every((variable) => Boolean(process.env[variable]?.trim()))

export const getMongoUri = () => {
  const configuredUri = process.env.MONGODB_URI?.trim()
  if (configuredUri) return configuredUri

  const missingVariables = requiredDatabaseVariables.filter(
    (variable) => !process.env[variable]?.trim(),
  )

  if (missingVariables.length > 0) {
    throw new Error(
      `MongoDB configuration is incomplete. Missing: ${missingVariables.join(', ')}`,
    )
  }

  const user = encodeURIComponent(process.env.DB_USER as string)
  const password = encodeURIComponent(process.env.DB_PASSWORD as string)
  const host = process.env.DB_HOST as string
  const port = process.env.DB_PORT as string
  const database = encodeURIComponent(process.env.DB_NAME as string)
  const authSource = encodeURIComponent(
    process.env.DB_AUTH_SOURCE || (process.env.DB_NAME as string),
  )

  return `mongodb://${user}:${password}@${host}:${port}/${database}?authSource=${authSource}`
}

export const connectToMongoDB = async (): Promise<Connection> => {
  if (mongoCache.connection?.readyState === 1) {
    return mongoCache.connection
  }

  if (mongoCache.connection) {
    mongoCache.connection = null
    mongoCache.promise = null
  }

  if (!mongoCache.promise) {
    mongoCache.promise = mongoose
      .connect(getMongoUri(), {
        serverSelectionTimeoutMS: Number(
          process.env.DB_SERVER_SELECTION_TIMEOUT_MS || 10000,
        ),
      })
      .then((client) => client.connection)
  }

  try {
    mongoCache.connection = await mongoCache.promise
    return mongoCache.connection
  } catch (error) {
    mongoCache.promise = null
    mongoCache.connection = null
    throw error
  }
}
