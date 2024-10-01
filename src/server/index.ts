import {
  connectToDatabase,
  getDatabaseConnectionStatus,
} from "@/lib/mongoose/db";
import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { User } from "@/lib/mongoose/user.model";

export const appRouter = router({
  getUsers: publicProcedure.query(async () => {
    await connectToDatabase();
    const users = await User.find();
    return users;
  }),
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email"),
      })
    )
    .mutation(async ({ input }) => {
      await connectToDatabase();
      const newUser = await User.create(input);
      return newUser;
    }),
  getDatabaseStatus: publicProcedure.query(async () => {
    await connectToDatabase(); // Ensure connection is attempted
    const status = getDatabaseConnectionStatus();
    let statusMessage;
    switch (status) {
      case 0:
        statusMessage = "Disconnected";
        break;
      case 1:
        statusMessage = "Connected";
        break;
      case 2:
        statusMessage = "Connecting";
        break;
      case 3:
        statusMessage = "Disconnecting";
        break;
      default:
        statusMessage = "Unknown";
    }
    return { status, statusMessage };
  }),
});

export type AppRouter = typeof appRouter;
