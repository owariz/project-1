import { Suspense } from "react";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { APP_CONFIG } from "@/config";
import Loading from "./loading";

export const metadata: Metadata = {
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
    robots: "noindex, nofollow",
    keywords: ["XCOP", "XCOPTECH", "ระบบภายใน", "monitoring"],
    authors: [{ name: "XCOPTECH Team" }],
    category: "Internal Tools",
};

export default function GuestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Toaster />
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </>
    );
}