"use server"

import { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

import { connect } from "@/utils/connect"
import { UserModel } from "@/models/user.model"

const JWT_SECRET = process.env.JWT_SECRET as string
if (!JWT_SECRET) throw new Error("JWT_SECRET environment variable is not set.")

export async function login({ email, username, password }: { email?: string; username?: string; password: string }) {
    await connect()

    try {
        if ((!email && !username) || !password) return { isError: true, message: "กรุณากรอกข้อมูลให้ครบ" }

        const conditions = []
        if (email) conditions.push({ email })
        if (username) conditions.push({ username })
        
        const existingUser = await UserModel.findOne({ $or: conditions })
        if (!existingUser) return { isError: true, message: "ไม่พบผู้ใช้นี้" }

        const isPasswordMatch = await compare(password, existingUser.password)
        if (!isPasswordMatch) return { isError: true, message: "รหัสผ่านของคุณไม่ถูกต้อง" }

        const token = jwt.sign({ id: existingUser._id, username: existingUser.username, role: existingUser.role }, JWT_SECRET, { expiresIn: "1d" })

        // เซ็ต cookie
        const cookieStore = await cookies()
        cookieStore.set({
            name: "token",
            value: token,
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24, // 1 วัน
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        })

        return { isError: false, message: "เข้าสู่ระบบสำเร็จ" }
    } catch (error) {
        console.error(error)
        return { isError: true, message: "เกิดข้อผิดพลาด" }
    }
}