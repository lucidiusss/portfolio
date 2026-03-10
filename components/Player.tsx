import { useAudio } from "@splicemood/react-music-player";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import type { SongType } from "@/types/globalTypes";
import { Slider } from "./ui/slider";
import { useState, useMemo, useCallback, memo } from "react";
import { Volume1, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
        <div className="flex items-center md:flex-1/4 md:ml-10 gap-2 md:gap-3">
            <div className="h-8 w-8 md:w-16 md:h-16">
                <Image
                    loading="lazy"
                    width={32}
                    height={32}
                    className="h-8 w-8 md:w-16 md:h-16 rounded-lg object-cover"
                    src={song.cover}
                    alt={song.title}
                />
            </div>
            <div className="flex flex-col gap-0">
                <h1 className="text-white text-sm  md:text-xl">{song.title}</h1>
                <Link
                    href={song.artistLink || "#"}
                    className="text-[#a1a1a1] text-xs md:text-[16px] hover:underline transition"
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
                    <VolumeIcon className="w-5 h-5" />
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

                <span className="text-[#a1a1a1] select-none text-sm min-w-10">
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
        <div className="w-full fixed bottom-0 left-0 items-center flex h-18 py-2 bg-black/20 backdrop-blur-sm">
            <SongInfo song={currentSong} />

            <div className="flex flex-col flex-3/4 gap-1 items-center justify-center">
                <Controls />
                <ProgressBar />
            </div>

            <div className="md:flex-1/4 flex justify-end md:mr-10">
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
