import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.tsx";
import Projects from "./Projects.tsx";
import Playlist from "./Playlist.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<App />} />
                <Route path="/works" element={<Projects />} />
                <Route path="/playlist" element={<Playlist />} />
            </Route>
        </Routes>
    </BrowserRouter>,
);
