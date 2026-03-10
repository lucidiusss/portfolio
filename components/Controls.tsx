"use client";
import { Button } from "@heroui/react";
import { useAudio } from "@splicemood/react-music-player";
import { Pause, Play, Shuffle, SkipBack, SkipForward } from "lucide-react";

const Controls = () => {
    const audio = useAudio();

    const handlePlayNext = () => {
        audio.next();
    };

    return (
        <div className="flex items-center gap-5">
            <Button
                onClick={audio.toggleShuffle}
                className={`${audio.isShuffled ? "border-neutral-400 text-neutral-400 hover:border-neutral-300 hover:text-neutral-300" : "border-transparent"} border-2 rounded-lg w-10 h-10 p-4  bg-neutral-900 hover:bg-neutral-800 text-[#a1a1a1] hover:text-white`}
            >
                <Shuffle className="border border-transparent w-4 h-4" />
            </Button>
            <Button
                onClick={audio.previous}
                className="  rounded-lg w-10 h-10 p-4  bg-neutral-900 hover:bg-neutral-800 text-[#a1a1a1] hover:text-white"
            >
                <SkipBack className="border border-transparent w-4 h-4" />
            </Button>
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
            <Button
                onClick={handlePlayNext}
                className="  rounded-lg w-10 h-10 p-4  bg-neutral-900 hover:bg-neutral-800 text-[#a1a1a1] hover:text-white"
            >
                <SkipForward className="border border-transparent w-4 h-4" />
            </Button>
            {/*<Button
                onClick={audio.toggleLoop}
                className={`${audio.toggleLoop ? "border-neutral-400 text-neutral-400 hover:border-neutral-300 hover:text-neutral-300" : "border-transparent"} border-2 rounded-lg w-12 h-12 p-4  bg-neutral-900 hover:bg-neutral-800 text-[#a1a1a1] hover:text-white`}
            >
                <Infinity className="border border-transparent w-6 h-6" />
            </Button>*/}
        </div>
    );
};

export default Controls;
