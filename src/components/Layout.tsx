import Header from "./Header";
import { Outlet } from "react-router";
import { HeroUIProvider } from "@heroui/system";

const Layout = () => {
    return (
        <div>
            <HeroUIProvider>
                <Header />
                <Outlet />
                {/*<Player />*/}
            </HeroUIProvider>
        </div>
    );
};

export default Layout;
