import { NavLink, useLocation } from "react-router";
import { Home } from "lucide-react";
import { cn } from "../lib/utils";

const Header = () => {
    const classNames =
        "hover:bg-neutral-800 text-[#a1a1a1] hover:text-white rounded-lg hover:text-black text-xl px-3 py-2 transition";

    const path = useLocation();
    console.log(path);

    return (
        <nav className="flex items-center fixed top-0 z-100 select-none h-16 bg-black/20 backdrop-blur-sm w-full justify-center gap-10">
            <NavLink
                to="/"
                className={
                    (cn(`${path.pathname === "/" ? "bg-white" : ""}`),
                    classNames)
                }
            >
                <Home />
            </NavLink>
            <NavLink to="/works" className={classNames}>
                works
            </NavLink>
            <NavLink to="/blog" className={classNames}>
                blog
            </NavLink>
            <NavLink to="/playlist" className={classNames}>
                playlist
            </NavLink>
        </nav>
    );
};

export default Header;
