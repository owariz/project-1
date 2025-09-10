"use server"

import { hash } from "bcrypt"

import { connect, disconnect } from "@/utils/connect"
import { UserModel } from "@/models/user.model"

export async function register({ username, password, email }: { username: string, password: string, email: string }) {
    await connect()

    try {
        if (!email || !username || !password) return { isError: true, message: "กรุณากรอกข้อมูลให้ครบ" }

        const existingUser = await UserModel.findOne({ $or: [{ email }, { username }] })
        if (existingUser) return { isError: true, message: existingUser.email === email ? "อีเมลนี้ถูกใช้แล้ว" : "ชื่อนี้ถูกใช้แล้ว" }

        const passwordHash = await hash(password, 12)
        await UserModel.insertOne({ email, username, password: passwordHash })

        return { isError: false, message: "สมัครสมาชิกสำเร็จ" }
    } catch (error) {
        return { isError: true, message: "เกิดข้อผิดพลาด", error }
    } finally {
        disconnect()
    }
}
