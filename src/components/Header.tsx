import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { useLenis } from "../hooks/useLenis";
import { Home } from "lucide-react";

const Header = () => {
    const { scrollTo } = useLenis();
    return (
        <nav className="flex items-center fixed top-0 h-16 bg-black/10 backdrop-blur-sm w-full justify-center gap-10">
            <NavLink
                to="/"
                className="text-white cursor-pointer hover:bg-white rounded-lg hover:text-black text-xl px-3 py-2 transition"
            >
                <Home />
            </NavLink>
            <NavLink
                to="/works"
                className="text-white cursor-pointer hover:bg-white rounded-lg hover:text-black text-xl px-3 py-2 transition"
            >
                works
            </NavLink>
            <NavLink
                to="/blog"
                className="text-white cursor-pointer hover:bg-white rounded-lg hover:text-black text-xl px-3 py-2 transition"
            >
                blog
            </NavLink>
            <Button
                onClick={() => scrollTo("#links")}
                className="text-white cursor-pointer hover:bg-white rounded-lg hover:text-black text-xl px-3 py-2 transition"
            >
                links
            </Button>
        </nav>
    );
};

export default Header;
