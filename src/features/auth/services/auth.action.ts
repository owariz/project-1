"use server"

import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { connect } from "@/utils/connect"
import { UserModel } from "@/models/user.model"
import { Types } from "mongoose"

import { UserInfo } from "@/types"

const JWT_SECRET = process.env.JWT_SECRET!

// type guard
function isJwtPayload(obj: any): obj is { id: string } {
    return obj && typeof obj === "object" && typeof obj.id === "string"
}

export async function getUser(): Promise<UserInfo | null> {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    if (!token) return null

    try {
        const decoded = jwt.verify(token, JWT_SECRET)

        if (!isJwtPayload(decoded)) return null

        await connect()

        const userId = new Types.ObjectId(decoded.id)
        const data = await UserModel.findById(userId).select("username role email").lean() as
            | { username: string; role: string; email: string }
            | null

        if (!data) return null

        return {
            id: decoded.id,
            username: data.username,
            email: data.email,
            role: data.role,
        }
    } catch (error) {
        console.error("Error in getUser:", error)
        return null
    }
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.set({
        name: "token",
        value: "",
        maxAge: 0,
        path: "/",
    })
}