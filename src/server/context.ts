/* eslint-disable @typescript-eslint/no-explicit-any */
// /server/utils/context.ts

import { getSession } from "next-auth/react"; // Import the session handler
import { inferAsyncReturnType } from "@trpc/server";
import connectToDatabase from "./config/mongoose";
import mongoose from "mongoose";

export const createContext = async ({ req }: { req: Request }) => {
  // Convert the Request object to a compatible type for getSession
  const compatibleReq = {
    headers: req.headers as any,
    method: req.method,
    url: req.url,
    body: req.body,
  };
  // Get the user session from the request
  const session = await getSession({ req: compatibleReq });
  await connectToDatabase(); 
  
  return {
    user: session?.user || null,
    db:mongoose.connection
  };
};

// Define the context type using inferAsyncReturnType
export type Context = inferAsyncReturnType<typeof createContext>;
