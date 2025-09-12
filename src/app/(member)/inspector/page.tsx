"use client"

import React from "react"
import { Card, CardBody, CardHeader } from "@heroui/card"

export default function Creator() {
    // mock data ผู้จัดทำ (จริง ๆ อาจ fetch จาก DB)
    const creators = [
        {
            id: "1",
            name: "ครูอธิฐาน โพธิ์ละเดา",
            role: "อาจาร์ยผู้สอน",
            avatar: "LINE_ALBUM_ครู TD_CG_250912_1.jpg", // ใส่รูปใน public/avatars/
        },
        {
            id: "2",
            name: "ครูทิพวรรณ รอดนุช",
            role: "อาจาร์ยผู้สอน",
            avatar: "LINE_ALBUM_ครู TD_CG_250912_2.jpg",
        },
        {
            id: "3",
            name: "ครูอินทุอร เกทิพย์",
            role: "อาจาร์ยผู้สอน",
            avatar: "LINE_ALBUM_ครู TD_CG_250912_3.jpg",
        },
        {
            id: "4",
            name: "ครูจุฑาทิพย์ บุญเมฆ",
            role: "อาจาร์ยผู้สอน",
            avatar: "615a2a4a-da5d-45dc-a61b-17322cbacfcd.jpg",
        },
    ]

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold mb-4">👩‍💻 อาจาร์ยผู้ตรวจ</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {creators.map((c) => (
                    <Card key={c.id} shadow="none" className="border border-gray-200 hover:shadow-sm transition">
                        <CardHeader>
                            <img
                                src={c.avatar}
                                alt={c.name}
                                className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
                            />
                        </CardHeader>
                        <CardBody className="text-center space-y-2">
                            <h2 className="text-xl font-semibold">{c.name}</h2>
                            <p className="text-gray-500">{c.role}</p>
                            {/* <p className="text-gray-400 text-sm">{c.email}</p> */}
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    )
}
