import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/dashboard", "/home", "/articles", "/events", "/projects", "/developers"];

async function checkAuthentication(req: NextRequest): Promise<boolean> {
  // Implement your authentication logic here
  // For example, check if a session or token exists and is valid
  // You can access cookies from req.headers.cookie
  // Return true if authenticated, false otherwise

  // For demonstration purposes, let's assume we have a session cookie named "session"
  const cookies = req.headers.getSetCookie() || "";
  const isAuthenticated = cookies.includes("session");

  return isAuthenticated;
}

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtectedRoute = protectedRoutes.includes(pathname);

  if (isProtectedRoute) {
    // Check if user is authenticated based on session or token
    const isAuthenticated = true;
    if (!isAuthenticated) {
      const loginUrl = `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/auth/login?next=${encodeURIComponent(pathname)}`;

      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
