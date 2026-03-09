"use client";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";

import { memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const classNames =
    "hover:bg-neutral-800 text-[#a1a1a1] hover:text-white rounded-lg hover:text-black text-xl px-3 py-2 transition";

const Menu = memo(
    ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
        return (
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            type: "spring",
                            damping: 50,
                            stiffness: 400,
                            mass: 0.5,
                        }}
                        className="fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-md z-40 p-6 pt-20 shadow-2xl"
                    >
                        <nav className="flex flex-col gap-6">
                            <Link
                                className={(cn("focus:bg-white"), classNames)}
                                href="/"
                            >
                                home
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
                    </motion.div>
                )}
            </AnimatePresence>
        );
    },
);

Menu.displayName = "Menu";

const Header = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const path = usePathname();

    return (
        <>
            <div className="fixed top-5 right-5 z-50">
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    size={28}
                    color="#a1a1a1"
                />
            </div>

            <Menu isOpen={isOpen} onClose={() => setOpen(false)} />

            <nav className="hidden lg:flex items-center fixed top-0 z-100 select-none h-16 bg-black/20 backdrop-blur-sm w-full justify-center gap-10">
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
        </>
    );
};

export default Header;
