import NextAuth, { AuthOptions } from "next-auth";
import { Account, User as AuthUser, Profile } from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connectToDatabase from "@/server/config/mongoose";
import User from "@/server/db/models/user";

declare module "next-auth" {
  interface User {
    id: string; // Include your user ID type
    role: string; // Include your user role type
    firstName: string;
    lastName: string;
  }

  interface Session {
    user: User; // Extend the user interface to include your custom properties
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Type the credentials parameter correctly
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Invalid credentials");
        }

        console.log("credentials", credentials);

        await connectToDatabase();
        const user = await User.findOne({ email: credentials.email });

        // If user does not exist, log and return null
        if (!user) {
          throw new Error("User not found");
        }

        if (user) {
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          }
        }
        return null; // If credentials are invalid, return null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt", // Use JWT instead of sessions
  },
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: AuthUser;
      account: Account | null;
      profile?: Profile | undefined;
    }): Promise<boolean> {
      if (account?.provider === "google") {
        await connectToDatabase();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
              name: user.name,
              provider: "google",
            });
            await newUser.save();
          }
          return true;
        } catch (err) {
          console.error("Error saving user during Google sign-in", err);
          return false;
        }
      }

      if (account?.provider === "credentials") {
        return true; // Credentials are already verified
      }

      return false;
    },
    async jwt({ token, user }) {
      // Attach user information to the JWT token

      console.log("user", user);
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // Attach user info to the session object
      if (!session.user) {
        session.user = {};
      }
      session.user = token.id;
      session.role = token.role;
      session.email = token.email;
      session.firstName = token.firstName;
      session.lastName = token.lastName;
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
