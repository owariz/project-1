"use client"

import { Card, CardBody, CardHeader } from "@heroui/card"
import Link from "next/link"

const plastics = [
    { code: 1, name: "PET", full: "Polyethylene Terephthalate", desc: "ใช้ทำขวดน้ำดื่ม รีไซเคิลง่าย", color: "bg-blue-100 text-blue-700" },
    { code: 2, name: "HDPE", full: "High Density Polyethylene", desc: "ขวดนม ขวดแชมพู ทนสารเคมี", color: "bg-green-100 text-green-700" },
    { code: 3, name: "PVC", full: "Polyvinyl Chloride", desc: "ท่อน้ำ ของเล่น สายไฟ", color: "bg-red-100 text-red-700" },
    { code: 4, name: "LDPE", full: "Low Density Polyethylene", desc: "ถุงพลาสติก ฟิล์มห่อ", color: "bg-yellow-100 text-yellow-700" },
    { code: 5, name: "PP", full: "Polypropylene", desc: "กล่องอาหาร ไมโครเวฟได้", color: "bg-purple-100 text-purple-700" },
    { code: 6, name: "PS", full: "Polystyrene", desc: "โฟม แก้วกาแฟพลาสติก", color: "bg-pink-100 text-pink-700" },
    { code: 7, name: "Other", full: "Other Plastics", desc: "พลาสติกผสม รีไซเคิลยาก", color: "bg-gray-100 text-gray-700" },
]

export default function Home() {
    return (
        <>
            <Card shadow="none" className="border border-gray-200 mb-4">
                <CardHeader>
                    <h1 className="text-3xl font-bold">♻️ ประเภทพลาสติก</h1>
                </CardHeader>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {plastics.map((p) => (
                    <Link href={`/plastics/${p.code}`} key={p.code} className="no-underline">
                        <Card key={p.code} shadow="none" className="border border-gray-200 hover:shadow-sm transition">
                            <CardBody className="space-y-3">
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-bold ${p.color}`}>
                                    {p.code}
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">{p.name}</h2>
                                    <p className="text-sm text-gray-500 italic">{p.full}</p>
                                </div>
                                <p className="text-gray-700">{p.desc}</p>
                            </CardBody>
                        </Card>
                    </Link>
                ))}
            </div>
        </>
    )
}
