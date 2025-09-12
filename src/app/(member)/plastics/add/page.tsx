"use client"

import { Card, CardBody, CardHeader } from "@heroui/card"
import { Input } from "@heroui/input"
import { Button } from "@heroui/button"
import { useState } from "react"
import { save } from "@/features/plastics/service/plastics.action"

export default function Page() {
    const [form, setForm] = useState({
        name: "",
        full: "",
        desc: "",
        recycle: "",
        tips: "",
        color: "",
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const colors = [
        "bg-red-500/60",
        "bg-green-500/60",
        "bg-blue-500/60",
        "bg-yellow-500/60",
        "bg-purple-500/60",
        "bg-pink-500/60",
        "bg-gray-500/60",
    ]

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        setLoading(true)
        setMessage("")
        try {
            const data = await save(form) // ✅ เรียกใช้ action แทน fetch

            if (!data.isError) {
                setMessage("✅ บันทึกข้อมูลสำเร็จ")
                setForm({
                    name: "",
                    full: "",
                    desc: "",
                    recycle: "",
                    tips: "",
                    color: "",
                })
            } else {
                setMessage("❌ บันทึกล้มเหลว: " + data.message)
            }
        } catch (err) {
            setMessage("❌ เกิดข้อผิดพลาดในการเชื่อมต่อ")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Card shadow="none" className="border border-gray-200 mb-4">
                <CardHeader>
                    <h1 className="text-3xl font-bold">➕ ประเภทพลาสติก</h1>
                </CardHeader>
            </Card>

            <Card shadow="none" className="border border-gray-200">
                <CardBody className="space-y-4">
                    <Input label="ชื่อย่อ (เช่น PET)" name="name" value={form.name} onChange={handleChange} />
                    <Input label="ชื่อเต็ม" name="full" value={form.full} onChange={handleChange} />
                    <Input label="รายละเอียด" name="desc" value={form.desc} onChange={handleChange} />
                    <Input label="การรีไซเคิล" name="recycle" value={form.recycle} onChange={handleChange} />
                    <Input label="เคล็ดลับ" name="tips" value={form.tips} onChange={handleChange} />

                    <div>
                        <label className="block text-sm font-medium mb-2">สี</label>
                        <div className="flex gap-2 flex-wrap">
                            {colors.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() => setForm({ ...form, color: c })}
                                    className={`w-10 h-10 rounded-md border-2 ${form.color === c ? "border-black" : "border-transparent"
                                        } ${c}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* preview การ์ด */}
                    {form.color && (
                        <div className="mt-4">
                            <Card shadow="none" className="border border-gray-200">
                                <CardBody className={`p-4 text-white ${form.color}`}>
                                    Preview: {form.name || "ชื่อย่อ"} - {form.full || "ชื่อเต็ม"}
                                </CardBody>
                            </Card>
                        </div>
                    )}

                    <Button
                        color="primary"
                        onPress={handleSubmit}
                        isLoading={loading}
                        className="w-full"
                    >
                        บันทึก
                    </Button>

                    {message && <p className="text-sm text-gray-600">{message}</p>}
                </CardBody>
            </Card>
        </>
    )
}
