"use server"

import { connect } from "@/utils/connect"
import { PlasticsModel } from "@/models/plastics.model"

export const fetchAllPlastics = async () => {
    await connect()

    try {
        const plastics = await PlasticsModel.find().lean()
        if (!plastics || plastics.length === 0) return { isError: true, results: [], message: "ไม่พบข้อมูลพลาสติก" }

        return { isError: false, results: plastics }
    } catch (error) {
        return { isError: true, results: [], message: "เกิดข้อผิดพลาด" }
    }
}

export const fetchById = async ({ id }: { id: string }) => {
    await connect()

    try {
        const plastic = await PlasticsModel.findById(id).lean()
        if (!plastic) return { isError: true, result: null, message: "ไม่พบข้อมูลพลาสติก" }

        return { isError: false, result: plastic }
    } catch (error) {
        return { isError: true, result: null, message: "เกิดข้อผิดพลาด" }
    }
}
