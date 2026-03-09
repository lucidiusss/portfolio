"use client";

import { PlayerFullSyncProvider } from "@splicemood/react-music-player";
import dynamic from "next/dynamic";

const PlaylistContent = dynamic(
    () => import("@/components/PlaylistContent"), // Loader function
    {
        ssr: false,
    },
);

export default function PlaylistPage() {
    return (
        <main className="h-screen w-full flex items-center justify-center">
            <PlaylistContent />
        </main>
    );
}
