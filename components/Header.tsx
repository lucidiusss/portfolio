"use client";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const classNames =
        "hover:bg-neutral-800 text-[#a1a1a1] hover:text-white rounded-lg hover:text-black text-xl px-3 py-2 transition";

    const path = usePathname();
    console.log(path);
    return (
        <nav className="flex items-center fixed top-0 z-100 select-none h-16 bg-black/20 backdrop-blur-sm w-full justify-center gap-10">
            <Link
                className={
                    (cn(`${path == "/" ? "bg-white!" : ""}`), classNames)
                }
                href="/"
            >
                <Home />
            </Link>
            <Link href="/works" className={classNames}>
                works
            </Link>
            <Link href="/blog" className={classNames}>
                blog
            </Link>
            <Link href="/playlist" className={classNames}>
                playlist
            </Link>
        </nav>
    );
};

export default Header;
