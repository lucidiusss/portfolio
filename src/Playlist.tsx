import { Avatar, Description, Label, ListBox } from "@heroui/react";

import Player from "./components/Player";
import type { SongType } from "./types/globalTypes";

const SONGS = [
    {
        id: 1,
        title: "Mournin",
        artist: "Rich Amiri",
        cover: "",
        src: "/songs/Rich Amiri - Mournin",
    },
    {
        id: 2,
        title: "sinister",
        artist: "klmketa",
        cover: "",
        src: "/songs/reloaded.mp3",
    },
    {
        id: 3,
        title: "Osamawalk",
        artist: "klmketa",
        cover: "",
        src: "/songs/osamawalk.mp3",
    },
    {
        id: 4,
        title: "omg its uuu+",
        artist: "deathkeylon",
        cover: "",
        src: "/songs/omg its uuu+.mp3",
    },
    {
        id: 5,
        title: "lyfeRULEs",
        artist: "gerrarti",
        cover: "",
        src: "/songs/lyfeRULEs.mp3",
    },
    {
        id: 6,
        title: "HUNCHOS",
        artist: "Rich Amiri",
        cover: "",
        src: "/songs/HUNCHOS.mp3",
    },
    {
        id: 7,
        title: "200",
        artist: "sosocamo",
        cover: "",
        src: "/songs/200 - sosocamo.flac",
    },
    {
        id: 8,
        title: "Flex or die tryin",
        artist: "klmketaR",
        cover: "",
        src: "/songs/Flex or die tryin.mp3",
    },
    {
        id: 9,
        title: "COMЁ N GO",
        artist: "Yeat",
        cover: "",
        src: "/songs/COMË N GO - Yeat.mp3",
    },
    {
        id: 10,
        title: "Sleepwalker",
        artist: "akiaura",
        cover: "",
        src: "/songs/sleepwalker.mp3",
    },
];

const Playlist = () => {
    return (
        <div className="flex h-screen items-center flex-col justify-center">
            <ListBox
                aria-label="Songs"
                className="w-1/2  rounded-xl"
                selectionMode="single"
            >
                {SONGS.map((song) => (
                    <ListBox.Item
                        key={song.id}
                        id={song.id}
                        textValue={song.title}
                    >
                        <Avatar className="rounded-xl" size="md">
                            <Avatar.Image alt={song.artist} src={song.cover} />
                            <Avatar.Fallback>{song.artist}</Avatar.Fallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <Label className="text-white text-2xl">
                                {song.title}
                            </Label>
                            <Description className="text-[#a1a1a1] text-xl">
                                {song.artist}
                            </Description>
                        </div>
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                ))}
            </ListBox>

            <Player />
        </div>
    );
};

export default Playlist;
