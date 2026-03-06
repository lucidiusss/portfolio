import { useAudio } from "@splicemood/react-music-player";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import type { SongType } from "@/types/globalTypes";
import { NavLink } from "react-router";
import { Slider } from "./ui/slider";
import { useEffect, useState } from "react";
import { Volume1, Volume2, VolumeX } from "lucide-react";

const Player = () => {
    const audio = useAudio<SongType>();
    const [volume, setVolume] = useState(100);
    const [prevVolume, setPrevVolume] = useState(100);

    useEffect(() => {
        if (audio.volume !== undefined && !isNaN(audio.volume)) {
            const newVolume = Math.round(audio.volume * 100);
            setVolume(newVolume);
            if (newVolume > 0) {
                setPrevVolume(newVolume);
            }
        }
    }, [audio.volume]);

    const song =
        audio.playlist.length > 0 && audio.currentTrackIndex !== undefined
            ? audio.playlist[audio.currentTrackIndex]
            : undefined;

    const handleVolumeChange = (value: number[]) => {
        const newVolume = Math.round(value[0]);
        setVolume(newVolume);
        if (newVolume > 0) {
            setPrevVolume(newVolume);
        }
        audio.setVolume(newVolume / 100);
    };

    const toggleMute = () => {
        if (volume === 0) {
            audio.setVolume(prevVolume / 100);
            setVolume(prevVolume);
        } else {
            setPrevVolume(volume);
            audio.setVolume(0);
            setVolume(0);
        }
    };

    const displayVolume = isNaN(volume)
        ? 0
        : Math.min(100, Math.max(0, volume));

    return (
        <div className="w-full fixed bottom-5 items-center flex h-16 bg-black/20 backdrop-blur-sm">
            <div className="flex items-center flex-1/4 ml-10 gap-3">
                <div className="w-16 h-16">
                    <img
                        className="w-16 h-16 rounded-lg object-cover"
                        src={song?.cover}
                        alt={song?.title}
                    />
                </div>
                <div>
                    <h1 className="text-white">{song?.title || "No track"}</h1>
                    <NavLink
                        to={song?.artistLink || "#"}
                        className="text-[#a1a1a1] hover:underline transition"
                    >
                        {song?.artist}
                    </NavLink>
                </div>
            </div>

            <div className="flex flex-col flex-3/4 gap-2 items-center justify-center">
                <Controls />
                <ProgressBar />
            </div>

            <div className="flex-1/4 flex justify-end mr-10">
                <div className="w-48 flex items-center gap-2">
                    <button
                        onClick={toggleMute}
                        className="focus:outline-none cursor-pointer text-[#a1a1a1] hover:text-white"
                    >
                        {displayVolume === 0 ? (
                            <VolumeX className="w-6 h-6" />
                        ) : displayVolume < 50 ? (
                            <Volume1 className="w-6 h-6" />
                        ) : (
                            <Volume2 className="w-6 h-6" />
                        )}
                    </button>

                    <Slider
                        value={[displayVolume]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={handleVolumeChange}
                        className="w-full group"
                        trackClassName="h-1 bg-neutral-700 rounded-full transition-all duration-200"
                        rangeClassName="bg-[#a1a1a1] group-hover:bg-white rounded-full"
                        thumbClassName="block w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 hover:scale-125 transition-all duration-200 focus:outline-none"
                        showThumb={true}
                    />

                    <span className="text-[#a1a1a1] select-none text-md">
                        {displayVolume}%
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Player;
