import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
            <nav className="flex justify-between items-center border-b border-border h-[60px] px-16 py-12">
                <Logo />
                <div className="flex gap-4 items-center">
                    <ThemeSwitcher />
                    <UserButton afterSignOutUrl="/sign-in" />
                </div>
            </nav>
            <main className="flex w-full h-full items-center justify-center">{children}</main>
        </div>
    );
};

export default Layout;
