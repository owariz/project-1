import toast from "react-hot-toast";
import { register } from "../services/register.action";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useRegisterForm = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const raw = Object.fromEntries(new FormData(e.currentTarget));
            const email = raw.email.toString();
            const username = raw.username.toString();
            const password = raw.password.toString();

            const res = await register({ email, username, password });

            if (res.isError) return toast.error(res.message);

            toast.success(res.message);
            router.push("/auth/login");
        } catch (error) {
            console.error("Register error:", error);
            toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
        } finally {
            setLoading(false);
        }
    };

    return { handleSubmit, loading };
};
