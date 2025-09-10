import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { Redirect } from "../service/redirect.action"

export const RedirectRender = async ({ param }: { param: { id: string } }) => {
    const headersList = await headers()
    const headersObj: Record<string, string> = {}

    for (const [key, value] of headersList.entries()) {
        headersObj[key.toLowerCase()] = value
    }

    const res = await Redirect({ shortCode: param.id, headers: headersObj })

    if (res.isError || !res.data?.originalUrl) throw new Error(res.message || "ไม่พบลิงก์ปลายทาง")

    redirect(res.data.originalUrl)
}