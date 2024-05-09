import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { connectDB } from "../config/database";

import User from "@/models/user";

async function getUser(email: string): Promise<any> {
  try {
    await connectDB();
    const user = await User.findOne({ email: email }).exec();
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
        }

        return null;
      },
    }),
  ],
});
