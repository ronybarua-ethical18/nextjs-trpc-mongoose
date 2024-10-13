/* eslint-disable @typescript-eslint/no-explicit-any */
// /server/utils/context.ts

// import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { inferAsyncReturnType } from "@trpc/server";
import connectToDatabase from "./config/mongoose";
import mongoose from "mongoose";

// Define the type for the incoming request
interface CreateContextOptions {
  req: Request;
}

export const createContext = async ({ req }: CreateContextOptions) => {
  // Convert the Request object to a compatible type for NextAuth functions
  const compatibleReq: any = {
    headers: Object.fromEntries(req.headers),
    method: req.method,
    url: req.url,
    // Note: body is typically not needed for session/token retrieval
  };

  // // Get the user session from the request
  // const session = await getSession({ req: compatibleReq });

  // Use getToken to retrieve the JWT token
  const token = await getToken({ req: compatibleReq });

  // Connect to the database
  await connectToDatabase();

  return {
    user: token?.user || null, // Session user or null
    token: token || null,        // JWT token or null
    db: mongoose.connection,     // Database connection
  };
};

// Define the context type using inferAsyncReturnType
export type Context = inferAsyncReturnType<typeof createContext>;