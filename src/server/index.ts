// /server/router.ts
import { router } from "./trpc";
import { userRouter } from "./admin/users";

export const appRouter = router({
  users: userRouter,
  // Add more routers as necessary
});

export type AppRouter = typeof appRouter;

