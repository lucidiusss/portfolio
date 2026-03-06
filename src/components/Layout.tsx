import { PlayerFullSyncProvider } from "@splicemood/react-music-player";
import Header from "./Header";
import { Outlet, useLocation } from "react-router";
import MiniPlayer from "./MiniPlayer";

const Layout = () => {
    const path = useLocation();

    return (
        <div>
            <Header />
            <PlayerFullSyncProvider>
                <Outlet />
                {path.pathname != "/playlist" ? (
                    <MiniPlayer classNames={`bg-none`} />
                ) : (
                    <></>
                )}
            </PlayerFullSyncProvider>
        </div>
    );
};

export default Layout;
