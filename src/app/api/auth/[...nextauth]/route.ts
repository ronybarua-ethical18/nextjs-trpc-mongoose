// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"; // Example provider

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // Add other providers here
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
    // Define other pages if necessary
  },
//   callbacks: {
//     async session({ _session, _user }) {
//       // Customize session object here
//       return session;
//     },
//   },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
