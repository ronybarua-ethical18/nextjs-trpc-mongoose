// app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions, Session, SessionStrategy } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { JWT } from 'next-auth/jwt';

interface IUser {
accessToken:string,
email:string
id:string
name:string
image:string
}

export const authOptions:NextAuthOptions = {
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
      // When the user logs in for the first time, the `user` object will be available
      if (account && user) {
        token.accessToken = account.access_token; // Save the access token from the provider
        token.id = user.id; // Save the user's id
      }
      return token;
    },
    async session({ session, token }: { session: Session ; token: JWT }): Promise<Session> {
      if (session.user) {
        (session.user as IUser).id = token.id as string;
      }
      if (session.user) {
        (session.user as IUser).accessToken = token.accessToken as string; // Pass the JWT access token to the session
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Set a secret for signing JWT
};

const handler = NextAuth({
  ...authOptions,
  session: {
    ...authOptions.session,
    strategy: authOptions.session?.strategy as SessionStrategy | undefined,
  },
});

export { handler as GET, handler as POST };
