import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";
import github from "next-auth/providers/github";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [credentials({})],
});

// providers: [credentials({}), google, github],
