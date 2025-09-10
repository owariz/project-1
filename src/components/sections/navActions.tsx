import { Button, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu } from "@heroui/react";
import { UserInfo } from "@/types";

interface NavActionsProps {
    user: UserInfo | null;
    onLogout: () => void;
}

export const NavActions = ({ user, onLogout }: NavActionsProps) => {
    if (user) {
        return (
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Button variant="flat" className="font-semibold flex items-center">
                        {user.username}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem key="logout" onClick={onLogout}>
                        ออกจากระบบ
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }

    // Guest view
    return (
        <div className="flex flex-row items-center gap-2 sm:gap-3">
            <Button color="warning" variant="flat" size="sm" as="a" href="/auth/login" className="font-semibold">เข้าสู่ระบบ</Button>
            <Button size="sm" className="font-semibold" as="a" href="/auth/register">สมัครสมาชิก</Button>
        </div>
    );
};