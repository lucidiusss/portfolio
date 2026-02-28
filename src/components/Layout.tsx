import Header from "./Header";
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            {/*<Player />*/}
        </div>
    );
};

export default Layout;
