import { Card, CardBody, CardHeader } from "@heroui/card"
import { fetchById } from "@/features/plastics/service/plastics.action"

export default async function PlasticDetail({ params }: { params: { id: string } }) {
    const data = await fetchById({ id: params.id })
    const plastic = data?.result

    if (!plastic) {
        return (
            <Card shadow="none" className="border border-gray-200">
                <CardBody>
                    <p className="text-gray-500">❌ ไม่พบข้อมูลพลาสติก</p>
                </CardBody>
            </Card>
        )
    }

    return (
        <>
            <Card shadow="none" className="border border-gray-200 mb-4">
                <CardHeader>
                    <h1 className="text-3xl font-bold">♻️ {plastic.name}</h1>
                </CardHeader>
            </Card>

            <Card shadow="none" className="border border-gray-200">
                <CardBody className="space-y-4">
                    {/* วงกลมสี */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full font-bold text-white ${plastic.color}`}>
                        {plastic.recycle}
                    </div>

                    {/* ข้อมูล */}
                    <div>
                        <h2 className="text-2xl font-semibold">{plastic.full}</h2>
                        <p className="text-gray-600 italic">รหัส: {plastic._id}</p>
                    </div>

                    <p className="text-gray-700">{plastic.desc}</p>

                    <div>
                        <h3 className="font-semibold">วิธีรีไซเคิล</h3>
                        <p className="text-gray-700">{plastic.recycle}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">เคล็ดลับ</h3>
                        <p className="text-gray-700">{plastic.tips}</p>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}
