import { fetchById } from "@/features/plastics/service/plastics.action";

export default async function PlasticDetail({ params }: { params: { id: string } }) {
    const plastic = await fetchById({ id: params.id })

    return (
        <h1>{params.id}</h1>
    )
}