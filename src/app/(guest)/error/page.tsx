"use client";

import { useSearchParams } from "next/navigation";
import { Button, Card, CardBody } from "@heroui/react";

export default function ErrorPage() {
    const searchParams = useSearchParams();

    const status = searchParams.get("status");

    const errorMessages: Record<string, string> = {
        no_token: "คุณยังไม่ได้เข้าสู่ระบบ กรุณาเข้าสู่ระบบก่อน",
        invalid_token: "เซสชันหมดอายุหรือล็อกอินไม่ถูกต้อง",
        user_not_found: "ไม่พบข้อมูลผู้ใช้งานในระบบ",
    };

    const message = (status && errorMessages[status]) || "เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ";

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
            <Card className="max-w-md w-full shadow-sm">
                <CardBody className="space-y-6 text-center">
                    <p className="text-gray-700">{message}</p>

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Button color="primary" as="a" href="/auth/login">
                            ไปที่หน้าเข้าสู่ระบบ
                        </Button>
                        <Button variant="flat" as="a" href="/">
                            กลับหน้าแรก
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
