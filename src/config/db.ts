import mongoose, { Connection } from "mongoose";

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env;

const MONGODB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;


let cachedConnection: Connection | null = null;

export const connectToMongoDB = async () => {

  if (cachedConnection) {
    console.log("Using cached db connection");
    return cachedConnection;
  }

  try {
    const cnx = await mongoose.connect(MONGODB_URI);
    console.log('cnx: ', cnx.connection.db?.databaseName);
    cachedConnection = cnx.connection;
    console.log("New mongodb connection established");

    return cachedConnection;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}