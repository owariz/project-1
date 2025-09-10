"use client"

import Link from "next/link"
import { Card, CardBody } from "@heroui/card"
import { APP_CONFIG } from "@/config/app";

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full mt-auto">
            <div className="px-4 sm:px-6 lg:px-8">
                <Card shadow="none" radius="md" className="text-gray-400 border-1 border-gray-200 mt-8 mb-3">
                    <CardBody>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-sm">
                                &copy; {currentYear} varizz.site — ทำด้วย ❤️ โดย <Link href={"/"} className="hover:text-blue-600 transition-colors text-sm">{APP_CONFIG.name}</Link>
                            </p>

                            <div className="flex space-x-4 mt-2 sm:mt-0">
                                <a href="/terms" className="hover:text-blue-600 transition-colors text-sm">
                                    Terms of Service
                                </a>
                                <a href="/privacy" className="hover:text-blue-600 transition-colors text-sm">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </footer>
    )
}