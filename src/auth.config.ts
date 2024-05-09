import type { NextAuthConfig } from "next-auth";
import { signIn } from "next-auth/react";
import { pages } from "next/dist/build/templates/app-page";

export const authConfig = {
  pages: {
    signIn: "/signup",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      if (isOnAdmin) {
        if (isLoggedIn) return true;
        return false; //Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/admin", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
