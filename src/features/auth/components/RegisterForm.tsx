import Link from "next/link";
import { Button, Input, Form } from "@/components/common";

interface Props {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
}

export const RegisterForm = ({ handleSubmit, loading }: Props) => {
    return (
        <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
                type="email"
                label="อีเมล"
                name="email"
                placeholder="example@mail.com"
                isRequired
                errorMessage="กรุณากรอกอีเมล"
            />
            <Input
                label="ชื่อผู้ใช้"
                placeholder="username"
                name="username"
                isRequired
                errorMessage="กรุณากรอกชื่อผู้ใช้"
            />
            <Input
                type="password"
                name="password"
                label="รหัสผ่าน"
                placeholder="••••••••"
                isRequired
                errorMessage="กรุณากรอกรหัสผ่าน"
            />

            <Button type="submit" color="warning" isLoading={loading} className="w-full">สมัครสมาชิก</Button>

            <hr className="text-gray-200" />
            <p className="text-center text-sm text-gray-600">
                หากมีบัญชีอยู่?{" "}
                <Link href={"/auth/login"} className="text-blue-400">
                    เข้าสู่ระบบ
                </Link>
            </p>
        </Form>
    );
};
