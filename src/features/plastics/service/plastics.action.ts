"use server"

import { connect } from "@/utils/connect"
import { PlasticsModel } from "@/models/plastics.model"

export const fetchAllPlastics = async () => {
    await connect()

    try {
        const plastics = await PlasticsModel.find().lean()

        return {
            isError: false,
            results: plastics,
            message: "success",
        }
    } catch (error) {
        console.error("Error fetching plastics:", error)
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

export const save = async ({ name, full, desc, recycle, tips, color }: { name: string; full: string; desc: string; recycle: string; tips: string; color: string; }) => {
    await connect();

    try {
        const newPlastic = new PlasticsModel({
            name,
            full,
            desc,
            recycle,
            tips,
            color,
        });

        await newPlastic.save();

        return { isError: false, message: "บันทึกสำเร็จ" };
    } catch (error) {
        console.error("Error saving plastic:", error);
        return { isError: true, message: "เกิดข้อผิดพลาด" };
    }
};