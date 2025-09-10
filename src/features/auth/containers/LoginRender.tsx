"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import { LoginForm } from "../components/LoginForm";
import { useLoginForm } from "../hooks/useLoginForm";

export const LoginRender = () => {
    const { loading, handleSubmit } = useLoginForm();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="text-xl font-semibold text-center">เข้าสู่ระบบ</CardHeader>
                <CardBody>
                    <LoginForm handleSubmit={handleSubmit} loading={loading} />
                </CardBody>
            </Card>
        </div>
    );
};
