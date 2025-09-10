import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { APP_CONFIG } from "@/config";
import { getUser } from "@/features/auth/services/auth.action";

import { Sidebar } from "@/components/sections/sidebar";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
    robots: "noindex, nofollow",
    keywords: ["XCOP", "XCOPTECH", "ระบบภายใน", "monitoring"],
    authors: [{ name: "XCOPTECH Team" }],
    category: "Internal Tools",
};

export default async function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const user = await getUser();

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Toaster />

            {/* Navbar: full width */}
            <header className="top-0 z-30">
                <Navbar user={user} />
            </header>

            {/* Sidebar + Content */}
            <div className="flex flex-col lg:flex-row flex-1">
                {/* Sidebar ขยับอยู่บน mobile, ซ้ายบน desktop */}
                <aside className="lg:w-64 px-4 sm:px-6 lg:px-8 flex-shrink-0">
                    <Sidebar user={user} />
                </aside>

                {/* Main content */}
                <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    <div className="container mx-auto">
                        {children}
                    </div>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
