"use client";
import { useLenis } from "../hooks/useLenis";
import { BookText, Layers, Link } from "lucide-react";

const classNames =
    "border-[#A1A1A1] group-hover:border-white group-hover:bg-white group-hover:text-black w-10 h-10 border p-2 rounded";

const NavItems = [
    {
        id: 1,
        title: "learn about my skills",
        icon: <Layers className={classNames} />,
    },
    {
        id: 2,
        title: "browse my works",
        icon: <BookText className={classNames} />,
    },
    {
        id: 3,
        title: "check out my links",
        icon: <Link className={classNames} />,
    },
];

const HeroNav = () => {
    const { scrollTo } = useLenis();

    return (
        <div className="text-[#A1A1A1] w-fit flex flex-col">
            <h1 className="text-sm font-thin hidden md:block">start here</h1>
            <nav className="flex flex-col gap-3 mt-6">
                {NavItems.map((item, i: number) => (
                    <button
                        key={i}
                        onClick={() => scrollTo("#skills")}
                        className="cursor-pointer  flex group hover:text-white transition items-center gap-5"
                    >
                        {item.icon}
                        {item.title}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default HeroNav;
