import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "../services/login.action";
import toast from "react-hot-toast";

export const useLoginForm = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        try {
            const raw = Object.fromEntries(new FormData(e.currentTarget));
            const email = raw.email.toString()
            const password = raw.password.toString()

            if (!email || !password) return toast.error("กรุณากรอกข้อมูลให้ครบ");

            const isEmail = email.toString().includes("@");
            const res = await login({
                email: isEmail ? email : undefined,
                username: !isEmail ? email : undefined,
                password,
            });

            if (res.isError) return toast.error(res.message);

            toast.success(res.message);
            router.push("/");
        } catch (error) {
            console.error("Login error:", error);
            toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
        } finally {
            setLoading(false);
        }
    };

    return { handleSubmit, loading };
};
