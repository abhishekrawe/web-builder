import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
            <nav className="flex flex-col md:flex-row justify-between items-center border-b border-border h-auto md:h-[60px] px-4 md:px-16 py-4 md:py-0">
                <div className="mb-4 md:mb-0">
                    <Logo />
                </div>
                <div className="flex gap-4 items-center">
                    <ThemeSwitcher />
                    <UserButton afterSignOutUrl="/sign-in" />
                </div>
            </nav>
            <main className="flex w-full h-full items-center justify-center p-4 md:p-0">{children}</main>
        </div>
    );
};

export default Layout;
