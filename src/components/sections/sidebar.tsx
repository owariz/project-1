"use client";

import { Button, Card, CardBody } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkIcon } from "@heroicons/react/24/outline";
import { UserInfo } from "@/types";

interface SidebarProps {
  className?: string;
  user: UserInfo | null;
}

interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
}

// Menu config
const menuItems: MenuItem[] = [
  { label: "Home", href: "/", icon: <LinkIcon className="w-5 h-5" /> },
];

export function Sidebar({ className = "", user }: SidebarProps) {
  const pathname = usePathname();

  return <DesktopSidebar className={className} pathname={pathname} user={user} />;
}

// ------------------------
// Components
// ------------------------

interface DesktopSidebarProps {
  className?: string;
  pathname: string;
  user: UserInfo | null;
}

const DesktopSidebar = ({ className = "", pathname, user }: DesktopSidebarProps) => (
  <Card shadow="none" className={`w-64 h-full min-h-screen border border-gray-200 rounded-2xl hidden lg:flex flex-col mt-4 ${className}`}>
    <CardBody className="p-0 flex flex-col flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">

      {/* Menu */}
      <nav className="p-4 flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = !item.external && pathname === item.href;
          const buttonClasses = isActive
            ? "bg-orange-400 text-white"
            : "text-gray-700 hover:bg-gradient-to-r hover:from-teal-100 hover:to-purple-100";

          return item.external ? (
            <Button
              key={item.href}
              as="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              className={`w-full justify-start h-12 rounded-lg ${buttonClasses} transition-all duration-200`}
              startContent={item.icon}
            >
              {item.label}
            </Button>
          ) : (
            <Button
              key={item.href}
              as={Link}
              href={item.href}
              variant={isActive ? "solid" : "light"}
              color={isActive ? "primary" : "default"}
              className={`w-full justify-start h-12 rounded-lg ${buttonClasses} transition-all duration-200`}
              startContent={item.icon}
            >
              {item.label}
            </Button>
          );
        })}
      </nav>
    </CardBody>
  </Card>
);
