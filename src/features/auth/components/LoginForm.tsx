import { Input, Button, Form } from "@/components/common";
import Link from "next/link";

interface Props {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
}

export const LoginForm = ({ handleSubmit, loading }: Props) => {
    return (
        <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
                label="อีเมลหรือชื่อผู้ใช้"
                placeholder="your@email.com หรือ username"
                name="email"
                errorMessage="กรุณากรอกอีเมลหรือชื่อผู้ใช้"
                isRequired
            />
            <Input
                type="password"
                label="รหัสผ่าน"
                placeholder="••••••••"
                name="password"
                errorMessage="กรุณากรอกรหัสผ่าน"
                isRequired
            />

            <Button type="submit" color="primary" isLoading={loading}>
                เข้าสู่ระบบ
            </Button>

            <hr className="text-gray-200" />
            <p className="text-center text-sm text-gray-600">
                หากยังไม่มีบัญชี
                <Link href={"/auth/register"} className="text-blue-400">
                    สมัครสมาชิก
                </Link>
            </p>
        </Form>
    );
};
