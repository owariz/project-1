import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const url = request.nextUrl.clone();
    const isAuthPage = url.pathname.startsWith("/auth");

    if (!token) {
        if (isAuthPage) return NextResponse.next();

        const response = NextResponse.redirect(new URL("/auth/login", request.url));
        response.cookies.delete("token");
        return response;
    }

    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);

        if (isAuthPage) {
            url.pathname = "/";
            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    } catch {
        url.pathname = "/error";
        url.searchParams.set("status", "invalid_token");
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: ["/((?!_next|favicon.ico|assets).*)"],
};