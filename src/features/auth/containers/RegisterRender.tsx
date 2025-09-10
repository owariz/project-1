"use client";

import { Card, CardBody, CardHeader } from "@/components/common";
import { RegisterForm } from "../components/RegisterForm";
import { useRegisterForm } from "../hooks/useRegisterForm";

export const RegisterRender = () => {
    const { loading, handleSubmit } = useRegisterForm();

    return (
        <div className="flex justify-center items-center min-h-screen bg-orange-50">
            <Card className="w-full max-w-md shadow-sm">
                <CardHeader className="text-xl font-semibold text-center">สมัครสมาชิก</CardHeader>
                <CardBody>
                    <RegisterForm handleSubmit={handleSubmit} loading={loading} />
                </CardBody>
            </Card>
        </div>
    );
};
