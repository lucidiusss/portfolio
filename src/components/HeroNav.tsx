import { useLenis } from "../hooks/useLenis";
import { BookText, Layers, Music } from "lucide-react";
import { NavLink } from "react-router";

const HeroNav = () => {
    const { scrollTo } = useLenis();

    return (
        <div className="text-[#A1A1A1] flex flex-col w-1/3">
            <h1 className="text-sm font-thin">start here</h1>
            <nav className="flex flex-col gap-3 mt-6">
                <button
                    onClick={() => scrollTo("#skills")}
                    className="cursor-pointer flex group hover:text-white transition items-center gap-5"
                >
                    <Layers className="border-[#A1A1A1] group-hover:border-white group-hover:bg-white group-hover:text-black w-10 h-10 border p-2 rounded" />
                    learn about my skills
                </button>
                <NavLink
                    to="/work"
                    className="flex group hover:text-white transition items-center gap-5"
                >
                    <BookText className=" border-[#A1A1A1] group-hover:border-white group-hover:bg-white group-hover:text-black w-10 h-10 border p-2 rounded" />
                    browse my works
                </NavLink>
                <NavLink
                    to="/playlist"
                    className="flex group hover:text-white transition items-center gap-5"
                >
                    <Music className=" border-[#A1A1A1] group-hover:border-white group-hover:bg-white group-hover:text-black w-10 h-10 border p-2 rounded" />
                    listen my playlist
                </NavLink>
            </nav>
        </div>
    );
};

export default HeroNav;
