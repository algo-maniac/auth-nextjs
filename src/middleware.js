import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";

  if ((path === "/profile" || path === "/home") && token === "") {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if ((path === "/login" || path === "/signup") && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/login", "/signup", "/home"],
};
