import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value
    const url = request.nextUrl.clone()
    const isAuthPage = url.pathname.startsWith("/auth")

    if (!token) {
        if (isAuthPage) return NextResponse.next()

        const response = NextResponse.redirect(new URL("/auth/login", request.url))
        response.cookies.delete("token")
        return response
    }

    try {
        // Verify token
        await jwtVerify(token, JWT_SECRET)

        // Redirect ถ้าอยู่หน้าล็อกอินแล้ว แต่ user ผ่าน auth แล้ว
        if (isAuthPage) {
            url.pathname = "/"
            return NextResponse.redirect(url)
        }

        return NextResponse.next()
    } catch (error) {
        // Token ไม่ valid หรือตรวจสอบ error อื่นๆ ก็ลบทิ้ง redirect login
        const response = NextResponse.redirect(new URL("/auth/login", request.url))
        response.cookies.delete("token")
        return response
    }
}

export const config = {
    matcher: [
        /*
        Middleware จะ apply กับทุก path ยกเว้น:
            - /_next/*
            - /favicon.ico
            - /public/*
        */
        "/((?!_next|favicon.ico|assets).*)",
    ],
};