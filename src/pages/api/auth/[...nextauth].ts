import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvide from "next-auth/providers/github";
import prisma from "../../../../lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvide({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    }),
  ],
  secret: process.env.SECRET || "",
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  useSecureCookies: process.env.NODE_ENV === "production",
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ session, user }) {
      if (session?.user) session.user.id = user.id;
      return session;
    }
  }
}

export default NextAuth(authOptions);
