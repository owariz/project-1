"use server"

import { connect, disconnect } from "@/utils/connect"
import { ShortUrlModel, ShortUrl } from "@/models/short.model"

export async function Redirect({ shortCode, headers }: { shortCode: string, headers: Record<string, string> }) {
    if (!shortCode || typeof shortCode !== "string") return { isError: true, message: "ลิงก์ไม่ถูกต้อง" }

    await connect()

    try {
        const now = new Date()

        // หา short url ที่ตรงกับ shortCode และยัง active อยู่ (ไม่ถูกลบ, ยังไม่หมดอายุ)
        const shortUrl = await ShortUrlModel.findOne({
            shortCode,
            isDeleted: false,
            $or: [
                { expireAt: { $gt: now } },
                { expireAt: null }, // กรณีไม่มีวันหมดอายุ
                { expireAt: { $exists: false } }
            ]
        }).lean() as ShortUrl | null // ใช้ lean() ดึงเป็น plain object เลย ลด overhead

        if (!shortUrl) return { isError: true, message: "ไม่พบลิงก์หรือหมดอายุแล้ว" }

        const visitLog = {
            timestamp: new Date(),
            ip: headers["x-forwarded-for"] || "unknown",
            userAgent: headers["user-agent"] || "unknown",
            referer: headers["referer"] || "unknown",
        };

        // อัปเดตคลิก + push log เข้าสู่ array visits (สมมติว่า schema มี visits: [] เก็บ log)
        await ShortUrlModel.findByIdAndUpdate(shortUrl._id, {
            $inc: { clicks: 1 },
            $push: { visits: visitLog }
        })

        return {
            isError: false,
            message: "พบลิงก์",
            data: {
                originalUrl: shortUrl.originalUrl,
            }
        }
    } catch (error) {
        console.error("Redirect link error:", error)
        return { isError: true, message: "เกิดข้อผิดพลาด", error }
    } finally {
        await disconnect()
    }
}