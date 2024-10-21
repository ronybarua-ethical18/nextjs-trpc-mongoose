// src/server/trpc/auth.ts

import { z } from "zod"; // Import Zod for validation
import { publicProcedure, router } from "@/server/trpc";
import User from "@/server/db/models/user";
import bcrypt from "bcrypt";

const signupSchema = z.object({
  email: z.string().email(), // Validate email format
  password: z.string().min(6), // Validate password length
  firstName: z.string().min(1), // Validate first name
  lastName: z.string().min(1), // Validate last name
  role: z.string(),
});

export const authRouter = router({
  // Sign Up Procedure
  signup: publicProcedure
    .input(signupSchema) // Validate input with Zod schema
    .mutation(async ({ input }) => {
      const { email, password, firstName, lastName, role } = input;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("User already exists"); // Handle user already existing
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role,
      });

      await newUser.save(); // Save user to the database

      return {
        message: "User registered successfully",
        status: 200,
        user: newUser,
      };
    }),
});
