import User from '@/server/db/models/user';
import { protectedProcedure } from '@/server/middlewares/with-auth';
import { router } from '@/server/trpc';
import { JwtPayload } from 'jsonwebtoken';

export const userRouter = router({
  // Get all users and the logged-in user from the session
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    const loggedUser = ctx.user as JwtPayload; // Retrieve the logged-in user from context
    const users = await User.find({}); // Fetch all users
    console.log({ loggedUser, users });

    return {
      users,
      loggedUser,
    };
  }),

  getUserById: protectedProcedure.query(async ({ ctx }) => {
    const sessionUser = ctx.user as JwtPayload;

    if (!sessionUser || !sessionUser?.id) {
      throw new Error('You must be logged in to access this data.');
    }

    const user = await User.findById(sessionUser.id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }),
});
