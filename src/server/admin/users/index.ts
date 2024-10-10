// /server/user/users.ts

// import User from "@/server/db/models/user";
import User from "@/server/db/models/user";
import { protectedProcedure } from "@/server/middlewares/with-auth";
import { router } from "@/server/trpc";

export const userRouter = router({
  getUsers: protectedProcedure
    .query(async ({ ctx }) => {
      console.log("ctx",(await ctx)?.user);
      // Use the Mongoose model to find bookings
      const users = await User.find({})
      return users; // Return all bookings for the user
    }),

  

  // Additional user booking-related procedures can be added here
});
