// import User from "@/server/db/models/user";
import User from '@/server/db/models/user';
import { protectedProcedure } from '@/server/middlewares/with-auth';
import { router } from '@/server/trpc';

export const userRouter = router({
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    const loggedUser = await ctx.user;
    const users = await User.find({});
    return {
      users,
      loggedUser,
    };
  }),

  // Additional user booking-related procedures can be added here
});
