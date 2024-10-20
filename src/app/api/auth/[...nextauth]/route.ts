import NextAuth, { NextAuthOptions, Session} from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { JWT } from 'next-auth/jwt';
import User from '@/server/db/models/user'; // Import your User model
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/server/config/mongoose';
 
interface IUser {
  accessToken: string;
  email: string;
  id: string;
  name: string;
  image: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? '',
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt', // Use JWT instead of sessions
  },
  callbacks: {
    async jwt({ token, user, account }): Promise<JWT> {
      if (account && user) {
        token.accessToken = account.access_token; // Save the access token from the provider
        token.id = user.id; // Save the user's id
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      if (session.user) {
        (session.user as IUser).id = token.id as string;
        (session.user as IUser).accessToken = token.accessToken as string; // Pass the JWT access token to the session
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Set a secret for signing JWT
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (req: any, res: any) => {
  const { method } = req;

  await connectToDatabase(); // Connect to the database

  if (method === 'POST') {
    const { firstName, lastName, email, password, role } = req.body;

    // Check if it's a registration request
    if (firstName && lastName && email && password && role) {
      try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hashedPassword,
          role,
        });

        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
      }
    }
    // If it's not a registration request, fall back to NextAuth login
    return NextAuth(req, res, authOptions);
  }

  // Handle GET or other methods via NextAuth (login flow)
  return NextAuth(req, res, authOptions);
};

export { handler as GET, handler as POST };
