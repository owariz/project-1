import Link from "next/link";

import { APP_CONFIG } from "@/config/app";

export const Logo = () => (
    <Link href="/">
        <h4 className="font-bold text-lg sm:text-xl cursor-pointer">{APP_CONFIG.name}</h4>
    </Link>
);