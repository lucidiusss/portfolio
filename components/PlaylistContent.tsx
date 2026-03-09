import { ListBox } from "@heroui/react";
import { useEffect, useMemo } from "react";
import { PlayerNoSyncProvider, useAudio } from "@splicemood/react-music-player";
import { SongType } from "@/types/globalTypes";
import Song from "./Song";
import { SONGS } from "@/lib/consts";
import Player from "./Player";

const PlaylistContentInner = () => {
    const audio = useAudio<SongType>();

    useEffect(() => {
        audio.replacePlaylist(SONGS);
        audio.setVolumePercent(50);

        return () => {
            audio.replacePlaylist([]);
        };
    }, []);

    const songList = useMemo(
        () => audio.playlist.map((song) => <Song song={song} key={song.id} />),
        [audio.playlist],
    );

    return (
        <>
            <ListBox
                aria-label="Songs"
                className="flex gap-1 items-center"
                selectionMode="single"
            >
                {songList}
            </ListBox>
            <Player />
        </>
    );
};

const PlaylistContent = () => {
    return (
        <PlayerNoSyncProvider>
            <PlaylistContentInner />
        </PlayerNoSyncProvider>
    );
};

export default PlaylistContent;
