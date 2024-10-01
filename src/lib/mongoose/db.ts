/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';


const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    console.log("Using cached connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("New database connection established");
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
    console.log("Database connected successfully");
    return cached.conn;
  } catch (e) {
    console.error("Error connecting to database:", e);
    throw e;
  }
}

// Add this new function to check the connection status
export function getDatabaseConnectionStatus() {
  return mongoose.connection.readyState;
}
