const databaseName = process.env.DB_NAME
const applicationUser = process.env.DB_USER
const applicationPassword = process.env.DB_PASSWORD

if (!databaseName || !applicationUser || !applicationPassword) {
  throw new Error('DB_NAME, DB_USER, and DB_PASSWORD are required for MongoDB bootstrap')
}

const applicationDatabase = db.getSiblingDB(databaseName)
const userConfiguration = {
  pwd: applicationPassword,
  roles: [{ role: 'readWrite', db: databaseName }],
}

if (applicationDatabase.getUser(applicationUser)) {
  applicationDatabase.updateUser(applicationUser, userConfiguration)
} else {
  applicationDatabase.createUser({
    user: applicationUser,
    ...userConfiguration,
  })
}
