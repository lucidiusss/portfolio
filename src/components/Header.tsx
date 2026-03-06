import { NavLink } from "react-router";
import { Home } from "lucide-react";

const Header = () => {
    const classNames =
        "hover:bg-neutral-800 text-[#a1a1a1] hover:text-white rounded-lg hover:text-black text-xl px-3 py-2 transition";

    return (
        <nav className="flex items-center fixed top-0 z-100 h-16 bg-black/20 backdrop-blur-sm w-full justify-center gap-10">
            <NavLink to="/" className={classNames}>
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
            <NavLink to="/links" className={classNames}>
                links
            </NavLink>
        </nav>
    );
};

export default Header;
