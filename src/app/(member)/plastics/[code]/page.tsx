// src/app/plastics/[code]/page.tsx
"use client"

import { useParams, useRouter } from "next/navigation"
import { Card, CardBody, CardHeader } from "@heroui/card"
import { Button } from "@heroui/button"

const plastics = [
    { code: 1, name: "PET", full: "Polyethylene Terephthalate", desc: "ใช้ทำขวดน้ำดื่ม รีไซเคิลง่าย", recycle: "♻️ รีไซเคิลง่าย", tips: "ควรล้างก่อนรีไซเคิล", color: "from-blue-400 to-blue-600" },
    { code: 2, name: "HDPE", full: "High Density Polyethylene", desc: "ขวดนม ขวดแชมพู ทนสารเคมี", recycle: "♻️ รีไซเคิลได้", tips: "เก็บแยกจากฝาขวด", color: "from-green-400 to-green-600" },
    { code: 3, name: "PVC", full: "Polyvinyl Chloride", desc: "ท่อน้ำ ของเล่น สายไฟ", recycle: "⚠️ รีไซเคิลยาก", tips: "หลีกเลี่ยงการเผาเพราะมีสารพิษ", color: "from-red-400 to-red-600" },
    { code: 4, name: "LDPE", full: "Low Density Polyethylene", desc: "ถุงพลาสติก ฟิล์มห่อ", recycle: "♻️ รีไซเคิลได้บางส่วน", tips: "มักใช้ทำถุงรีไซเคิลใหม่", color: "from-yellow-400 to-yellow-600" },
    { code: 5, name: "PP", full: "Polypropylene", desc: "กล่องอาหาร ไมโครเวฟได้", recycle: "♻️ รีไซเคิลง่าย", tips: "ใช้ซ้ำได้หลายครั้ง", color: "from-purple-400 to-purple-600" },
    { code: 6, name: "PS", full: "Polystyrene", desc: "โฟม แก้วกาแฟพลาสติก", recycle: "⚠️ รีไซเคิลยาก", tips: "ควรหลีกเลี่ยงการใช้ซ้ำ", color: "from-pink-400 to-pink-600" },
    { code: 7, name: "Other", full: "Other Plastics", desc: "พลาสติกผสม รีไซเคิลยาก", recycle: "⚠️ รีไซเคิลแทบไม่ได้", tips: "พยายามลดการใช้", color: "from-gray-400 to-gray-600" },
]

export default function PlasticDetail() {
    const { code } = useParams()
    const router = useRouter()

    const plastic = plastics.find((p) => p.code.toString() === code)

    if (!plastic) {
        return (
            <div className="p-6">
                <Card shadow="none" className="border border-gray-200">
                    <CardBody>
                        <h1 className="text-xl font-bold">❌ ไม่พบข้อมูลพลาสติก</h1>
                        <Button className="mt-4" onPress={() => router.push("/")}>
                            กลับหน้าหลัก
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }

    return (
        <div className="p-6">
            <Card shadow="lg" className="border border-gray-200">
                <CardHeader className="flex flex-col items-start space-y-2">
                    <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-r ${plastic.color}`}
                    >
                        {plastic.code}
                    </div>
                    <h1 className="text-3xl font-bold">{plastic.name}</h1>
                    <p className="text-gray-500 italic">{plastic.full}</p>
                </CardHeader>

                <CardBody className="space-y-4">
                    <p className="text-gray-700">{plastic.desc}</p>
                    <div className="p-4 rounded-lg bg-gray-50">
                        <p className="font-semibold">{plastic.recycle}</p>
                        <p className="text-sm text-gray-600">{plastic.tips}</p>
                    </div>

                    <Button color="primary" onPress={() => router.push("/")}>
                        ⬅️ กลับหน้าหลัก
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}
