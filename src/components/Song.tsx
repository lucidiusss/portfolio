import type { SongType } from "@/types/globalTypes";
import { Avatar, Description, Label, ListBox, Skeleton } from "@heroui/react";
import { useAudio } from "@splicemood/react-music-player";
import { useState, type FC } from "react";

interface SongProps {
    key?: number;
    song: SongType;
}

const Song: FC<SongProps> = ({ song }) => {
    const audio = useAudio<SongType>();
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

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
                w-1/4 px-4 py-2
                hover:border-neutral-700 hover:bg-neutral-900!
                ${
                    isCurrentTrack
                        ? "border-neutral-700 bg-neutral-900"
                        : "border-transparent"
                }
            `}
        >
            <div className="relative">
                {!imageLoaded && (
                    <Skeleton className="absolute inset-0 rounded-lg" />
                )}

                <Avatar className="rounded-lg" size="md">
                    <Avatar.Image
                        onLoad={() => setImageLoaded(true)}
                        alt={song.title}
                        src={song.cover}
                        className={!imageLoaded ? "opacity-0" : "opacity-100"}
                    />
                </Avatar>
            </div>

            <div className="flex gap-1 flex-col">
                <Label className="text-white text-xl">{song.title}</Label>
                <Description className="text-[#a1a1a1] text-[16px]">
                    {song.artist}
                </Description>
            </div>
            <ListBox.ItemIndicator />
        </ListBox.Item>
    );
};

export default Song;
