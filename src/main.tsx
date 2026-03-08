import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.tsx";
import Playlist from "./Playlist.tsx";
import Works from "./Works.tsx";
import { PlayerNoSyncProvider } from "@splicemood/react-music-player";
import Blog from "./Blog.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<App />} />
                <Route path="/works" element={<Works />} />
                <Route path="/blog" element={<Blog />} />
                <Route
                    path="/playlist"
                    element={
                        <PlayerNoSyncProvider>
                            <Playlist />
                        </PlayerNoSyncProvider>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
);
