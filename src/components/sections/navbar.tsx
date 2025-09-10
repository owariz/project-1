"use client";

import { Card, CardBody } from "@heroui/react";
import { useRouter } from "next/navigation";

import { logout } from "@/features/auth/services/auth.action";
import { UserInfo } from "@/types";

import { Logo } from "./logo";
import { NavActions } from "./navActions";

interface NavbarProps {
    user: UserInfo | null;
}

export const Navbar = ({ user }: NavbarProps) => {
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push("/auth/login");
    };

    return (
        <nav className="w-full">
            <div className="px-4 sm:px-6 lg:px-8">
                <Card shadow="none" radius="md" className="border border-gray-200 mt-2 sm:mt-4 lg:mt-6">
                    <CardBody>
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <Logo />
                            <NavActions user={user} onLogout={handleLogout} />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </nav>
    );
};