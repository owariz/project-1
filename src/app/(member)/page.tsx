import Link from "next/link"
import { Card, CardBody, CardHeader } from "@heroui/card"
import { fetchAllPlastics } from "@/features/plastics/service/plastics.action";

export default async function Home() {
    const plasticsData = await fetchAllPlastics();
    const plastics = plasticsData.results;

    return (
        <>
            <Card shadow="none" className="border border-gray-200 mb-4">
                <CardHeader>
                    <h1 className="text-3xl font-bold">♻️ ประเภทพลาสติก</h1>
                </CardHeader>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {plastics.length === 0 && ( <p className="text-gray-500">ไม่พบข้อมูลพลาสติก</p> )}
                {plastics.map((p, index) => (
                    <Link href={`/plastics/${p._id}`} key={index} className="no-underline">
                        <Card shadow="none" className="border border-gray-200 hover:shadow-sm transition">
                            <CardBody className="space-y-3">
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-white ${p.color}`}>
                                    {p.recycle}
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
