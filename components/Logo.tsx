import Link from "next/link";
import Image from "next/image";
import React from "react";

function Logo() {
    return (
        <Link href="/" className="font-bold text-3xl hover:cursor-pointer">
            <Image src="/fibrlogo.svg" width={120} height={120} alt="Logo" />
        </Link>
    );
}

export default Logo;
