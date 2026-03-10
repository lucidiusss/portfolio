import type { SongType } from "@/types/globalTypes";
import { Avatar, Description, Label, ListBox } from "@heroui/react";
import { useAudio } from "@splicemood/react-music-player";
import Image from "next/image";
import { type FC } from "react";

interface SongProps {
    key?: number;
    song: SongType;
}

const Song: FC<SongProps> = ({ song }) => {
    const audio = useAudio<SongType>();
    const isCurrentTrack = audio.currentTrackIndex === song.id - 1;

    const handleTrackClick = () => {
        audio.setCurrentTrack(song.id - 1);
        audio.play();
    };

    return (
        <ListBox.Item
            key={song.id}
            id={song.id}
            onClick={handleTrackClick}
            textValue={song.title}
            className={`
                rounded-lg transition border-2
                px-4 py-2 w-full md:w-2/3 lg:w-1/3
                hover:border-neutral-700 hover:bg-neutral-900!
                ${
                    isCurrentTrack
                        ? "border-neutral-700 bg-neutral-900"
                        : "border-transparent"
                }
            `}
        >
            <div className="relative">
                <Avatar className="rounded-lg" size="md">
                    <Image
                        width={64}
                        height={64}
                        loading="eager"
                        src={song.cover}
                        alt={song.title}
                    />
                </Avatar>
            </div>

            <div className="flex gap-1 flex-col">
                <Label className="text-white text-lg md:text-xl">
                    {song.title}
                </Label>
                <Description className="text-[#a1a1a1] text-md md:text-[16px]">
                    {song.artist}
                </Description>
            </div>
            <ListBox.ItemIndicator />
        </ListBox.Item>
    );
};

export default Song;
