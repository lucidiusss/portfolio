import { useAudio } from "@splicemood/react-music-player";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import type { SongType } from "@/types/globalTypes";
import { Slider } from "./ui/slider";
import { useState, useMemo, useCallback, memo } from "react";
import { Pause, Play, Volume1, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const SLIDER_CLASSES = {
    trackClassName:
        "h-1 bg-neutral-700 rounded-full transition-all duration-200",
    rangeClassName: "bg-[#a1a1a1] group-hover:bg-white rounded-full",
    thumbClassName:
        "block w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 hover:scale-125 transition-all duration-200 focus:outline-none",
} as const;

const SongInfo = memo(({ song }: { song?: SongType }) => {
    if (!song) {
        return (
            <div className="flex items-center md:flex-1/4 ml-10 gap-3">
                <div className="text-white">No track selected</div>
            </div>
        );
    }

    return (
        <div className="flex items-center w-full md:flex-1/4 md:ml-10 gap-2 md:gap-3">
            <div>
                <Image
                    loading="lazy"
                    width={32}
                    height={32}
                    className="w-12 h-12 rounded-lg object-cover"
                    src={song.cover}
                    alt={song.title}
                />
            </div>
            <div className="flex flex-col gap-0">
                <h1 className="text-white text-base">{song.title}</h1>
                <Link
                    href={song.artistLink || "#"}
                    className="text-[#a1a1a1] text-sm hover:underline transition"
                >
                    {song.artist}
                </Link>
            </div>
        </div>
    );
});

SongInfo.displayName = "SongInfo";

const VolumeControl = memo(
    ({
        volume,
        onVolumeChange,
        onToggleMute,
    }: {
        volume: number;
        onVolumeChange: (value: number[]) => void;
        onToggleMute: () => void;
    }) => {
        const displayVolume = useMemo(
            () => (isNaN(volume) ? 0 : Math.min(100, Math.max(0, volume))),
            [volume],
        );

        const VolumeIcon = useMemo(() => {
            if (displayVolume === 0) return VolumeX;
            return displayVolume < 50 ? Volume1 : Volume2;
        }, [displayVolume]);

        return (
            <div className="md:w-48 w-12 flex items-center gap-2">
                <button
                    onClick={onToggleMute}
                    className="focus:outline-none cursor-pointer text-[#a1a1a1] hover:text-white transition-colors"
                    aria-label={displayVolume === 0 ? "Unmute" : "Mute"}
                >
                    <VolumeIcon className="w-4 h-4" />
                </button>

                <Slider
                    value={[displayVolume]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={onVolumeChange}
                    className="w-full md:w-full group cursor-pointer"
                    trackClassName={SLIDER_CLASSES.trackClassName}
                    rangeClassName={SLIDER_CLASSES.rangeClassName}
                    thumbClassName={SLIDER_CLASSES.thumbClassName}
                    showThumb={true}
                />

                <span className="text-[#a1a1a1] select-none text-xs min-w-10">
                    {displayVolume}%
                </span>
            </div>
        );
    },
);

VolumeControl.displayName = "VolumeControl";

const Player = () => {
    const audio = useAudio<SongType>();
    const [prevVolume, setPrevVolume] = useState(100);

    const currentSong = useMemo(() => {
        if (
            audio.playlist.length > 0 &&
            audio.currentTrackIndex !== undefined
        ) {
            return audio.playlist[audio.currentTrackIndex];
        }
        return undefined;
    }, [audio.playlist, audio.currentTrackIndex]);

    const volume =
        audio.volume !== undefined && !isNaN(audio.volume)
            ? Math.round(audio.volume * 100)
            : 0;

    const handleVolumeChange = useCallback(
        (value: number[]) => {
            const newVolume = Math.round(value[0]);
            if (newVolume > 0) {
                setPrevVolume(newVolume);
            }
            audio.setVolume(newVolume / 100);
        },
        [audio],
    );

    const toggleMute = useCallback(() => {
        if (volume === 0) {
            audio.setVolume(prevVolume / 100);
        } else {
            setPrevVolume(volume);
            audio.setVolume(0);
        }
    }, [audio, volume, prevVolume]);

    return (
        <div className="w-full px-5 md:px-0 fixed bottom-0 left-0 items-center flex h-18 md:py-2 bg-neutral-900/10 backdrop-blur-xl">
            <SongInfo song={currentSong} />
            <Button
                onClick={audio.togglePlayPause}
                className="  rounded-lg w-10 h-10 p-4  bg-neutral-900 hover:bg-neutral-800 text-[#a1a1a1] hover:text-white"
            >
                {!audio.isPlaying ? (
                    <Play className="border border-transparent w-4 h-4" />
                ) : (
                    <Pause className="border border-transparent w-4 h-4" />
                )}
            </Button>

            <div className="hidden md:flex flex-col flex-3/4 gap-1 items-center justify-center">
                <Controls />
                <ProgressBar />
            </div>

            <div className="hidden md:flex justify-end md:mr-10">
                <VolumeControl
                    volume={volume}
                    onVolumeChange={handleVolumeChange}
                    onToggleMute={toggleMute}
                />
            </div>
        </div>
    );
};

export default memo(Player);
