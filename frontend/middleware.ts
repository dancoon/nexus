import { NextRequest, NextResponse } from "next/server";
const protectedRoutes = [
  "/dashboard",
  "/home",
  "/articles",
  "/events",
  "/projects",
  "/developers",
];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtectedRoute = protectedRoutes.includes(pathname);

  if (isProtectedRoute) {
    const accessToken = req.cookies.get("access")?.value;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_HOST}/auth/jwt/verify/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: accessToken }),
      }
    );
    if (!response.ok) {
      const refreshToken = req.cookies.get("refresh")?.value;
      const refreshResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/auth/jwt/refresh/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh: refreshToken }),
        }
      );
      if (!refreshResponse.ok) {
        const loginUrl = `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/auth/login?next=${encodeURIComponent(pathname)}`;
        return NextResponse.redirect(loginUrl);
      }
    }
  }
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
