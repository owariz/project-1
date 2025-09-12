"use client"

import React from "react"
import { Card, CardBody, CardHeader } from "@heroui/card"

export default function Creator() {
    // ข้อมูลผู้จัดทำ
    const creator = {
        name: "สถาพร ปานจันทร์",
        role: "Developer",
        email: "moop2588@gmail.com",
        avatar: "profile1.jpg", // วางไฟล์รูปไว้ public/avatars/
    }

    return (
        <div className="p-6 flex justify-center">
            <Card shadow="none" className="border border-gray-200 w-full max-w-sm hover:shadow-sm transition">
                <CardHeader>
                    <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-32 h-32 rounded-full mx-auto border-2 border-gray-300"
                    />
                </CardHeader>
                <CardBody className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold">{creator.name}</h2>
                    <p className="text-gray-500">{creator.role}</p>
                    <p className="text-gray-400 text-sm">{creator.email}</p>
                </CardBody>
            </Card>
        </div>
    )
}
